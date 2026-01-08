"use client";

import { DownloadButton } from "@/src/components/landing/download-button";

export function CTASection() {
  return (
    <div className="container py-4 justify-center items-center">
      <div className="flex flex-col items-center text-center space-y-8 md:space-y-16 ">
        <h1 className="text-4xl font-extrabold md:text-5xl lg:text-6xl xl:text-7xl">
          <span className="inline-block text-white leading-tight">
            Remember your
          </span>
          <br />
          <span className="inline-block text-white leading-tight">journey</span>
          <span className="leading-tight inline text-mint-green-400 ml-1.5 italic">
            forever.
          </span>
        </h1>
        <DownloadButton />
      </div>
    </div>
  );
}
