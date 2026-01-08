"use client";

import React from "react";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";

interface SettingsButtonProps {
  icon?: React.ReactNode;
  title: string;
  onClick: () => void;
  variant?: "default" | "destructive" | "outline";
}

export function SettingsButton({
  icon,
  title,
  onClick,
  variant = "default",
}: SettingsButtonProps) {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      className={cn(
        "w-full px-4 py-3 h-auto flex items-center justify-center space-x-3",
        "text-base font-medium text-settings-card-foreground",
        "bg-gray-100 hover:bg-gray-200",
        "rounded-xl border border-settings-border shadow-sm"
      )}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{title}</span>
    </Button>
  );
}
