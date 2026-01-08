export const jjColors = {
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
} as const;

export default jjColors;

// Type for accessing the colors
export type JJColors = typeof jjColors;
export type JJColorScheme = keyof JJColors;
export type JJColorShade = keyof JJColors[JJColorScheme];
