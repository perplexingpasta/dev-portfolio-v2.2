// 1.3mb in 196ms, 100, 100
import PricingContainerDark from "@/components/PricingContainerDark";
import PricingContainerLight from "@/components/PricingContainerLight";
import MagicButton from "@/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import LitUpButton from "@/components/ui/LitUpButton";
import PricingContainerNotion from "@/components/PricingContainerNotion";
import dynamic from "next/dynamic";

const DynamicFAQs = dynamic(() => import("@/components/PricingFAQ"), {
  ssr: false,
});

const Pricing = () => {
  return (
    <div className="pt-40" id="pricing">
      <header>
        {/* GRID/DOT BACKGROUND */}
        <div className="absolute left-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.05] dark:bg-black-100 dark:bg-grid-white/[0.05]">
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
        </div>
        <h1 className="heading relative pt-12">
          Everything you need for{" "}
          <span className="text-purpledark dark:text-purple">
            best in class{" "}
          </span>{" "}
          service
        </h1>
      </header>
      <main>
        <section className="relative flex items-center justify-center pt-10 dark:hidden">
          <PricingContainerLight />
        </section>
        <section className="relative hidden items-center justify-center pt-10 dark:flex">
          <PricingContainerDark />
        </section>
        {/* <div className="relative flex items-center justify-center pt-10">
        <PricingPreline />
      </div> */}
        <section className="mt-10 flex flex-col items-center justify-center md:mt-20">
          <Link
            href="https://calendly.com/celeste-consulting/strategy-session-w-celeste-consulting"
            target="_blank"
          >
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
        </section>

        <section className="mt-20 md:mt-40">
          <h1 className="heading relative block !font-extrabold dark:hidden">
            <span className="relative inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-purple px-3 py-2 text-white">
              FAQs
            </span>
          </h1>
          <h1 className="heading relative hidden !font-extrabold dark:block">
            <span className="text-purple">FAQs</span>
          </h1>

          <div className="relative mt-10 md:mt-20">
            <DynamicFAQs />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pricing;
