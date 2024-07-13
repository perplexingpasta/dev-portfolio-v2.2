"use client";
import React from "react";
import { Boxes } from "./ui/BackgroundBoxes";
import { cn } from "@/utils/cn";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center md:justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-black-100 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1
        className={cn(
          "lg:text-4xl md:text-3xl text-xl font-bold text-white relative z-20"
        )}
      >
        Céleste Consulting ✨
      </h1>
      <p className="text-center mt-2 text-xl tracking-widest text-purple relative z-20 hidden lg:block">
        Hover your cursor over here!
      </p>
    </div>
  );
}
