"use client";

import React from "react";

export function SocialProof() {
  return (
    <div className="mt-12 flex items-center gap-8">
      <div className="flex -space-x-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-12 h-12 rounded-full border-2 border-white overflow-hidden"
          >
            <img
              src={`/testimonial/sam${i}.jpg`}
              alt={`User ${i}`}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div>
        <p className="text-black/90 font-medium">Joined by 10,000+ travelers</p>
        <div className="flex items-center gap-1 text-yellow-400">
          {[1, 2, 3, 4, 5].map((i) => (
            <span key={i}>★</span>
          ))}
          <span className="text-black/90 ml-2">4.9/5</span>
        </div>
      </div>
    </div>
  );
}
