"use client";

import React from "react";
import { memo } from "react";
import { Button } from "@/src/components/ui/button";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export const HeroSection = memo(function HeroSection({
  handleInstallClick,
}: {
  handleInstallClick: () => void;
}) {
  const textContentSection = (
    <div className="text-center md:text-left z-20 ">
      <h1 className="text-4xl  font-bold tracking-tight  md:text-5xl lg:text-5xl xl:text-6xl ">
        <span className="bg-gradient-to-b from-stone-800 to-stone-800 inline-block text-transparent bg-clip-text leading-tight">
          Travel journaling
        </span>
        <br />
        <span className="bg-gradient-to-b from-stone-800 to-stone-800 inline-block text-transparent bg-clip-text leading-tight">
          has never been
        </span>
        <br />
        <span className=" bg-gradient-to-r leading-tight from-mint-green-500  to-mint-green-500 inline-block text-transparent bg-clip-text">
          this easy.
        </span>
      </h1>
      <p className="mt-4 px-4 md:px-0 text-xl md:text-xl max-w-lg leading-8 text-stone-500 mx-auto">
        Too busy to journal while traveling? Journey Jotter helps you capture
        every detail in just a few minutes a day, so you can relive every moment
        whenever you want.
      </p>
      <Button
        onClick={handleInstallClick}
        className="mt-8 bg-mint-green-500 hover:bg-mint-green-600 text-white rounded-full font-bold leading-loose px-12 py-6 text-xl"
      >
        Sign up for free today!
      </Button>
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
      {/* <image href={imageSrc} x="10" y="10" width="180" height="380" alt={alt} /> */}
    </svg>
  );

  return (
    <div className="container max-w-7xl  mx-auto relative h-full z-20">
      {/* Content Layer */}
      {/* Large devices */}
      <div className="hidden md:flex items-center justify-center h-full gap-12 ">
        {textContentSection}

        {/* iPhones Section */}
        <div className="flex items-center justify-center relative h-full">
          {/* circle background */}
          {/* <div className="absolute w-full aspect-square bg-stone-100 rounded-full z-0" /> */}

          <div className="relative h-fit w-full flex items-end justify-center ">
            <div className="flex items-end">
              <div className="z-10 w-full flex justify-center md:h-[420px] lg:h-[480px] translate-x-8">
                <IPhoneSVG backgroundColor="#d6d3d1" borderColor="#292524" />
              </div>
              <div className="z-10 w-full flex justify-center md:h-[320px] lg:h-[420px] -translate-x-8">
                <IPhoneSVG backgroundColor="#d6d3d1" borderColor="#292524" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small devices */}
      <div className="md:hidden flex flex-col items-center justify-start h-full gap-4  ">
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
  );
});
