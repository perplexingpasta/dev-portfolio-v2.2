import BackgroundBeamsDemo from "@/components/BackgroundBeamsDemo";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer2";
import Grid from "@/components/Grid";
import Hero2 from "@/components/Hero2";
import Pleiades from "@/components/Pleiades";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Whatsapp from "@/components/Whatsapp";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main>
      <div className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero2 />
          <section className="mt-40" ><Grid /></section>
          <RecentProjects />
          <Clients />
          <Experience />
          <Pleiades />
          {/* <BackgroundBeamsDemo /> */}
          <Whatsapp />
          <Footer />
        </div>
      </div>
    </main>
  );
}
