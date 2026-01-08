"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/src/components/ui/badge";
import { cn } from "@/src/lib/utils";

type UserStory = {
  id: number;
  name: string;
  age: number;
  bio: string;
  image: string;
  quote: string;
};

const userStories = [
  {
    quote:
      "This journey changed my perspective on life and travel. The memories I made here will stay with me forever.",
    image: "sam1.jpg",
    name: "Sarah Chen",
    occupation: "Travel Photographer",
  },
  {
    quote:
      "Capturing memories has never been easier. Every moment feels precious and preserved.",
    image: "sam2.jpg",
    name: "Mike Rodriguez",
    occupation: "Food Blogger",
  },
  {
    quote:
      "The perfect travel companion for documenting my adventures across Asia.",
    image: "sam3.jpg",
    name: "Emma Thompson",
    occupation: "Digital Nomad",
  },
  {
    quote:
      "From street food to temple visits, Journey Jotter helped me remember it all.",
    image: "sam4.jpg",
    name: "David Kim",
    occupation: "Travel Writer",
  },
];

export function UserStories() {
  // Helper function for random rotation
  const getRandomRotation = () => {
    return Math.random() * 2 - 1; // Random rotation between -1 and 1 degree
  };

  return (
    <div className="py-40 bg-zinc-800">
      <section className="w-full px-28">
        <div className="container max-w-7xl mx-auto relative h-full z-20">
          <div className="container max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-20">
              Don't take our word for it
            </h2>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="relative">
          <div className="flex gap-8 overflow-x-auto scrollbar-hide">
            <div className="flex gap-8 snap-x snap-mandatory px-28 py-8">
              {userStories.map((story, index) => (
                <div
                  key={index}
                  className="relative flex-none w-[450px] h-[200px] snap-center group transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-0 cursor-pointer bg-white rounded-sm shadow-xl p-3"
                >
                  <div className="flex h-full gap-4">
                    {/* Image container */}
                    <div className="relative w-[150px] h-full flex-shrink-0">
                      <Image
                        src={`/testimonial/${story.image}`}
                        alt={story.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content container */}
                    <div className="flex flex-col justify-between py-2">
                      <p className="text-lg italic text-zinc-700">
                        "{story.quote}"
                      </p>
                      <div>
                        <p className="text-lg font-semibold text-zinc-900">
                          {story.name}
                        </p>
                        <p className="text-sm text-zinc-500">
                          {story.occupation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
