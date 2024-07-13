"use client";
import React from "react";
import { SparklesCore } from "./ui/Sparkles";

export function SparklesPreview() {
  return (
    <div className="h-full relative w-full bg-black-100 flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-6xl text-3xl font-bold text-center text-white relative z-20">
        hiii &lt;3
      </h1>
    </div>
  );
}
