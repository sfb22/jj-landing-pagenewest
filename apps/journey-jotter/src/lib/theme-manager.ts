// types/theme.ts
// Interface defining the structure of theme preferences
// Contains all customizable aspects of the application's theme
export interface ThemePreferences {
  darkMode: boolean;
  themeId: string;
  backgroundColor: string;
  patternOpacity: string;
  patternId: string;
  customPatternId?: string;
}

// Default theme settings
// Uses system dark mode preference if available, otherwise defaults to light mode
// Sets default colors, patterns, and opacity values
export const DEFAULT_THEME_PREFERENCES: ThemePreferences = {
  // darkMode:
  //   typeof window !== "undefined"
  //     ? window.matchMedia("(prefers-color-scheme: dark)").matches
  //     : false,
  darkMode: false,
  themeId: "journey-jotter",
  backgroundColor: "hsl(199, 80%, 80%)",
  patternOpacity: "0.15",
  patternId: "pattern-15",
  customPatternId: undefined,
};

const THEME_STORAGE_KEY = "app-theme-preferences";

// Static class that handles all theme-related operations
export class ThemeManager {
  /**
   * Retrieves theme preferences from localStorage
   * Falls back to default preferences if:
   * - Running on server-side
   * - No stored preferences exist
   * - Stored preferences are invalid
   */
  static getThemePreferences(): ThemePreferences {
    if (typeof window === "undefined") {
      return DEFAULT_THEME_PREFERENCES;
    }

    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (!stored) {
      return DEFAULT_THEME_PREFERENCES;
    }

    try {
      const parsed = JSON.parse(stored) as Partial<ThemePreferences>;
      return {
        ...DEFAULT_THEME_PREFERENCES,
        ...parsed,
      };
    } catch (error) {
      console.error("Error parsing theme preferences:", error);
      return DEFAULT_THEME_PREFERENCES;
    }
  }

  /**
   * Updates theme preferences in localStorage
   * Merges new preferences with existing ones
   * @param preferences - Partial theme preferences to update
   * @returns Complete updated theme preferences
   */
  static setThemePreferences(
    preferences: Partial<ThemePreferences>
  ): ThemePreferences {
    if (typeof window === "undefined") {
      return DEFAULT_THEME_PREFERENCES;
    }

    const currentPreferences = this.getThemePreferences();
    const newPreferences = {
      ...currentPreferences,
      ...preferences,
    };

    try {
      localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(newPreferences));
      return newPreferences;
    } catch (error) {
      console.error("Error saving theme preferences:", error);
      return currentPreferences;
    }
  }

  /**
   * Updates a single theme preference
   * @param key - The preference key to update
   * @param value - The new value for the preference
   * @returns Complete updated theme preferences
   */
  static updateSinglePreference<K extends keyof ThemePreferences>(
    key: K,
    value: ThemePreferences[K]
  ): ThemePreferences {
    return this.setThemePreferences({ [key]: value });
  }

  /**
   * Resets all theme preferences to default values
   * Clears localStorage and returns to initial settings
   */
  static resetToDefaults(): ThemePreferences {
    if (typeof window === "undefined") {
      return DEFAULT_THEME_PREFERENCES;
    }

    localStorage.setItem(
      THEME_STORAGE_KEY,
      JSON.stringify(DEFAULT_THEME_PREFERENCES)
    );
    return DEFAULT_THEME_PREFERENCES;
  }

  /**
   * Applies theme preferences to the document
   * Sets CSS variables and attributes for:
   * - Dark/light mode
   * - Theme ID
   * - Background color
   * - Pattern opacity
   * - Pattern ID
   */
  static applyThemeToDocument(preferences: ThemePreferences): void {
    if (typeof window === "undefined") return;

    // Apply theme-id and dark mode
    const mode = preferences.darkMode ? "dark" : "light";
    document.documentElement.setAttribute(
      "data-theme",
      `${preferences.themeId}-${mode}`
    );

    // Apply other theme preferences as CSS variables
    document.documentElement.style.setProperty(
      "--background-color",
      preferences.backgroundColor
    );
    document.documentElement.style.setProperty(
      "--pattern-opacity",
      preferences.patternOpacity
    );
    document.documentElement.setAttribute(
      "data-pattern",
      preferences.customPatternId || preferences.patternId
    );
  }
}

