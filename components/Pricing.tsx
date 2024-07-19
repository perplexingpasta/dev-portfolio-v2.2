// I DON'T THINK I NEED THIS
import PricingPreline from "./PricingPreline";
import PricingContainerDark from "@/components/PricingContainerDark";
import PricingContainerLight from "@/components/PricingContainerLight";

const Pricing = () => {
  return (
    <div className="pt-20" id="pricing">
      {/* GRID/DOT BACKGROUND */}
      <div className="absolute left-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.05] dark:bg-black-100 dark:bg-grid-white/[0.05]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      
    </div>
  );
};

export default Pricing;
