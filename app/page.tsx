import Approach from "@/components/Approach";
import BackgroundBeamsDemo from "@/components/BackgroundBeamsDemo";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero2 from "@/components/Hero2";
import { HeroHighlightDemo } from "@/components/HeroHighlightDemo";
import Pleiades from "@/components/Pleiades";
import RecentProjects from "@/components/RecentProjects";
import { SparklesPreview } from "@/components/SparklesPreview";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { ModeToggle } from "@/components/ui/ModeToggle";
import Whatsapp from "@/components/Whatsapp";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main>
      <div className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-full">
          {/* <ModeToggle /> */}
          <FloatingNav navItems={navItems} />
          <Hero2 />
          {/* <HeroHighlightDemo /> */}
          <section className="mt-40" ><Grid /></section>
          <RecentProjects />
          <Clients />
          <Experience />
          <Pleiades />
          <BackgroundBeamsDemo />
          <Whatsapp />
          <Footer />
        </div>
      </div>
    </main>
  );
}
