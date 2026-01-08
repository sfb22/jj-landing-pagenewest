"use client";

import { IPhoneFrame } from "@/src/components/ui/iphone-frame";
import { MessageCircle, Sparkles, Heart } from "lucide-react";
import { cn } from "@/src/lib/utils";
import Image from "next/image";

// Add new Polaroid component
const Polaroid = ({ src, className }: { src: string; className?: string }) => (
  <div
    className={cn(
      "absolute bg-white p-2 shadow-lg transition-transform duration-300 w-[180px] h-[240px]",
      className
    )}
    style={{
      transform: `rotate(${Math.random() * 20 - 10}deg)`,
    }}
  >
    <div className="relative aspect-[4/5] h-full">
      <Image
        src={src}
        alt="Journal memory"
        fill
        className="object-cover rounded-sm"
      />
    </div>
  </div>
);

export function AppIdeaSection2() {
  const sections = [
    {
      title: "Fast.",
      description:
        "Journey Jotter turns a five minute conversation into a beautifully crafted journal entry.",
      icon: <MessageCircle className="w-6 h-6" />,
      image: "/landing/phone2.png",
    },
    {
      title: "Easy.",
      description:
        "Let AI-powered prompts guide your journaling journey. From daily reflections to deep introspections, we've got you covered.",
      icon: <Sparkles className="w-6 h-6" />,
      image: "/landing/phone2.png",
    },
    {
      title: "Personal.",
      description:
        "Our AI learns your unique writing style and tone, ensuring every entry feels authentically you. From casual observations to poetic reflections, Journey Jotter adapts to your voice.",
      icon: <Heart className="w-6 h-6" />,
      image: "/landing/phone2.png",
    },
  ];

  // Add background images array
  const backgroundImages = [
    "/landing/phone2.png",
    "/landing/journal2.jpg",
    "/landing/journal3.jpg",
    "/landing/journal4.jpg",
    "/landing/journal5.jpg",
  ];

  // Generate positions for 20 polaroids
  const polaroidPositions = Array.from({ length: 20 }, (_, i) => ({
    src: backgroundImages[i % backgroundImages.length],
    style: {
      left: `${(i % 5) * 20}%`,
      top: `${Math.floor(i / 5) * 25}%`,
    },
  }));

  return (
    <div className="relative bg-gradient-to-br from-stone-100 to-stone-300 pt-10 pb-20 overflow-hidden">
      {/* Background Polaroids */}
      <div className="absolute inset-0 opacity-50">
        {polaroidPositions.map((polaroid, index) => (
          <Polaroid
            key={index}
            src={polaroid.src}
            className="transition-all duration-500"
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-100/90 to-stone-300/90" />

      <div className="container max-w-5xl mx-auto px-4 relative">
        <div className="text-start max-w-3xl mx-auto my-32">
          <p className="text-2xl md:text-5xl text-black font-extrabold leading-relaxed">
            Journaling has never been this...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr,400px] gap-32">
          {/* Left column with scrolling sections */}
          <div className="space-y-[50vh]">
            {sections.map((section, index) => (
              <section
                key={index}
                className="min-h-screen flex items-center relative"
              >
                <div className="flex flex-col gap-6 text-black">
                  <h2 className="text-7xl font-bold tracking-tight bg-gradient-to-r from-mint-green-400 via-green-400 to-lime-500 bg-clip-text text-transparent italic">
                    {section.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-900 font-semibold leading-relaxed max-w-xl">
                    {section.description}
                  </p>
                </div>
              </section>
            ))}
          </div>

          {/* Right column with sticky iPhone */}
          <div className="hidden md:block">
            <div className="sticky top-0 h-screen flex items-center">
              <IPhoneFrame
                image={sections[0].image}
                alt="Journey Jotter App Interface"
                className="h-[85vh] max-h-[800px] object-contain"
              />
            </div>
          </div>

          {/* Mobile iPhone - Only visible on small screens */}
          <div className="md:hidden">
            <IPhoneFrame
              image={sections[0].image}
              alt="Journey Jotter App Interface"
              className="h-[85vh] max-h-[800px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
