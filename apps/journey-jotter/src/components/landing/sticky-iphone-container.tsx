"use client";
import { IPhoneFrame } from "@/src/components/ui/iphone-frame";

interface StickyIPhoneContainerProps {
  currentImage: string;
  currentTitle: string;
  stickyContainerRef: React.RefObject<HTMLDivElement>;
  isSticky: boolean;
  scrollY: number;
  maxScroll: number;
}

export function StickyIPhoneContainer({
  currentImage,
  currentTitle,
  stickyContainerRef,
  isSticky,
  scrollY,
  maxScroll,
}: StickyIPhoneContainerProps) {
  const container = stickyContainerRef.current?.parentElement;
  const containerHeight = container ? container.offsetHeight : maxScroll;
  const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
  const containerMaxScroll = containerHeight - windowHeight;

  const progress = Math.min(
    scrollY / Math.min(maxScroll, containerMaxScroll),
    1
  );

  const scale = 1 - 0.33 * (1 - progress);
  const rotation = 2 * (1 - progress);

  return (
    <div
      ref={stickyContainerRef}
      className={`${
        isSticky ? "fixed" : "absolute"
      } right-0 flex items-center justify-center w-full md:w-1/2 pointer-events-none z-40`}
      style={{
        top: isSticky ? 0 : `${Math.min(maxScroll, containerMaxScroll)}px`,
        bottom: isSticky ? 0 : "auto",
        transition: "top 0.3s ease-in-out",
      }}
    >
      <div className="relative h-full flex items-center justify-center">
        <div
          style={{
            transform: `scale(${scale}) rotate(${rotation}deg)`,
          }}
        >
          <div className="relative">
            <div
              className="absolute inset-0 z-10 pointer-events-none rounded-[45px]"
              style={{
                transition: "background-color 0.1s linear",
              }}
            />
            <IPhoneFrame image={currentImage} alt={currentTitle} />
          </div>
        </div>
      </div>
    </div>
  );
}
