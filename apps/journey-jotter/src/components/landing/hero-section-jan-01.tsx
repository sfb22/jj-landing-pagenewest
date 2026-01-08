"use client";

import React from "react";
import { memo } from "react";
import { Button } from "@/src/components/ui/button";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import PolaroidStack from "@/src/components/landing/polaroid-rows";

export const HeroSection = memo(function HeroSection({
  handleInstallClick,
}: {
  handleInstallClick: () => void;
}) {
  const textContentSection = (
    <div className="text-center md:text-left z-20 ">
      <h1 className="text-4xl  font-bold tracking-tight  md:text-5xl lg:text-5xl xl:text-6xl ">
        <span className="bg-gradient-to-b from-white to-white inline-block text-transparent bg-clip-text leading-tight">
          Travel journaling
        </span>
        <br />
        <span className="bg-gradient-to-b from-white to-white inline-block text-transparent bg-clip-text leading-tight">
          has never been
        </span>
        <br />
        <span className=" bg-gradient-to-r leading-tight from-mint-green-400  to-mint-green-400 inline-block text-transparent bg-clip-text">
          this easy.
        </span>
      </h1>
      <p className="mt-4 px-4 md:px-0 text-xl md:text-xl max-w-lg leading-8 text-gray-400 mx-auto font-medium">
        Too busy to journal while traveling? Journey Jotter helps you capture
        every detail in just a few minutes a day, so you can relive every moment
        whenever you want.
      </p>
      <Button
        onClick={handleInstallClick}
        className="mt-8 bg-mint-green-400 hover:bg-mint-green-400 text-white rounded-full font-bold leading-loose px-12 py-6 text-xl"
      >
        Sign up for free today!
      </Button>
    </div>
  );

  const images = [
    "/testimonial/sam1.jpg",
    "/testimonial/sam2.jpg",
    "/testimonial/sam3.jpg",
    "/testimonial/sam4.jpg",
    "/testimonial/f3.png",
    "/testimonial/sam6.jpg",
    "/testimonial/sam7.jpg",
    "/testimonial/f1.png",
    "/testimonial/f4.png",
  ];

  const centerComponent = (
    <div className="bg-blue-300 rounded-full w-60 h-60 p-8 shadow-lg">
      <h1 className="text-3xl font-bold">Your Content Here</h1>
    </div>
  );

  const centerRef = React.useRef<HTMLDivElement>(null);
  const [centerComponentSize, setCenterComponentSize] = React.useState({
    width: 0,
    height: 0,
  });

  React.useEffect(() => {
    if (centerRef.current) {
      const { offsetWidth, offsetHeight } = centerRef.current;
      setCenterComponentSize({
        width: offsetWidth,
        height: offsetHeight,
      });
    }
  }, []);

  const imageArray = [];

  // randomise the images array 5 times and add to imageArray 5 times
  for (let i = 0; i < 5; i++) {
    imageArray.push(...images.sort(() => Math.random() - 0.5));
  }

  // SVG iPhone component
  const IPhoneSVG = ({
    backgroundColor = "#000000",
    borderColor = "#000000",
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
    <div className="w-full h-full ">
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
        <PolaroidStack
          images={imageArray}
          rows={5}
          removePerRow={0}
          messiness={10}
          baseSpacing={{ x: 200, y: 300 }}
          imageSize={{ width: 360, height: 480 }}
        />
        {/* <PolaroidStack
          images={imageArray}
          rows={5}
          removePerRow={0}
          messiness={0}
          imageSize={{ width: 540, height: 720 }}
          baseSpacing={{ x: 500, y: 720 }}
        /> */}
      </div>
      <div className="container max-w-7xl  mx-auto relative h-full z-20">
        {/* Content Layer */}
        {/* Large devices */}
        <div className="hidden md:flex items-center justify-center h-full gap-12 ">
          {textContentSection}

          {/* iPhones Section */}
          <div className="flex items-center justify-center relative h-full">
            {/* circle background */}
            {/* <div className="absolute w-full aspect-square bg-white rounded-full z-0" /> */}

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
                <IPhoneSVG backgroundColor="#000000" borderColor="#000000" />
              </div>
              <div className="z-10 w-full flex justify-center h-[230px] -translate-x-4">
                <IPhoneSVG backgroundColor="#FFFFFF" borderColor="#FFFFFF" />
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