// Helper hooks for React components
import { useState, useEffect } from "react";

// Add this to handle cross-component updates
const THEME_CHANGE_EVENT = "theme-preferences-changed";

/**
 * React hook for managing theme preferences
 * Provides:
 * - Current theme preferences
 * - Methods to update preferences
 * - Auto-syncs with system dark mode changes
 * - Persists changes to localStorage
 * - Automatically applies theme changes to document
 */
export function useThemePreferences() {
  const [preferences, setPreferences] = useState<ThemePreferences>(
    DEFAULT_THEME_PREFERENCES
  );
  const [updateCounter, setUpdateCounter] = useState(0);

  // Listen for theme changes
  useEffect(() => {
    const handleThemeChange = () => {
      const savedPrefs = ThemeManager.getThemePreferences();
      setPreferences(savedPrefs);
      ThemeManager.applyThemeToDocument(savedPrefs);
      setUpdateCounter((prev) => prev + 1);
    };

    // Initialize
    handleThemeChange();

    // Listen for changes
    window.addEventListener(THEME_CHANGE_EVENT, handleThemeChange);

    // Set up system dark mode listener
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const handleDarkModeChange = (e: MediaQueryListEvent) => {
      const nightModeSetting = localStorage.getItem("night-mode-setting");
      if (nightModeSetting === "system") {
        updateSinglePreference("darkMode", e.matches);
      }
    };

    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);
    return () => {
      window.removeEventListener(THEME_CHANGE_EVENT, handleThemeChange);
      darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, []);

  const updatePreferences = (newPreferences: Partial<ThemePreferences>) => {
    const updated = ThemeManager.setThemePreferences(newPreferences);
    setPreferences(updated);
    ThemeManager.applyThemeToDocument(updated);
    setUpdateCounter((prev) => prev + 1);
    // Dispatch event to notify other components
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

  const updateSinglePreference = <K extends keyof ThemePreferences>(
    key: K,
    value: ThemePreferences[K]
  ) => {
    const updated = ThemeManager.updateSinglePreference(key, value);
    setPreferences(updated);
    ThemeManager.applyThemeToDocument(updated);
    setUpdateCounter((prev) => prev + 1);
    // Dispatch event to notify other components
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

  const resetToDefaults = () => {
    const defaults = ThemeManager.resetToDefaults();
    setPreferences(defaults);
    ThemeManager.applyThemeToDocument(defaults);
    setUpdateCounter((prev) => prev + 1);
    // Dispatch event to notify other components
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

  return {
    preferences,
    updatePreferences,
    updateSinglePreference,
    resetToDefaults,
    updateCounter,
  };
}

// Usage example:
/*
import { useThemePreferences } from '@/utils/theme';

function ThemeSettings() {
  const { 
    preferences, 
    updatePreferences, 
    updateSinglePreference, 
    resetToDefaults, 
    updateCounter 
  } = useThemePreferences();

  // Update single preference
  const toggleDarkMode = () => {
    updateSinglePreference('darkMode', !preferences.darkMode);
  };

  // Update multiple preferences
  const updateTheme = (themeId: string, backgroundColor: string) => {
    updatePreferences({
      themeId,
      backgroundColor
    });
  };

  // Reset all preferences
  const handleReset = () => {
    resetToDefaults();
  };

  return (
    <div>
      <switch checked={preferences.darkMode} onChange={toggleDarkMode} />
      {/* Other theme controls */ /*}
    </div>
  );
}
*/
