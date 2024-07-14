"use client";
import React from "react";
import { motion } from "framer-motion";

import { FaLocationArrow } from "react-icons/fa6";
import LitUpButton from "./ui/LitUpButton";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { HeroHighlightDemo } from "./HeroHighlightDemo";

const Hero = () => {
  return (
    <div className="pb-20 pt-36" id="index">
      {/* SPOTLIGHTS */}
      <div className="hidden dark:block">
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* GRID/DOT BACKGROUND */}
      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.05] dark:bg-black-100 dark:bg-grid-white/[0.05]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      <div className="relative z-10 my-5 flex justify-center md:my-12">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          {/* <h1 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </h1> */}

          {/* HERO BIG TEXT */}
          <div className="mx-auto hidden max-w-4xl px-4 dark:block lg:mb-10">
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Digital Marketing to Grow your Dermatology Practice"
              // words="Helping Dermatologists Acquire Consistent, Predictable & Loyal Patients"
            />
          </div>
          <div className="block dark:hidden lg:mb-10">
            <HeroHighlightDemo />

            {/* HI WE ARE */}
          </div>
          <p className="my-10 text-center text-base md:mt-14 md:text-lg md:tracking-wider lg:text-2xl">
            Hi! We&apos;re{" "}
            <span className="font-semibold">Céleste Consulting</span> ✨
            <br /> We help Dermatologists with Consistent, Predictable & Loyal
            Patient Acquisition
          </p>

          {/* CTA BUTTONS */}
          <a href="#contact">
            <div className="hidden dark:block">
              <MagicButton
                title="BOOK A CALL NOW"
                icon={<FaLocationArrow />}
                position="right"
              />
            </div>
            <div className="block dark:hidden">
              <LitUpButton
                title="BOOK A CALL NOW"
                icon={<FaLocationArrow />}
                position="right"
              />
            </div>
          </a>
        </div>

        {/* SCROLLBUTTON */}
        <div className="xs:bottom-10 absolute top-full mt-16 flex w-full items-center justify-center md:mt-32">
          <a href="#about">
            <div className="flex h-16 w-9 items-start justify-center rounded-3xl border-4 border-black-100 p-2 dark:border-white-100">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="h-3 w-3 rounded-full bg-black-100 dark:bg-white-100"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
