"use client";

import { IPhoneFrame } from "@/src/components/ui/iphone-frame";
import { PersonalizationFeature } from "@/src/types/landing";

interface AppIdeaSectionProps {
  title: string;
  description: string;
  selectedFeature: PersonalizationFeature;
  isLastSection?: boolean;
}

export function AppIdeaSection({
  title,
  description,
  selectedFeature,
  isLastSection = false,
}: AppIdeaSectionProps) {
  return (
    <section
      className="w-full py-24  p-8 min-h-screen flex items-center justify-center"
      id={`section-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6 text-white">
              <h2 className="text-6xl font-bold tracking-tight">{title}</h2>
              <p className="text-2xl text-gray-300 leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* iPhone Display - Only visible on mobile */}
          <div className="flex lg:hidden justify-center">
            <IPhoneFrame
              image={selectedFeature.image}
              alt={selectedFeature.title}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
