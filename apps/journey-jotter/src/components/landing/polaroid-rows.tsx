"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/src/lib/utils";

interface PolaroidProps {
  images: string[];
  imagesPerRow?: number; // Initial number of images per row
  rows?: number; // Number of rows
  removePerRow?: number; // Number of images to remove from the left each row
  messiness?: number; // Degree of randomness in rotation and position
  imageSize?: { width: number; height: number }; // Size of each image
  baseSpacing?: { x: number; y: number }; // Base spacing between photos
  spacingRandomness?: { x: number; y: number }; // Variability in spacing
}

const PolaroidStack: React.FC<PolaroidProps> = ({
  images,
  imagesPerRow = 10,
  rows = 10,
  removePerRow = 1,
  messiness = 5, // Default messiness degree
  imageSize = { width: 240, height: 320 }, // Default image size
  baseSpacing = { x: 200, y: 280 }, // Default base spacing between images
  spacingRandomness = { x: 50, y: 50 }, // Default spacing randomness
}) => {
  const generateImageInstances = () => {
    const totalImages =
      imagesPerRow * rows + ((rows * (rows - 1)) / 2) * removePerRow;
    return images.slice(0, totalImages).map((image, idx) => ({
      src: image,
      id: `${idx}`,
    }));
  };

  const imageInstances = generateImageInstances();

  // Calculate the container dimensions (assuming fixed for simplicity)
  const containerWidth = 1600; // Adjust as needed
  const containerHeight = 900; // Adjust as needed

  const getRandomOffset = (max: number) => {
    return (Math.random() - 0.5) * max;
  };

  const getPosition = (row: number, col: number, imagesInRow: number) => {
    // Calculate the total width of the row
    const totalWidth = imagesInRow * baseSpacing.x;

    // Center horizontally by starting from the middle and moving left by half the row width
    const startX = containerWidth / 2 - totalWidth / 2 + col * baseSpacing.x;

    const x =
      startX +
      getRandomOffset(spacingRandomness.x) +
      getRandomOffset(messiness);

    // Center vertically by calculating total height and starting from the middle
    const totalHeight = rows * baseSpacing.y;
    const startY = containerHeight / 2 - totalHeight / 2 + row * baseSpacing.y;

    const y =
      startY +
      getRandomOffset(spacingRandomness.y) +
      getRandomOffset(messiness);

    const rotation =
      Math.sin((row + col) * 0.3) * messiness + getRandomOffset(messiness);
    const zIndex = rows - row;

    return { x, y, rotation, zIndex };
  };

  // Organize images into rows
  const rowsArray: { src: string; id: string }[][] = [];
  let currentIndex = 0;
  for (let row = 0; row < rows; row++) {
    const imagesInThisRow = imagesPerRow - row * removePerRow;
    if (imagesInThisRow <= 0) break; // Stop if no images left to place
    const rowImages = imageInstances.slice(
      currentIndex,
      currentIndex + imagesInThisRow
    );
    rowsArray.push(rowImages);
    currentIndex += imagesInThisRow;
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden brightness-[100%]">
      <div className="relative w-full h-full">
        {rowsArray.map((rowImages, rowIndex) =>
          rowImages.map((image, colIndex) => {
            const pos = getPosition(rowIndex, colIndex, rowImages.length);
            return (
              <div
                key={image.id}
                className="absolute "
                style={{
                  transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotation}deg)`,
                  zIndex: pos.zIndex,
                  width: `${imageSize.width}px`, // Set fixed width based on imageSize
                  height: `${imageSize.height}px`, // Set fixed height based on imageSize
                }}
              >
                <div className="w-full h-full bg-white shadow-lg p-1 rounded-3xl ">
                  <div className="relative aspect-[4/5] h-full">
                    <img
                      src={image.src}
                      alt={`Polaroid ${parseInt(image.id) + 1}`}
                      className="w-full h-full object-cover rounded-[19px]"
                    />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default PolaroidStack;
