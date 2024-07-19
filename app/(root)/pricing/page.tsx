// import PricingPreline from "./PricingPreline";
import PricingFAQ from "@/components/PricingFAQ";
import PricingContainerDark from "@/components/PricingContainerDark";
import PricingContainerLight from "@/components/PricingContainerLight";
import MagicButton from "@/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Pricing = () => {
  return (
    <div className="pt-40" id="pricing">
      {/* GRID/DOT BACKGROUND */}
      <div className="absolute left-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.05] dark:bg-black-100 dark:bg-grid-white/[0.05]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      <h1 className="heading relative block !font-extrabold uppercase dark:hidden">
        Our{" "}
        <span className="relative inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-purple px-3 py-2 text-white">
          Pricing
        </span>
      </h1>
      <h1 className="heading relative hidden !font-extrabold uppercase dark:block">
        Our <span className="text-purple">Pricing</span>
      </h1>
      <h2 className="relative items-center justify-center py-4 text-center text-lg text-black-100 dark:text-white">
        Everything you need for best in class service
      </h2>

      <div className="relative flex items-center justify-center pt-10 dark:hidden">
        <PricingContainerLight />
      </div>
      <div className="relative hidden items-center justify-center pt-10 dark:flex">
        <PricingContainerDark />
      </div>
      {/* <div className="relative flex items-center justify-center pt-10">
        <PricingPreline />
      </div> */}
      <div className="mt-10 flex flex-col items-center justify-center md:mt-20">
        <a href="mailto:hello@celesteconsulting.in">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
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
