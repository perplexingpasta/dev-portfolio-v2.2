// import PricingPreline from "./PricingPreline";
import PricingFAQ from "@/components/PricingFAQ";
import PricingContainerDark from "@/components/PricingContainerDark";
import PricingContainerLight from "@/components/PricingContainerLight";
import MagicButton from "@/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import LitUpButton from "@/components/ui/LitUpButton";
import PricingContainerNotion from "@/components/PricingContainerNotion";

const Pricing = () => {
  return (
    <div className="pt-40" id="pricing">
      {/* GRID/DOT BACKGROUND */}
      <div className="absolute left-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.05] dark:bg-black-100 dark:bg-grid-white/[0.05]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      {/* <h1 className="heading relative block dark:hidden">
        Everything you need for{" "}
        <span className="relative inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-purple px-3 py-2 text-white">
          best in class{" "}
        </span>
        service
      </h1> */}
      <h1 className="heading relative pt-12">
        Everything you need for{" "}
        <span className="text-purpledark dark:text-purple">best in class </span>{" "}
        service
      </h1>
      {/* <h2 className="relative items-center justify-center py-4 text-center text-lg text-black-100 dark:text-white">
        Everything you need for best in class service
      </h2> */}

      <div className="relative flex items-center justify-center pt-10 dark:hidden">
        <PricingContainerLight />
      </div>
      <div className="relative hidden items-center justify-center pt-10 dark:flex">
        <PricingContainerNotion />
      </div>
      {/* <div className="relative flex items-center justify-center pt-10">
        <PricingPreline />
      </div> */}
      <div className="mt-10 flex flex-col items-center justify-center md:mt-20">
        <Link href="mailto:hello@celesteconsulting.in">
          <div className="hidden dark:block">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </div>
          <div className="block dark:hidden">
            <LitUpButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </div>
        </Link>
      </div>

      <div className="mt-20 md:mt-40">
        <h1 className="heading relative block !font-extrabold dark:hidden">
          <span className="relative inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-purple px-3 py-2 text-white">
            FAQs
          </span>
        </h1>
        <h1 className="heading relative hidden !font-extrabold dark:block">
          <span className="text-purple">FAQs</span>
        </h1>

        <div className="relative mt-10 md:mt-20">
          <PricingFAQ />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
