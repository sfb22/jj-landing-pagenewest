import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility function to convert dollar values to credits (multiply by 100 and round)
export const convertToCredits = (dollarValue: number): number => {
  return Math.round(dollarValue * 100);
};
