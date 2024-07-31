// import Experience from "@/components/Experience";
// import Pleiades from "@/components/Pleiades";
import Hero2 from "@/components/Hero2";
import dynamic from "next/dynamic";

const DynamicGrid = dynamic(() => import("@/components/Grid"), { ssr: false });
const DynamicSubscribe = dynamic(() => import("@/components/SubscribeToUs"), {
  ssr: false,
});
const DynamicServices = dynamic(() => import("@/components/Services"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <header>
        <Hero2 />
      </header>
      <main>
        <section className="hidden dark:block">
          <DynamicGrid />
        </section>
        <section className="mt-40 dark:mt-0">
          <DynamicServices />
        </section>
        <section className="relative mb-16 mt-12 border-b-2 border-t-2 md:mb-20 md:mt-40 md:rounded-3xl md:border-2 md:border-black-100 dark:md:border-white-100">
          <DynamicSubscribe />
        </section>
        {/* <Experience /> */}
        {/* <Pleiades /> */}
      </main>
    </>
  );
}
