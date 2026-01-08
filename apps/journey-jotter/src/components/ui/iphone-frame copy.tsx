"use client";

import Image from "next/image";
import { cn } from "@/src/lib/utils";

interface IPhoneFrameProps {
  image: string;
  alt: string;
  className?: string;
  rotated?: boolean;
}

export function IPhoneFrame({
  image,
  alt,
  className,
  rotated = false,
}: IPhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative h-[min(95vh,780px)] aspect-[9/19.5] bg-gray-500 rounded-[40px] border-[8px] border-stone-800 shadow-md overflow-hidden transition-transform duration-700",
        // "relative h-[min(95vh,780px)] aspect-[9/19.5] bg-gray-500 rounded-[35px] border-[4px] border-gray-800 shadow-[24px_24px_48px_-12px_rgba(0,0,0,0.4),-8px_-8px_16px_-6px_rgba(255,255,255,0.3)] overflow-hidden transition-transform duration-700",
        className
      )}
    >
      <div className="h-full p-8 overflow-y-auto">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-opacity duration-300"
        />
      </div>
    </div>
  );
}
