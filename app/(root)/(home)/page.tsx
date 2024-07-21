// import Experience from "@/components/Experience";
// import Pleiades from "@/components/Pleiades";
import Hero2 from "@/components/Hero2";
import dynamic from "next/dynamic";

const DynamicGrid = dynamic(() => import("@/components/Grid"), { ssr: false });
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
        {/* <Experience /> */}
        {/* <Pleiades /> */}
      </main>
    </>
  );
}
