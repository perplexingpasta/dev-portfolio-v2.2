import { FloatingNav3 } from "@/components/ui/FloatingNav3";
import { navItems } from "@/data/index2";
import React from "react";

import dynamic from "next/dynamic";

const DynamicFooter = dynamic(() => import("@/components/Footer3"), { ssr: false });
const DynamicWhatsapp = dynamic(() => import("@/components/Whatsapp"), { ssr: false });

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-white px-5 dark:bg-black-100 sm:px-10">
        <div className="w-full max-w-7xl">
          <FloatingNav3 navItems={navItems} />
          {children}
          <DynamicWhatsapp />
          <DynamicFooter />
        </div>
      </div>
    </>
  );
};

export default layout;
