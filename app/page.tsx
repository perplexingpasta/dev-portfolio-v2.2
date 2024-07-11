import Hero from "@/components/Hero";
// import { ModeToggle } from "@/components/ui/ModeToggle";

export default function Home() {
  return (
    <main>
      <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          {/* <ModeToggle /> */}
          <Hero />
        </div>
      </div>
    </main>
  );
}
