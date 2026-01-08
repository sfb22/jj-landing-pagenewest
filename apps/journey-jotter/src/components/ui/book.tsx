"use client";

import { motion } from "framer-motion";

export default function Book() {
  return (
    <div className="relative w-full aspect-[3/4] max-w-[420px] mx-auto">
      {/* Book spine */}
      <div className="absolute left-0 top-0 w-8 h-full bg-gray-50 rounded-l-xl transform -translate-x-full">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50" />
      </div>

      {/* Main book content */}
      <div className="relative h-full bg-white rounded-r-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-l-2 border-gray-200 overflow-hidden">
        {/* Shiny overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,transparent_40%,rgba(255,255,255,0.2)_45%,rgba(255,255,255,0.3)_50%,rgba(255,255,255,0.2)_55%,transparent_60%,transparent_100%)] animate-shine pointer-events-none" />

        {/* Metallic edge effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.1)_15%,rgba(255,255,255,0.1)_85%,transparent_100%)] pointer-events-none" />

        {/* Page edge effect */}
        <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-gradient-to-l from-gray-200 to-transparent" />

        {/* Content wrapper */}
        <div className="relative p-6 md:p-8 h-full flex items-center">
          <div className="relative space-y-7">
            {/* Title */}
            <h1 className="text-3xl md:text-[55px] font-extrabold text-center tracking-tight text-big-stone-950">
              Capture Your <br />
            </h1>
            <h1 className="text-3xl md:text-[55px] font-extrabold text-center tracking-tight text-big-stone-950">
              Travel Stories
            </h1>
            <h1 className="text-3xl md:text-[55px] font-extrabold text-center tracking-tight text-big-stone-500">
              Effortlessly
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              Transform your travel memories into captivating stories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
