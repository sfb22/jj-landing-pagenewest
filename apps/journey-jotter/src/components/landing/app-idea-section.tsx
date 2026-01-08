"use client";

import { IPhoneFrame } from "@/src/components/ui/iphone-frame";
import { MessageCircle, Sparkles, Heart } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { Button } from "@/src/components/ui/button";

interface PolaroidImageProps {
  src: string;
  top: string;
  left: string;
}

const PolaroidImage = ({ src, top, left }: PolaroidImageProps) => (
  <div
    className={cn(
      "absolute w-[211px] h-[260px] transition-transform duration-300"
    )}
    style={{
      top,
      left,
    }}
  >
    <div className="w-full h-full rounded-3xl bg-white p-2">
      <div className="relative aspect-[4/5] h-full">
        <img
          src={src}
          alt="Journal entry"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  </div>
);

export function AppIdeaSection() {
  const sections = [
    {
      title: "Your AI travel companion.",
      description: {
        prefix:
          "Tailor the journaling experience to your trip. Whether you're on a beach in Thailand or trekking through the Andes, Journey Jotter ",
        highlight: "adjusts its prompts to suit your journey",
        suffix: ", allowing you to choose from three different prompt options.",
      },
      icon: <Sparkles className="w-6 h-6" />,
      image: "/landing/jj-screen.svg",
      learnMore: {
        text: "Learn more",
        href: "/about-ai",
      },
    },
    {
      title: "Beautifully written journals in your words.",
      description: {
        prefix:
          "Let Journey Jotter do the heavy lifting. Based on your entries, the app ",
        highlight:
          "summarizes your day into a beautifully crafted journal entry",
        suffix:
          ", ensuring your travel stories are captured with ease and precision.",
      },
      icon: <Heart className="w-6 h-6" />,
      image: "/landing/phone2.png",
      learnMore: {
        text: "Learn more",
        href: "/about-ai",
      },
    },
    {
      title: "Photo of the day",
      description: {
        prefix:
          "Add your favourite photos to every journal entry. Capture the ",
        highlight: "stunning views, unforgettable moments, and little details",
        suffix:
          " that make your travels unique. Your journals become more vivid and personal, combining your words and images into a beautiful story you’ll treasure forever.",
      },
      icon: <Heart className="w-6 h-6" />,
      image: "/landing/phone2.png",
      learnMore: {
        text: "Learn more",
        href: "/about-ai",
      },
    },
    {
      title: "Mobile and Desktop Access",
      description: {
        prefix:
          "Capture your travel memories wherever you are. Journey Jotter works ",
        highlight: "seamlessly across both your phone and laptop",
        suffix:
          ", giving you the flexibility to journal on the go or when you have time to sit down and reflect.",
      },
      icon: <MessageCircle className="w-6 h-6" />,
      image: "/landing/phone2.png",
      learnMore: {
        text: "Learn more",
        href: "/about-ai",
      },
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 md:gap-32 z-10">
      {sections.map((section, index) => (
        <div
          key={index}
          className="flex w-full items-center max-w-4xl mx-auto justify-center bg-blue-300/0 p-6"
        >
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 w-full items-center ">
            {/* Content Column */}
            <div
              className={cn(
                "flex items-center justify-center order-last md:order-none",
                index % 2 === 1 && "md:order-2"
              )}
            >
              <div className="flex flex-col gap-4 text-black text-left ">
                <h2 className="font-bold leading-snug text-stone-800 text-2xl md:text-4xl   md:mx-0">
                  {section.title}
                </h2>
                <p className="text-xl  md:text-2xl text-stone-500 font-medium leading-relaxed  md:mx-0">
                  {section.description.prefix}
                  <span className="font-bold text-mint-green-500">
                    {section.description.highlight}
                  </span>
                  {section.description.suffix}
                </p>
                {section.learnMore && (
                  <Button
                    className="text-stone-500 bg-transparent border-2 mt-2 bg-stone-100 rounded-full font-semibold leading-loose py-4 px-6 text-lg 
                      border-stone-300 hover:bg-mint-green-400/80 
                      transition-all duration-300 ease-in-out w-fit"
                    asChild
                    size="sm"
                  >
                    <a href={section.learnMore.href}>
                      {section.learnMore.text}
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Phone Column */}
            <div
              className={cn(
                "flex items-center justify-center order-first md:order-none",
                index % 2 === 1 && "md:order-1"
              )}
            >
              <div className="relative h-[75vh] max-h-[550px] w-full">
                <IPhoneFrame
                  image={section.image}
                  alt="Journey Jotter App Interface"
                  className="h-[75vh] absolute max-h-[550px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain z-20"
                />
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}
