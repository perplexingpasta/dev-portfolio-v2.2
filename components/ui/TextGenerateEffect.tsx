/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    console.log(wordsArray);
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 3,
        delay: stagger(0.3),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              // change here if idx is greater than 3, change the text color to #CBACF9
              className={` ${idx < 7 && idx > 4 ? "text-purple" : "dark:text-white text-black"
                } opacity-0`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <span className={cn("font-black uppercase", className)}>
      {/* mt-4 to my-4 */}
      <span className="my-4">
        {/* remove  text-2xl from the original */}
        <span className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </span>
      </span>
    </span>
  );
};