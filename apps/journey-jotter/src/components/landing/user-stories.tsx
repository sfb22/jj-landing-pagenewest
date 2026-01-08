"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const userStories = [
  {
    quote:
      "Using Journey Jotter has revolutionized the way we travel. We're able to capture memories faster, prevent missing moments, and keep everyone up to date on what they need to see.",
    image: "sam1.jpg",
    name: "Sarah Chen",
    occupation: "Travel Photographer",
    company: "Wanderlust Media",
    companyLogo: "/testimonial/company1.svg",
  },
  {
    quote:
      "Capturing memories has never been easier. Every moment feels precious and preserved with this incredible platform.",
    image: "sam2.jpg",
    name: "Mike Rodriguez",
    occupation: "Food Blogger",
    company: "Culinary Adventures",
    companyLogo: "/testimonial/company2.svg",
  },
  {
    quote:
      "The perfect travel companion for documenting my adventures across Asia. It's transformed how I share my experiences.",
    image: "sam3.jpg",
    name: "Emma Thompson",
    occupation: "Digital Nomad",
    company: "Remote Explorers",
    companyLogo: "/testimonial/company3.svg",
  },
  {
    quote:
      "From street food to temple visits, Journey Jotter helped me remember it all. The best travel documentation tool I've ever used.",
    image: "sam4.jpg",
    name: "David Kim",
    occupation: "Travel Writer",
    company: "Global Ventures",
    companyLogo: "/testimonial/company4.svg",
  },
  {
    quote:
      "From street food to temple visits, Journey Jotter helped me remember it all. The best travel documentation tool I've ever used.",
    image: "sam4.jpg",
    name: "David Kim",
    occupation: "Travel Writer",
    company: "Global Ventures",
    companyLogo: "/testimonial/company4.svg",
  },
  {
    quote:
      "From street food to temple visits, Journey Jotter helped me remember it all. The best travel documentation tool I've ever used.",
    image: "sam4.jpg",
    name: "David Kim",
    occupation: "Travel Writer",
    company: "Global Ventures",
    companyLogo: "/testimonial/company4.svg",
  },
];

export function UserStories() {
  const scrollLeft = () => {
    const container = document.querySelector(".stories-scroll-container");
    if (container) {
      container.scrollLeft -= 400;
    }
  };

  const scrollRight = () => {
    const container = document.querySelector(".stories-scroll-container");
    if (container) {
      container.scrollLeft += 400;
    }
  };

  return (
    <div className="py-40 bg-[hsl(0,0%,97%)] relative overflow-hidden">
      <div className="absolute w-[1500px] h-[1500px] -top-[25%] -right-[25%] bg-gradient-radial from-mint-green-300/30 via-transparent to-transparent" />
      <div className="absolute w-[1500px] h-[1500px] -bottom-[25%] -left-[25%] bg-gradient-radial from-blue-300/30 via-transparent to-transparent" />

      <section className="w-full px-4 md:px-28 relative">
        <div className="container max-w-7xl mx-auto relative h-full z-20">
          <div className="container max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-20">
              Don't just take our word for it
            </h2>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="relative">
          <div className="flex gap-8 overflow-x-auto scrollbar-hide stories-scroll-container">
            <div className="flex flex-wrap justify-center gap-8 px-4 md:px-28 py-8">
              {userStories.map((story, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-[32px] p-6 w-full md:w-[45%] lg:w-[30%] flex flex-col h-[300px]"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <Image
                        src={`/testimonial/${story.image}`}
                        alt={story.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold text-lg text-gray-900">
                        {story.name}
                      </p>
                      <p className="text-md font-medium text-blue-500">
                        {story.occupation}
                      </p>
                    </div>
                  </div>

                  <p className="text-black text-lg flex-grow font-medium overflow-y-auto">
                    {story.quote}
                  </p>

                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* 
          <div className="flex justify-end gap-6 mt-8 px-28">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollLeft}
              className="rounded-full border-mint-green-300 bg-white text-mint-green-300 hover:bg-mint-green-300/20 hover:text-mint-green-400"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollRight}
              className="rounded-full border-mint-green-300 bg-white text-mint-green-300 hover:bg-mint-green-300/20 hover:text-mint-green-400"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div> */}
        </div>
      </section>
    </div>
  );
}
