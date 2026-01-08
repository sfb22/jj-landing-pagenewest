"use client";

import React from "react";
import { cn } from "@/src/lib/utils";

interface PolaroidProps {
  images: string[];
  totalImages?: number;
  fanAngle?: number;
  centerPosition?: { x: number; y: number };
  messiness?: number;
  imageSize?: { width: number; height: number };
  baseRadius?: number;
  centerComponent?: React.ReactNode;
  centerComponentSize?: { width: number; height: number };
}

const PolaroidStack: React.FC<PolaroidProps> = ({
  images,
  totalImages = 390,
  fanAngle = 360,
  centerPosition = { x: 500, y: 450 },
  messiness = 0,
  imageSize = { width: 800, height: 1620 },
  baseRadius = 600,
  centerComponent,
  centerComponentSize = { width: 400, height: 400 },
}) => {
  const generateImageInstances = () => {
    return images.slice(0, totalImages).map((image, idx) => ({
      src: image,
      id: `${idx}`,
    }));
  };

  const imageInstances = generateImageInstances();

  const getPosition = (index: number, total: number) => {
    const imagesPerArc = Math.ceil(Math.sqrt(total) * 1.5);
    const arcIndex = Math.floor(index / imagesPerArc);
    const positionInArc = index % imagesPerArc;

    const currentFanAngle = fanAngle - arcIndex * 15;
    const angleStep = currentFanAngle / (imagesPerArc - 1);
    const currentAngle = -currentFanAngle / 2 + positionInArc * angleStep;

    const angleRad = (currentAngle * Math.PI) / 180;

    const radiusStep = 150;
    // Increase base radius if center component is present
    const adjustedBaseRadius = centerComponent
      ? baseRadius +
        Math.max(centerComponentSize.width, centerComponentSize.height) / 2
      : baseRadius;
    const radius = adjustedBaseRadius + arcIndex * radiusStep;

    const x =
      centerPosition.x +
      radius * Math.cos(angleRad) +
      getRandomOffset(messiness * 10);
    const y =
      centerPosition.y +
      radius * Math.sin(angleRad) +
      getRandomOffset(messiness * 10);

    const rotation = currentAngle + getRandomOffset(messiness * 2);

    return {
      x,
      y,
      rotation,
      zIndex: total - index + arcIndex * 1000,
    };
  };

  const getRandomOffset = (max: number) => {
    return (Math.random() - 0.5) * max;
  };

  console.log(centerPosition);
  console.log(centerComponentSize);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden brightness-[80%]">
      <div className="relative w-full h-full">
        {/* Center Component */}
        {centerComponent && (
          <div
            className="absolute  z-[9999]"
            style={{
              left: centerPosition.x,
              top: centerPosition.y,
              width: centerComponentSize.width,
              height: centerComponentSize.height,
            }}
          >
            {centerComponent}
          </div>
        )}

        {/* Polaroid Images */}
        {imageInstances.map((image, index) => {
          const pos = getPosition(index, imageInstances.length);
          return (
            <div
              key={image.id}
              className="absolute transition-transform duration-300 ease-out hover:scale-105"
              style={{
                transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotation}deg)`,
                zIndex: pos.zIndex,
                width: `${imageSize.width}px`,
                height: `${imageSize.height}px`,
              }}
            >
              <div className="w-full h-full bg-white shadow-lg p-2 transition-shadow duration-200 hover:shadow-xl">
                <div className="relative h-full w-full">
                  <img
                    src={image.src}
                    alt={`Polaroid ${parseInt(image.id) + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* <div className="mt-4 mb-2 flex justify-center">
                  <div className="h-1 w-16 bg-gray-200 rounded-full" />
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PolaroidStack;
