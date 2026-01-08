"use client";

import { useEffect } from "react";
import { ThemeManager } from "@/src/lib/theme-manager";

export function ThemeInitializer() {
  useEffect(() => {
    const preferences = ThemeManager.getThemePreferences();
    ThemeManager.applyThemeToDocument(preferences);

    // Handle system dark mode if that's the setting
    const nightModeSetting = localStorage.getItem("night-mode-setting");
    if (nightModeSetting === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      ThemeManager.setThemePreferences({ darkMode: prefersDark });
    }
  }, []);

  return null;
}
