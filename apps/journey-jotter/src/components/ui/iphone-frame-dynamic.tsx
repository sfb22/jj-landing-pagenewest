"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/src/lib/utils";

interface IPhoneFrameDynamicProps {
  image?: string;
  alt?: string;
  className?: string;
  rotated?: boolean;
}

export function IPhoneFrameDynamic({
  image,
  alt,
  className,
  rotated = false,
}: IPhoneFrameDynamicProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [borderRadius, setBorderRadius] = useState<number | null>(null);
  const [borderWidth, setBorderWidth] = useState<number | null>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (frameRef.current) {
        const height = frameRef.current.clientHeight;
        // Example scaling: 1.3% of height for border radius, 0.3% for border width
        setBorderRadius(height * 0.06);
        setBorderWidth(height * 0.018);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div
      ref={frameRef}
      className={cn(
        "relative h-full aspect-[9/19.5] bg-stone-300 border-stone-800 shadow-md overflow-hidden transition-transform duration-700",
        rotated && "transform rotate-6", // Example rotation
        className
      )}
      style={{
        borderRadius: borderRadius !== null ? `${borderRadius}px` : undefined,
        borderWidth: borderWidth !== null ? `${borderWidth}px` : undefined,
        borderStyle: borderWidth !== null ? "solid" : undefined,
      }}
    >
      <div className="h-full p-4 overflow-y-auto">
        {image && (
          <Image
            src={image}
            alt={alt || ""}
            fill
            className="object-cover transition-opacity duration-300"
          />
        )}
      </div>
    </div>
  );
}
