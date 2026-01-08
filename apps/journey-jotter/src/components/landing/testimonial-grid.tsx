"use client";

import React from "react";
import { Card } from "@/src/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import { cn } from "@/src/lib/utils";

type TestimonialType = {
  rating: number;
  title?: string;
  content: string;
  author: {
    name: string;
    title?: string;
    avatar?: string;
    blog?: string;
  };
};

const testimonials: TestimonialType[] = [
  {
    rating: 5,
    title: "Lizzie",
    content:
      "I used to feel guilty about never keeping a travel journal, but this app made it so simple. It's quick, easy, and now I actually remember the little details I'd have forgotten.",
    author: {
      name: "Lizzie",
      title: "London",
      avatar: "/avatars/lizzie.jpg",
    },
  },
  {
    rating: 5,
    title: "Becca",
    content:
      "I never thought I'd be someone who journals, but Journey Jotter made it work for me. It's like jotting down your day without overthinking it.",
    author: {
      name: "Becca",
      title: "San Diego",
      avatar: "/avatars/becca.jpg",
    },
  },
  {
    rating: 5,
    title: "Eric",
    content:
      "I'd always forget the best parts of my trips. This app helped me keep track without spending hours writing.",
    author: {
      name: "Eric",
      title: "LA",
      avatar: "/avatars/eric.jpg",
    },
  },
  {
    rating: 5,
    title: "Jacob",
    content:
      "It's not just about the big moments—Journey Jotter helped me remember the small things that made my trip special.",
    author: {
      name: "Jacob",
      title: "Amsterdam",
      avatar: "/avatars/jacob.jpg",
    },
  },
  {
    rating: 5,
    title: "Kelly",
    content:
      "I've tried so many ways to journal while traveling, but I'd always give up after a week. I actually stick with Journey Jotter",
    author: {
      name: "Kelly",
      title: "NYC",
      avatar: "/avatars/kelly.jpg",
    },
  },
  {
    rating: 5,
    title: "Izzy",
    content: "Love it, so fun to use, will be using on next trip.",
    author: {
      name: "Izzy",
      title: "London",
      avatar: "/avatars/izzy.jpg",
    },
  },
  {
    rating: 5,
    title: "Annaleike",
    content:
      "It's really cool how it works, with all the questions and prompts. Really helpful to reflect on what you did. Espically when you are really tired (which I am right now)",
    author: {
      name: "Annaleike",
      title: "Netherlands",
    },
  },
  {
    rating: 5,
    title: "Jane",
    content:
      "So far so good!!! It's like a little friend to keep in your pocket especially if you're traveling alone.",
    author: {
      name: "Jane",
      title: "Boston",
    },
  },
  {
    rating: 5,
    title: "Kelly",
    content:
      "Journey jotter is such an incredible app for cataloging my travels! It's easy to use, the prompts are SO helpful, and the resulting journal sounds like me. I love having an app that helps me remember all the special moments from my trip.",
    author: {
      name: "Kelly",
      title: "27",
    },
  },
  {
    rating: 5,
    title: "Dani",
    content:
      "With the fast pace of hostel life, Journey Jotter makes it easy to capture memories from your travels. I just wish I had found it ten countries earlier.",
    author: {
      name: "Dani",
      title: "California",
    },
  },
];

export function TestimonialGrid() {
  return (
    <>
      <div className="relative w-full mx-auto max-w-7xl max-h-[2000px] md:max-h-[1200px] overflow-hidden">
        <div className="relative columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-6 md:space-y-4 mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-white border-none rounded-3xl shadow-none break-inside-avoid-column flex flex-col h-fit"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
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

              <h3 className="text-lg font-bold text-stone-800 mb-2">
                {testimonial.title || "Amazing App!"}
              </h3>

              <p className="text-stone-950/60 mb-6 text-base font-medium flex-grow">
                {testimonial.content}
              </p>

              <div className="flex items-center mt-auto">
                <Avatar className="h-10 w-10">
                  {testimonial.author.avatar ? (
                    <AvatarImage src={testimonial.author.avatar} />
                  ) : (
                    <AvatarFallback>
                      {testimonial.author.name[0]}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div className="ml-4">
                  <p className="text-stone-900">{testimonial.author.name}</p>
                  {testimonial.author.title && (
                    <p className="text-sm text-blue-400 font-semibold">
                      {testimonial.author.title}
                    </p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
        {/* Updated fade overlay */}
        <div className="absolute inset-x-0 bottom-0 h-[650px] pointer-events-none bg-gradient-to-b from-transparent via-transparent to-stone-100" />
      </div>
    </>
  );
}
