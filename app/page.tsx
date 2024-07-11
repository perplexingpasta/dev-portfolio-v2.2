import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { ModeToggle } from "@/components/ui/ModeToggle";

export default function Home() {
  return (
    <main>
      <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          {/* <ModeToggle /> */}
          {/* <FloatingNav /> */}
          <Hero />
          <Grid />
          <RecentProjects />
        </div>
      </div>
    </main>
  );
}
