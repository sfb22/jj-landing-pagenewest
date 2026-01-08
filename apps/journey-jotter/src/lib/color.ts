// utils/color.ts
interface HSLColor {
  h: number;
  s: number;
  l: number;
}

export function parseHSL(hslString: string): HSLColor {
  const matches = hslString.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
  if (!matches) {
    return { h: 216, s: 80, l: 80 }; // Default values
  }
  return {
    h: parseInt(matches[1], 10),
    s: parseInt(matches[2], 10),
    l: parseInt(matches[3], 10),
  };
}

export function generateGradientColors(
  baseHSL: HSLColor,
  isDarker = false
): {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col3Transparent: string;
} {
  const lightness = isDarker ? baseHSL.l / 2 : baseHSL.l;

  return {
    col1: `hsl(${baseHSL.h - 16}, ${baseHSL.s}%, ${lightness}%)`,
    col2: `hsl(${baseHSL.h - 26}, ${baseHSL.s}%, ${lightness}%)`,
    col3: `hsl(${baseHSL.h}, ${baseHSL.s}%, ${lightness}%)`,
    col4: `hsl(${baseHSL.h}, ${baseHSL.s}%, ${lightness}%)`,
    col3Transparent: `hsl(${baseHSL.h}, ${baseHSL.s}%, ${lightness}%, 0)`,
  };
}
