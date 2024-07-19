"use client";
import React from "react";
import { motion } from "framer-motion";

import { FaLocationArrow } from "react-icons/fa6";
import LitUpButton from "./ui/LitUpButton";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { HeroHighlightDemo } from "./HeroHighlightDemo";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="pb-20 pt-36" id="index">
      {/* SPOTLIGHTS */}
      <div className="hidden dark:block">
        <Spotlight
          className="top-16 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-1 h-[70vh] md:left-full md:top-10 md:h-[80vh] md:w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="left-80 top-52 h-[80vh] md:left-80 md:top-28 md:w-[50vw]"
          fill="blue"
        />
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
            <h1 className="text-center text-4xl font-extrabold uppercase tracking-wide text-white md:text-5xl md:!leading-tight lg:text-6xl lg:!leading-snug">
              Digital Marketing to Grow your{" "}
              <span className="gradient-text animate-gradient font-black text-transparent">
                Dermatology Practice
              </span>
            </h1>
            {/* <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Digital Marketing to Grow your Dermatology Practice"
              // words="Helping Dermatologists Acquire Consistent, Predictable & Loyal Patients"
            /> */}
          </div>
          <div className="dark:hidden lg:mb-10">
            <HeroHighlightDemo />
          </div>

          {/* HI WE ARE */}
          <p className="my-10 text-center font-lexendDeca text-base md:mt-14 md:text-lg md:tracking-wider lg:text-2xl">
            Hi! We&apos;re{" "}
            <span className="font-semibold">Céleste Consulting</span> ✨
            <br /> We help Dermatologists with Consistent, Predictable & Loyal
            Patient Acquisition
          </p>

          {/* CTA BUTTONS */}
          <Link href="#contact">
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
          </Link>
        </div>

        {/* SCROLLBUTTON */}
        <div className="xs:bottom-10 absolute top-full mt-32 flex w-full items-center justify-center">
          <Link href="#services">
            <div className="flex h-12 w-6 items-start justify-center rounded-3xl border-2 border-black-100 dark:border-white-100 md:h-16 md:w-9 md:border-4 md:p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="h-[0.7rem] w-[0.7rem] rounded-full bg-black-100 dark:bg-white-100 md:h-3 md:w-3"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
