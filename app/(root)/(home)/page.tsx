// import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero2 from "@/components/Hero2";
// import Pleiades from "@/components/Pleiades";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero2 />
      <section className="hidden dark:block">
        <Grid />
      </section>
      <section className="mt-40 dark:mt-0">
        <Services />
      </section>
      {/* <Experience /> */}
      {/* <Pleiades /> */}
    </main>
  );
}
