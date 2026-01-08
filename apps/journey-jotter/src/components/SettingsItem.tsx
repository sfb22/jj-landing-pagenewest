"use client";

import React, { useEffect } from "react";
import { ChevronRight } from "lucide-react";

interface SettingsItemProps {
  icon?: React.ReactNode;
  title: string;
  onClick: () => void;
  rightElement?: React.ReactNode;
  isThemeToggle?: boolean;
  centered?: boolean;
  destructive?: boolean;
  variant?: "primary" | "secondary" | "destructive";
}

export function SettingsItem({
  icon,
  title,
  onClick,
  rightElement,
  isThemeToggle = false,
  centered = false,
  destructive = false,
  variant = "secondary",
}: SettingsItemProps) {
  // Use variant prop over destructive prop if variant is explicitly set
  const effectiveVariant =
    destructive && variant === "secondary" ? "destructive" : variant;

  const getVariantStyles = () => {
    switch (effectiveVariant) {
      case "primary":
        return "bg-blue-600 text-white hover:bg-blue-700";
      case "destructive":
        return "text-red-600 hover:bg-red-50";
      case "secondary":
      default:
        return "text-settings-foreground hover:bg-settings-hover";
    }
  };

  if (centered) {
    return (
      <div
        className={`flex items-center justify-center px-4 py-3 cursor-pointer rounded-lg transition-colors ${getVariantStyles()}`}
        onClick={onClick}
      >
        <span className="text-base font-medium">{title}</span>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-colors ${getVariantStyles()}`}
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        {icon && icon}
        <span className="text-base font-medium">{title}</span>
      </div>
      {rightElement || <ChevronRight className="h-4 w-4 text-settings-muted" />}
    </div>
  );
}
