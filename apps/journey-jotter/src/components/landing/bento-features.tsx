"use client";

import Image from "next/image";
import { Battery, Recycle, TreePine, Clock } from "lucide-react";

export function BentoFeatures() {
  return (
    <section className="w-full py-12 bg-black">
      <div className="container w-full mx-auto px-4">
        <div className="grid grid-cols-4 gap-4 ">
          {/* Battery Charger */}
          <div className="rounded-3xl bg-zinc-900 p-6 flex flex-col justify-between">
            <Battery className="w-8 h-8 text-green-400" />
            <p className="text-white text-sm leading-tight">
              Meets U.S. Department of Energy requirements for battery charger
              systems
            </p>
          </div>

          {/* Zero Waste */}
          <div className="col-span-2 rounded-3xl bg-zinc-900 p-6 flex flex-col justify-between">
            <h3 className="text-4xl font-bold text-green-400">ZERO WASTE</h3>
            <p className="text-white text-sm">
              sent to landfill from 100+ supplier facilities
            </p>
          </div>

          {/* Responsibly Managed Forests */}
          <div className="rounded-3xl bg-gradient-to-b from-mint-green-300 to-mint-green-400 p-6 flex flex-col justify-between">
            <h3 className="text-xl font-bold text-black">
              RESPONSIBLY MANAGED FORESTS
            </h3>
            <p className="text-black text-sm">
              100% virgin wood fiber from responsibly managed forests
            </p>
          </div>

          {/* No Plastic Wrap */}
          <div className="rounded-3xl bg-zinc-900 p-6 flex flex-col justify-between">
            <p className="text-white text-sm">No outer plastic wrap</p>
            <Image
              src="/placeholder.svg"
              alt="AirPods Pro Box"
              width={100}
              height={100}
              className="self-end"
            />
          </div>

          {/* 100% Recycled Rare Earth */}
          <div className="col-span-2 row-span-2 rounded-3xl bg-zinc-900 p-6 flex flex-col justify-between">
            <Image
              src="/placeholder.svg"
              alt="AirPods Pro"
              width={300}
              height={200}
              className="object-cover w-full h-3/4 rounded-2xl"
            />
            <div>
              <h2 className="text-3xl font-bold text-white mt-4">
                AirPods Pro
              </h2>
              <p className="text-white text-lg">
                100% recycled rare earth elements in all magnets
              </p>
            </div>
          </div>

          {/* 100% Recycled Materials */}
          <div className="rounded-3xl bg-zinc-900 p-6 flex flex-col justify-between">
            <h3 className="text-4xl font-bold text-white">100%</h3>
            <p className="text-white text-sm">
              recycled tin in the solder and recycled gold in the plating of
              multiple printed circuit boards
            </p>
          </div>

          {/* Recycled Plastics */}
          <div className="rounded-3xl bg-zinc-900 p-6 flex flex-col justify-between">
            <Recycle className="w-8 h-8 text-green-400" />
            <p className="text-white text-sm">
              Recycled plastics used in multiple components
            </p>
          </div>

          {/* No Harmful Substances */}
          <div className="rounded-3xl bg-zinc-900 p-6 flex flex-col justify-between">
            <h3 className="text-xl font-bold text-green-400">
              NO mercury NO PVC NO beryllium NO BFR
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
