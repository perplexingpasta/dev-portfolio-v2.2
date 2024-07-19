import Footer from "@/components/Footer3";
import Whatsapp from "@/components/Whatsapp";
import { FloatingNav3 } from "@/components/ui/FloatingNav3";
import { navItems } from "@/data/index2";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-white px-5 dark:bg-black-100 sm:px-10">
        <div className="w-full max-w-7xl">
          <FloatingNav3 navItems={navItems} />
          {children}
          <Whatsapp />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default layout;
