"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/src/lib/utils";

interface PolaroidProps {
  images: string[];
  totalImages?: number; // Number of images to show in the fan
  fanAngle?: number; // Total angle of the fan spread
  centerX?: number; // X position of the fan center
  messiness?: number;
  imageSize?: { width: number; height: number };
}

const PolaroidStack: React.FC<PolaroidProps> = ({
  images,
  totalImages = 40,
  fanAngle = 180, // 120 degrees total spread
  centerX = 500, // Center point X position
  messiness = 0,
  imageSize = { width: 240, height: 320 },
}) => {
  const generateImageInstances = () => {
    return images.slice(0, totalImages).map((image, idx) => ({
      src: image,
      id: `${idx}`,
    }));
  };

  const imageInstances = generateImageInstances();

  const getPosition = (index: number, total: number) => {
    // Calculate how many images we want per arc (row)
    const imagesPerArc = Math.ceil(Math.sqrt(total) * 1.5);

    // Determine which arc (row) this image belongs to
    const arcIndex = Math.floor(index / imagesPerArc);
    const positionInArc = index % imagesPerArc;

    // Adjust fan angle based on which arc we're in
    const currentFanAngle = fanAngle - arcIndex * 15; // Reduce angle for outer arcs
    const angleStep = currentFanAngle / (imagesPerArc - 1);
    const currentAngle = -currentFanAngle / 2 + positionInArc * angleStep;

    // Convert angle to radians
    const angleRad = (currentAngle * Math.PI) / 180;

    // Calculate radius based on which arc we're in
    const baseRadius = 200;
    const radiusStep = 150; // Distance between arcs
    const radius = baseRadius + arcIndex * radiusStep;

    // Calculate position using polar coordinates
    const x =
      centerX + radius * Math.cos(angleRad) + getRandomOffset(messiness * 10);
    const y =
      450 + radius * Math.sin(angleRad) + getRandomOffset(messiness * 10);

    // Rotation follows the fan angle plus some randomness
    const rotation = currentAngle + getRandomOffset(messiness * 2);

    return {
      x,
      y,
      rotation,
      zIndex: total - index + arcIndex * 1000, // Ensure outer arcs appear behind inner ones
    };
  };

  const getRandomOffset = (max: number) => {
    return (Math.random() - 0.5) * max;
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden brightness-[90%]">
      <div className="relative w-full h-full">
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
              <div className="w-full h-full bg-white shadow-lg p-1 transition-shadow duration-200 hover:shadow-xl">
                <div className="relative aspect-[4/5]">
                  <img
                    src={image.src}
                    alt={`Polaroid ${parseInt(image.id) + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 mb-2 flex justify-center">
                  <div className="h-1 w-16 bg-gray-200 rounded-full" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PolaroidStack;
