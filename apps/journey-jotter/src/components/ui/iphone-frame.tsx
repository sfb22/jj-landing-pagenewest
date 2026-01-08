"use client";

import Image from "next/image";
import { cn } from "@/src/lib/utils";

interface IPhoneFrameProps {
  image?: string;
  alt?: string;
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
        "relative h-full aspect-[9/19.5] bg-stone-300 rounded-[25px] border-[6px] border-stone-800 shadow-md overflow-hidden transition-transform duration-700",
        className
      )}
    >
      <div className="h-full p-4 overflow-y-auto">
        {image && (
          <Image
            quality={100}
            src={image}
            alt={alt || "iPhone"}
            fill
            className="object-cover transition-opacity duration-300"
          />
        )}
      </div>
    </div>
  );
}
