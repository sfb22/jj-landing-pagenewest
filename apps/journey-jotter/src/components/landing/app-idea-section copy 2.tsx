"use client";

import { IPhoneFrame } from "@/src/components/ui/iphone-frame";
import { MessageCircle, Sparkles, Heart } from "lucide-react";

export function AppIdeaSection() {
  const sections = [
    {
      title: "Fast.",
      description:
        "Journey Jotter turns a five minute conversation into a beautifully crafted journal entry.",
      icon: <MessageCircle className="w-6 h-6" />,
      image: "/landing/phone1.png",
    },
    {
      title: "Easy.",
      description:
        "Let AI-powered prompts guide your journaling journey. From daily reflections to deep introspections, we've got you covered.",
      icon: <Sparkles className="w-6 h-6" />,
      image: "/landing/phone1.png",
    },
    {
      title: "Personal.",
      description:
        "Our AI learns your unique writing style and tone, ensuring every entry feels authentically you. From casual observations to poetic reflections, Journey Jotter adapts to your voice.",
      icon: <Heart className="w-6 h-6" />,
      image: "/landing/phone1.png",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-[hsl(0,0%,97%)] to-[hsl(0,0%,92%)] py-40">
      {/* <section className="w-full  px-28">
        <div className="container max-w-7xl mx-auto relative h-full z-20">
          <div className="container max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
              Journaling has never been this...
            </h2>
          </div>
        </div>
      </section> */}
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-start  mx-auto ">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-16">
            Journaling has never been this...
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr,400px] gap-32">
          {/* Left column with scrolling sections */}
          <div className="space-y-[50vh]">
            {sections.map((section, index) => (
              <section
                key={index}
                className="first:min-h-[100vh] last:min-h-[100vh] h-fit flex items-center relative "
              >
                <div className="flex flex-col gap-6 text-black">
                  <h2 className="text-7xl font-bold tracking-tight bg-gradient-to-r from-stone-200 via-stone-200 to-stone-200 bg-clip-text text-transparent ">
                    {section.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-stone-300 font-medium leading-relaxed max-w-xl">
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
                className=" h-[85vh] max-h-[800px] object-contain"
              />
            </div>
          </div>

          {/* Mobile iPhone - Only visible on small screens */}
          <div className="md:hidden">
            <IPhoneFrame
              image={sections[0].image}
              alt="Journey Jotter App Interface"
              className=" h-[85vh] max-h-[800px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
