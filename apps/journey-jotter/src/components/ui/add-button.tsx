"use client";

import { Plus } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";

interface AddButtonProps {
  onClick: () => void;
  size?: "small" | "large";
}

export function AddButton({ onClick, size = "large" }: AddButtonProps) {
  return (
    <Button
      className={cn(
        "rounded-full text-white shadow-lg",
        size === "large"
          ? "w-20 h-20 bg-blue-500 hover:bg-blue-600"
          : "w-12 h-12 bg-blue-500/40 backdrop-blur-sm hover:bg-blue-500"
      )}
      size="icon"
      onClick={onClick}
    >
      <Plus className={size === "large" ? "h-11 w-11" : "h-6 w-6"} />
    </Button>
  );
}
