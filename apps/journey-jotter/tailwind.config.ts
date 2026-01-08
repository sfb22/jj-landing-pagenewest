import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";
import colors from "tailwindcss/colors";
import jjColors from "./src/lib/jj-colors";

const config: Config = {
  darkMode: ["class"],
  // darkMode: "media",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        "big-stone": {
          "50": "#f0f8ff",
          "100": "#e1effd",
          "200": "#bcdffb",
          "300": "#81c7f8",
          "400": "#3eabf2",
          "500": "#158fe2",
          "600": "#0871c1",
          "700": "#085b9c",
          "800": "#0b4d81",
          "900": "#0f416b",
          "950": "#092540",
        },
        "mint-green": {
          "50": "#f0fdf2",
          "100": "#dbfde3",
          "200": "#baf8c9",
          "300": "#7df099",
          "400": "#47e16d",
          "500": "#1fc849",
          "600": "#14a538",
          "700": "#138230",
          "800": "#15662a",
          "900": "#135425",
          "950": "#042f11",
        },
        alabaster: {
          "50": "#f8f8f8",
          "100": "#efefef",
          "200": "#dcdcdc",
          "300": "#bdbdbd",
          "400": "#989898",
          "500": "#7c7c7c",
          "600": "#656565",
          "700": "#525252",
          "800": "#464646",
          "900": "#3d3d3d",
          "950": "#292929",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "bounce-once": {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(0.9)",
          },
        },
        "pop-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.8)",
          },
          "70%": {
            opacity: "1",
            transform: "scale(1.1)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bounce-once": "bounce-once 0.5s ease-in-out",
        "pop-in": "pop-in 0.3s ease-out",
      },
    },
  },

  /* Big Stone Colors */
  // --big-stone-50: #f0f8ff;
  // --big-stone-100: #e1effd;
  // --big-stone-200: #bcdffb;
  // --big-stone-300: #81c7f8;
  // --big-stone-400: #3eabf2;
  // --big-stone-500: #158fe2;
  // --big-stone-600: #0871c1;
  // --big-stone-700: #085b9c;
  // --big-stone-800: #0b4d81;
  // --big-stone-900: #0f416b;
  // --big-stone-950: #092540;

  // /* Mint Green Colors */
  // --mint-green-50: #f0fdf2;
  // --mint-green-100: #dbfde3;
  // --mint-green-200: #baf8c9;
  // --mint-green-300: #7df099;
  // --mint-green-400: #47e16d;
  // --mint-green-500: #1fc849;
  // --mint-green-600: #14a538;
  // --mint-green-700: #138230;
  // --mint-green-800: #15662a;
  // --mint-green-900: #135425;
  // --mint-green-950: #042f11;

  // /* Alabaster Colors */
  // --alabaster-50: #f8f8f8;
  // --alabaster-100: #efefef;
  // --alabaster-200: #dcdcdc;
  // --alabaster-300: #bdbdbd;
  // --alabaster-400: #989898;
  // --alabaster-500: #7c7c7c;
  // --alabaster-600: #656565;
  // --alabaster-700: #525252;
  // --alabaster-800: #464646;
  // --alabaster-900: #3d3d3d;
  // --alabaster-950: #292929;
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-displaymodes"),
    createThemes(({ light, dark }) => ({
      "journey-jotter-light": light({
        background: colors.stone[100],
        foreground: colors.stone[900],
        "nav-top": colors.stone[100],
        "nav-bottom": colors.stone[100],
        card: colors.stone[50],
        "card-foreground": colors.stone[800],
        popover: colors.stone[200],
        "popover-foreground": colors.stone[900],
        primary: "#14a538",
        "primary-foreground": colors.stone[50],
        secondary: colors.stone[600],
        "secondary-foreground": colors.stone[50],
        muted: colors.stone[400],
        "muted-foreground": colors.stone[600],
        accent: "#dbfde3",
        "accent-foreground": "#042f11",
        destructive: colors.red[600],
        "destructive-foreground": colors.stone[50],
        border: colors.stone[200],
        input: colors.stone[200],
        ring: "#14a538",
        radius: "0.5rem",
        "chart-1": "#1fc849",
        "chart-2": colors.amber[500],
        "chart-3": colors.green[600],
        "chart-4": colors.lime[500],
        "chart-5": colors.orange[400],
        chat: {
          pattern: {
            "color-1": "#138230",
            "color-2": "#138230",
            "color-3": colors.lime[500],
          },
          background: {
            "color-1": colors.emerald[100],
            "color-2": "#dbfde3",
            "color-3": colors.lime[100],
          },
          bubble: {
            assistant: colors.stone[50],
            user: colors.teal[200],
          },
          text: colors.stone[200],
          "action-button": {
            text: "#14a538",
            background: "#f0fdf2",
          },
        },
        modal: {
          background: {
            "color-1": colors.emerald[950],
            "color-2": colors.emerald[900],
            "color-3": colors.emerald[950],
          },
        },
        settings: {
          background: colors.stone[200],
          foreground: colors.stone[900],
          border: colors.stone[300],
          divider: colors.stone[200],
          card: colors.stone[50],
          "card-foreground": colors.stone[950],
          muted: colors.stone[500],
          icon: colors.stone[50],
        },
        journal: {
          background: colors.stone[200],
          foreground: colors.stone[900],
          card: colors.stone[50],
          "card-foreground": colors.stone[900],
          border: colors.stone[200],
          muted: colors.stone[600],
          "muted-foreground": colors.stone[500],
        },
      }),
      "journey-jotter-dark": dark({
        background: colors.black,
        foreground: colors.stone[100],
        "nav-top": colors.stone[950],
        "nav-bottom": colors.stone[950],
        card: colors.stone[950],
        "card-foreground": colors.stone[100],
        popover: colors.black,
        "popover-foreground": colors.stone[100],
        primary: "#1fc849",
        "primary-foreground": colors.stone[950],
        secondary: colors.stone[500],
        "secondary-foreground": colors.stone[100],
        muted: colors.stone[800],
        "muted-foreground": colors.stone[400],
        accent: "#042f11",
        "accent-foreground": "#dbfde3",
        destructive: colors.red[800],
        "destructive-foreground": colors.stone[100],
        border: colors.stone[900],
        input: colors.black,
        ring: "#138230",
        "chart-1": "#47e16d",
        "chart-2": colors.amber[400],
        "chart-3": colors.green[500],
        "chart-4": colors.lime[400],
        "chart-5": colors.orange[400],
        chat: {
          pattern: {
            "color-1": colors.green[200],
            "color-2": "#47e16d",
            "color-3": "#dbfde3",
          },
          background: {
            "color-1": colors.stone[950],
            "color-2": colors.stone[950],
            "color-3": colors.black,
          },
          bubble: {
            assistant: colors.neutral[700],
            user: "#138230",
          },
          text: colors.stone[200],
          "action-button": {
            text: "#1fc849",
            background: colors.stone[950],
          },
        },
        settings: {
          background: colors.stone[950],
          foreground: colors.stone[200],
          border: colors.stone[950],
          divider: colors.stone[800],
          card: colors.stone[900],
          "card-foreground": colors.stone[100],
          muted: colors.stone[500],
        },
        journal: {
          background: colors.black,
          foreground: colors.stone[200],
          card: colors.black,
          "card-foreground": colors.stone[200],
          border: colors.stone[900],
          muted: colors.stone[600],
          "muted-foreground": colors.stone[500],
        },
      }),

      "jj-light": light({
        background: "#FFFAF0", // big-stone-600
        foreground: colors.black, // alabaster-950
        "nav-top": "#092540", // alabaster-50
        "nav-bottom": "#092540", // alabaster-50
        card: "#efefef", // alabaster-100
        "card-foreground": colors.black, // alabaster-900
        popover: "#efefef", // alabaster-100
        "popover-foreground": "#292929", // alabaster-950
        primary: "#80ED99", // big-stone-600
        "primary-foreground": "#f8f8f8", // alabaster-50
        secondary: "#525252", // alabaster-600
        "secondary-foreground": "#f8f8f8", // alabaster-50
        muted: "#bdbdbd", // alabaster-300
        "muted-foreground": colors.white, // alabaster-600
        accent: "#dbfde3", // mint-green-100
        "accent-foreground": "#135425", // mint-green-900
        destructive: "hsl(0 84.2% 60.2%)",
        "destructive-foreground": "#f8f8f8", // alabaster-50
        border: "#092540", // alabaster-200
        input: "#f8f8f8", // alabaster-200
        ring: "#0871c1", // big-stone-600
        radius: "0.5rem",
        chat: {
          pattern: {
            "color-1": "#FFFAF0", // big-stone-600
            "color-2": "#FFFAF0", // big-stone-500
            "color-3": "#FFFAF0", // mint-green-500
          },
          background: {
            "color-1": "#FFFAF0", // big-stone-100
            "color-2": "#FFFAF0", // big-stone-50
            "color-3": "#FFFAF0", // mint-green-50
          },
          bubble: {
            assistant: "#dcdcdc", // alabaster-50
            user: "#80ED99", // big-stone-200
          },
          text: "#464646", // alabaster-800
          "action-button": {
            text: "#138230", // big-stone-600
            background: "#dbfde3",
          },
        },
        settings: {
          background: "#FFFAF0", // alabaster-100
          foreground: "#3d3d3d", // alabaster-900
          border: "#dcdcdc", // alabaster-200
          divider: "#dcdcdc", // alabaster-200
          card: "#F8F8F8", // alabaster-50
          "card-foreground": colors.black, // alabaster-950
          muted: "#7c7c7c", // alabaster-500
          icon: "#f8f8f8", // alabaster-50
        },
        journal: {
          background: "#FFFAF0", // alabaster-100
          foreground: "#3d3d3d", // alabaster-900
          card: "#FFFAF0", // alabaster-50
          "card-foreground": colors.black, // alabaster-900
          border: "#dcdcdc", // alabaster-200
          muted: "#656565", // alabaster-600
          "muted-foreground": colors.black, // alabaster-500
          "date-foreground": colors.white, // alabaster-800
          "date-background": "#092540", // alabaster-100
        },
      }),
      "frost-light": light({
        background: colors.slate[100],
        foreground: colors.slate[900],
        "nav-top": colors.slate[100],
        "nav-bottom": colors.slate[100],
        card: colors.slate[50],
        "card-foreground": colors.slate[800],
        popover: colors.slate[200],
        "popover-foreground": colors.slate[900],
        primary: colors.sky[600],
        "primary-foreground": colors.slate[100],
        secondary: colors.slate[600],
        "secondary-foreground": colors.slate[50],
        muted: colors.slate[400],
        "muted-foreground": "hsl(215.4 16.3% 46.9%)",
        accent: "hsl(210 40% 96.1%)",
        "accent-foreground": "hsl(222.2 47.4% 11.2%)",
        destructive: "hsl(0 84.2% 60.2%)",
        "destructive-foreground": "hsl(210 40% 98%)",
        border: colors.slate[200],
        input: colors.slate[200],
        ring: colors.sky[600],
        radius: "0.5rem",
        "chart-1": "hsl(12 76% 61%)",
        "chart-2": "hsl(173 58% 39%)",
        "chart-3": "hsl(197 37% 24%)",
        "chart-4": "hsl(43 74% 66%)",
        "chart-5": "hsl(27 87% 67%)",
        chat: {
          pattern: {
            "color-1": colors.sky[600],
            "color-2": colors.cyan[600],
            "color-3": colors.teal[600],
          },
          background: {
            "color-1": colors.sky[100],
            "color-2": colors.cyan[100],
            "color-3": colors.teal[100],
          },
          bubble: {
            assistant: colors.slate[50],
            user: colors.sky[200],
          },
          text: colors.slate[200],
          "action-button": {
            text: colors.sky[600],
            background: colors.sky[50],
          },
        },
        settings: {
          background: colors.slate[200],
          foreground: colors.slate[950],
          border: colors.slate[300],
          divider: colors.slate[200],
          card: colors.slate[100],
          "card-foreground": colors.slate[950],
          muted: colors.slate[500],
          icon: colors.slate[50],
        },
        journal: {
          background: colors.slate[200],
          foreground: colors.slate[900],
          card: colors.slate[100],
          "card-foreground": colors.slate[900],
          border: colors.slate[200],
          muted: colors.slate[600],
          "muted-foreground": colors.slate[500],
        },
      }),
      "frost-dark": dark({
        background: colors.black,
        foreground: colors.neutral[200],
        "nav-top": colors.neutral[900],
        "nav-bottom": colors.neutral[900],
        card: colors.black,
        "card-foreground": colors.neutral[200],
        popover: colors.black,
        "popover-foreground": colors.neutral[50],
        primary: colors.sky[500],
        "primary-foreground": colors.black,
        secondary: colors.neutral[300],
        "secondary-foreground": colors.neutral[50],
        muted: colors.neutral[700],
        "muted-foreground": colors.neutral[500],
        accent: colors.neutral[800],
        "accent-foreground": colors.neutral[50],
        destructive: colors.red[900],
        "destructive-foreground": colors.neutral[50],
        border: colors.black,
        input: colors.neutral[950],
        ring: colors.sky[700],
        "chart-1": colors.blue[500],
        "chart-2": colors.emerald[500],
        "chart-3": colors.orange[500],
        "chart-4": colors.purple[500],
        "chart-5": colors.pink[500],
        chat: {
          pattern: {
            "color-1": colors.sky[300],
            "color-2": colors.sky[400],
            "color-3": colors.sky[500],
          },
          background: {
            "color-1": colors.black,
            "color-2": colors.black,
            "color-3": colors.black,
          },
          bubble: {
            assistant: colors.neutral[800],
            user: colors.cyan[800],
          },
          text: colors.neutral[200],
          "action-button": {
            text: colors.sky[500],
            background: colors.neutral[950],
          },
        },
        settings: {
          background: colors.black,
          foreground: colors.neutral[200],
          border: colors.neutral[950],
          divider: colors.neutral[800],
          card: colors.neutral[900],
          "card-foreground": colors.neutral[100],
          muted: colors.neutral[500],
        },
        journal: {
          background: colors.black,
          foreground: colors.neutral[200],
          card: colors.black,
          "card-foreground": colors.neutral[200],
          border: colors.neutral[900],
          muted: colors.neutral[600],
          "muted-foreground": colors.neutral[500],
        },
      }),
      "forest-light": light({
        background: colors.stone[100],
        foreground: colors.stone[900],
        "nav-top": colors.stone[100],
        "nav-bottom": colors.stone[100],
        card: colors.stone[50],
        "card-foreground": colors.stone[800],
        popover: colors.stone[200],
        "popover-foreground": colors.stone[900],
        primary: colors.emerald[600],
        "primary-foreground": colors.stone[50],
        secondary: colors.stone[600],
        "secondary-foreground": colors.stone[50],
        muted: colors.stone[400],
        "muted-foreground": colors.stone[600],
        accent: colors.emerald[100],
        "accent-foreground": colors.emerald[900],
        destructive: colors.red[600],
        "destructive-foreground": colors.stone[50],
        border: colors.stone[200],
        input: colors.stone[200],
        ring: colors.emerald[600],
        radius: "0.5rem",
        "chart-1": colors.emerald[500],
        "chart-2": colors.amber[500],
        "chart-3": colors.green[600],
        "chart-4": colors.lime[500],
        "chart-5": colors.orange[400],
        chat: {
          pattern: {
            "color-1": colors.emerald[700],
            "color-2": colors.emerald[700],
            "color-3": colors.lime[500],
          },
          background: {
            "color-1": colors.emerald[100],
            "color-2": colors.emerald[100],
            "color-3": colors.lime[100],
          },
          bubble: {
            assistant: colors.stone[50],
            user: colors.teal[200],
          },
          text: colors.stone[200],
          "action-button": {
            text: colors.emerald[600],
            background: colors.emerald[50],
          },
        },
        settings: {
          background: colors.stone[200],
          foreground: colors.stone[900],
          border: colors.stone[300],
          divider: colors.stone[200],
          card: colors.stone[50],
          "card-foreground": colors.stone[950],
          muted: colors.stone[500],
          icon: colors.stone[50],
        },
        journal: {
          background: colors.stone[200],
          foreground: colors.stone[900],
          card: colors.stone[50],
          "card-foreground": colors.stone[900],
          border: colors.stone[200],
          muted: colors.stone[600],
          "muted-foreground": colors.stone[500],
        },
      }),
      "forest-dark": dark({
        background: colors.black,
        foreground: colors.stone[100],
        "nav-top": colors.stone[950],
        "nav-bottom": colors.stone[950],
        card: colors.black,
        "card-foreground": colors.stone[100],
        popover: colors.black,
        "popover-foreground": colors.stone[100],
        primary: colors.emerald[500],
        "primary-foreground": colors.stone[950],
        secondary: colors.stone[500],
        "secondary-foreground": colors.stone[100],
        muted: colors.stone[800],
        "muted-foreground": colors.stone[400],
        accent: colors.emerald[900],
        "accent-foreground": colors.emerald[100],
        destructive: colors.red[800],
        "destructive-foreground": colors.stone[100],
        border: colors.stone[900],
        input: colors.black,
        ring: colors.emerald[700],
        "chart-1": colors.emerald[400],
        "chart-2": colors.amber[400],
        "chart-3": colors.green[500],
        "chart-4": colors.lime[400],
        "chart-5": colors.orange[400],
        chat: {
          pattern: {
            "color-1": colors.green[200],
            "color-2": colors.emerald[400],
            "color-3": colors.green[200],
          },
          background: {
            "color-1": colors.black,
            "color-2": colors.black,
            "color-3": colors.black,
          },
          bubble: {
            assistant: colors.neutral[700],
            user: colors.emerald[700],
          },
          text: colors.stone[200],
          "action-button": {
            text: colors.emerald[500],
            background: colors.stone[950],
          },
        },
        settings: {
          background: colors.black,
          foreground: colors.stone[200],
          border: colors.stone[950],
          divider: colors.stone[800],
          card: colors.stone[900],
          "card-foreground": colors.stone[100],
          muted: colors.stone[500],
        },
        journal: {
          background: colors.black,
          foreground: colors.stone[200],
          card: colors.black,
          "card-foreground": colors.stone[200],
          border: colors.stone[900],
          muted: colors.stone[600],
          "muted-foreground": colors.stone[500],
        },
      }),
      "twilight-light": light({
        background: colors.indigo[50],
        foreground: colors.slate[900],
        "nav-top": colors.indigo[50],
        "nav-bottom": colors.indigo[50],
        card: colors.slate[50],
        "card-foreground": colors.slate[800],
        popover: colors.slate[200],
        "popover-foreground": colors.slate[900],
        primary: colors.indigo[500],
        "primary-foreground": colors.slate[50],
        secondary: colors.purple[600],
        "secondary-foreground": colors.slate[50],
        muted: colors.slate[400],
        "muted-foreground": colors.slate[600],
        accent: colors.violet[100],
        "accent-foreground": colors.violet[900],
        destructive: colors.red[600],
        "destructive-foreground": colors.slate[50],
        border: colors.slate[200],
        input: colors.indigo[100],
        ring: colors.indigo[600],
        radius: "0.5rem",
        "chart-1": colors.indigo[500],
        "chart-2": colors.purple[500],
        "chart-3": colors.pink[500],
        "chart-4": colors.red[500],
        "chart-5": colors.orange[500],
        chat: {
          pattern: {
            "color-1": colors.indigo[600],
            "color-2": colors.purple[600],
            "color-3": colors.pink[600],
          },
          background: {
            "color-1": colors.indigo[100],
            "color-2": colors.purple[100],
            "color-3": colors.pink[100],
          },
          bubble: {
            assistant: colors.slate[50],
            user: colors.indigo[200],
          },
          text: colors.slate[200],
          "action-button": {
            text: colors.indigo[600],
            background: colors.indigo[50],
          },
        },
        settings: {
          background: colors.indigo[100],
          foreground: colors.slate[900],
          border: colors.indigo[200],
          divider: colors.indigo[100],
          card: colors.indigo[50],
          "card-foreground": colors.slate[950],
          muted: colors.slate[500],
          icon: colors.slate[50],
        },
        journal: {
          background: colors.indigo[100],
          foreground: colors.slate[900],
          card: colors.indigo[50],
          "card-foreground": colors.slate[900],
          border: colors.indigo[200],
          muted: colors.indigo[600],
          "muted-foreground": colors.indigo[500],
        },
      }),
      "twilight-dark": dark({
        background: colors.black,
        foreground: colors.zinc[100],
        "nav-top": colors.zinc[900],
        "nav-bottom": colors.zinc[900],
        card: colors.black,
        "card-foreground": colors.zinc[100],
        popover: colors.black,
        "popover-foreground": colors.zinc[100],
        primary: colors.indigo[500],
        "primary-foreground": colors.zinc[950],
        secondary: colors.purple[500],
        "secondary-foreground": colors.zinc[950],
        muted: colors.zinc[800],
        "muted-foreground": colors.zinc[400],
        accent: colors.violet[900],
        "accent-foreground": colors.violet[100],
        destructive: colors.red[800],
        "destructive-foreground": colors.zinc[100],
        border: colors.black,
        input: colors.zinc[950],
        ring: colors.indigo[700],
        "chart-1": colors.indigo[400],
        "chart-2": colors.purple[400],
        "chart-3": colors.pink[400],
        "chart-4": colors.red[400],
        "chart-5": colors.orange[400],
        chat: {
          pattern: {
            "color-1": colors.indigo[500],
            "color-2": colors.purple[500],
            "color-3": colors.violet[500],
          },
          background: {
            "color-1": colors.black,
            "color-2": colors.black,
            "color-3": colors.black,
          },
          bubble: {
            assistant: colors.zinc[700],
            user: colors.indigo[600],
          },
          text: colors.zinc[200],
          "action-button": {
            text: colors.indigo[400],
            background: colors.zinc[950],
          },
        },
        settings: {
          background: colors.black,
          foreground: colors.zinc[200],
          border: colors.zinc[950],
          divider: colors.zinc[800],
          card: colors.zinc[900],
          "card-foreground": colors.zinc[100],
          muted: colors.zinc[500],
        },
        journal: {
          background: colors.black,
          foreground: colors.zinc[200],
          card: colors.zinc[950],
          header: colors.zinc[900],
          border: colors.black,
          muted: colors.zinc[600],
          "muted-foreground": colors.zinc[500],
        },
      }),
    })),
  ],
};
export default config;
