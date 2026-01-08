"use client";

import React from "react";
import { memo } from "react";
import { Button } from "@/src/components/ui/button";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export const HeroSection = memo(function HeroSection({
  handleInstallClick,
}: {
  handleInstallClick: () => void;
}) {
  const textContentSection = (
    <div className="text-center md:text-left z-20 w-full ">
      <h1 className="text-4xl  font-extrabold md:text-5xl lg:text-5xl xl:text-6xl ">
        <span className="bg-gradient-to-b from-white to-white inline-block text-transparent bg-clip-text leading-tight">
          Travel journaling has
        </span>
        <br />
        <span className="bg-gradient-to-b from-white to-white inline-block text-transparent bg-clip-text leading-tight">
          never been
        </span>
        <span className="bg-gradient-to-r ml-1.5 leading-tight from-mint-green-400  to-mint-green-400 inline-block italic text-transparent bg-clip-text">
          this easy.
        </span>
      </h1>
      <p className="mt-4  md:px-0 text-xl md:text-xl max-w-lg leading-8 text-white/90 font-medium ">
        The journalling assistant that helps you capture every detail in just a
        few minutes a day.
      </p>
      <div className="flex items-start gap-4 justify-center md:justify-start">
        <Button
          onClick={handleInstallClick}
          className="mt-8 bg-white hover:bg-white/70 text-big-stone-900 rounded-2xl font-bold leading-loose px-12 py-6 text-xl"
        >
          Get the app
        </Button>

        <div className="mt-8 flex flex-col items-center gap-1">
          <div className="flex">
            {[1, 2, 3, 4].map((_, i) => (
              <svg
                key={i}
                className="w-6 h-6 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <svg
              className="w-6 h-6 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <defs>
                <linearGradient
                  id="half-star"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="50%" stopColor="currentColor" />
                  <stop offset="50%" stopColor="rgb(229 231 235)" />
                </linearGradient>
              </defs>
              <path
                fill="url(#half-star)"
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>
          <span className="text-white/90 text-sm font-medium">
            4.8 (140K RATINGS)
          </span>
        </div>
      </div>
    </div>
  );

  // SVG iPhone component
  const IPhoneSVG = ({
    backgroundColor = "#E0E0E0",
    borderColor = "#B0B0B0",
    imageSrc = "/landing/phone2.png",
    alt = "iPhone",
  }: {
    backgroundColor?: string;
    borderColor?: string;
    imageSrc?: string;
    alt?: string;
  }) => (
    <svg
      className="h-full w-auto "
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 200 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="rounded-corners">
          <rect x="4" y="4" width="192" height="392" rx="38" ry="38" />
        </clipPath>
      </defs>
      <rect
        x="4"
        y="4"
        width="192"
        height="392"
        rx="38"
        ry="38"
        fill={backgroundColor}
        stroke={borderColor}
        strokeWidth="8"
        strokeLinejoin="round"
      />
      <image
        href={imageSrc}
        x="4"
        y="4"
        width="192"
        height="392"
        clipPath="url(#rounded-corners)"
        preserveAspectRatio="xMidYMid slice"
      />
    </svg>
  );

  return (
    <div className="container ">
      {/* Background Image and Gradient - moved outside container */}
      <div
        className="absolute inset-0 w-full h-full z-10 max-h-full overflow-hidden"
        style={{
          backgroundImage: 'url("/stock/mj11.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/95 via-sky-950/50 to-sky-950/40" />
      </div>

      <div className=" mx-auto relative h-full z-20">
        {/* Large devices */}
        <div className="hidden md:flex items-center px-8 justify-center h-full gap-0 max-h-[500px]">
          {textContentSection}

          {/* iPhones Section */}
          <div className="flex items-center justify-center relative w-2/4 h-full">
            <div className="relative flex items-end justify-center h-full">
              <div className="flex items-end  h-full w-full max-h-full">
                <div className="relative h-full aspect-[9/19.5]   rounded-3xl shadow-2xl">
                  <Image
                    src="/landing/phone2.png"
                    alt="Journey Jotter App"
                    fill
                    className="object-fill rounded-3xl border-[6px] border-black/80 brightness-90"
                    priority
                    onError={(e) => {
                      console.error("Image failed to load:", e);
                    }}
                  />
                </div>
                <div className="relative h-[90%] aspect-[9/19.5] -translate-x-20 shadow-2xl rounded-3xl">
                  <Image
                    src="/landing/phone1.png"
                    alt="Journey Jotter App"
                    fill
                    className="object-fill rounded-3xl border-4 border-black brightness-90"
                    priority
                    onError={(e) => {
                      console.error("Image failed to load:", e);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small devices */}
        <div className="md:hidden flex flex-col items-center justify-start h-full gap-4">
          {/* Center iPhone */}

          <div className="relative h-fit w-full flex items-end justify-center ">
            <div className="flex items-end">
              <div className="z-10 w-full flex justify-center h-[260px] translate-x-4">
                <IPhoneSVG backgroundColor="#d6d3d1" borderColor="#292524" />
              </div>
              <div className="z-10 w-full flex justify-center h-[230px] -translate-x-4">
                <IPhoneSVG backgroundColor="#d6d3d1" borderColor="#292524" />
              </div>
            </div>
          </div>
          {textContentSection}
          <div className="h-full items-center justify-center flex  gap-4 ">
            <ChevronDownIcon className="w-14 h-14 text-mint-green-400/40 animate-pulse delay-0" />
            <ChevronDownIcon className="w-14 h-14 text-mint-green-400/40 animate-pulse delay-500" />
            <ChevronDownIcon className="w-14 h-14 text-mint-green-400/40 animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </div>
  );
});
