"use client";

import { Button } from "@/src/components/ui/button";
import { Download, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/src/lib/utils";

interface DownloadButtonProps {
  className?: string;
  onClick?: () => void;
  showIcon?: boolean;
  size?: "xl" | "default" | "md" | "sm";
}

const sizeStyles = {
  xl: "px-16 py-8 text-2xl",
  default: "px-12 py-6 text-xl",
  md: "px-6 py-3 text-lg",
  sm: "text-sm px-2 py-1 h-[30px]",
} as const;

export function DownloadButton({
  className,
  onClick,
  showIcon = true,
  size = "default",
}: DownloadButtonProps) {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleInstallClick = () => {
    setShowOverlay(true);
    document.body.style.overflow = "hidden";
    onClick?.();
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <Button
        onClick={handleInstallClick}
        className={cn(
          "bg-white hover:bg-white/70 text-big-stone-900 rounded-full font-bold leading-none",
          sizeStyles[size],
          className
        )}
      >
        {showIcon && (
          <Download
            className={cn(
              "mr-2",
              size === "sm"
                ? "h-4 w-4"
                : size === "md"
                  ? "h-5 w-5"
                  : size === "xl"
                    ? "h-8 w-8"
                    : "h-6 w-6"
            )}
          />
        )}
        Join the waitlist today
      </Button>

      {showOverlay && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Download Journey Jotter</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCloseOverlay}
                className="hover:bg-stone-100"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <p className="text-stone-600 mb-6">
              Journey Jotter is coming soon to the App Store and Google Play
              Store. Sign up to be notified when it launches!
            </p>
            {/* Add email signup form or other content here */}
          </div>
        </div>
      )}
    </>
  );
}
