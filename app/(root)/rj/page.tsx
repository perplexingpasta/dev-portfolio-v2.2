const page = () => {
  return (
    <>
      <section id="privacypolicy" className="pt-40">
        {/* GRID/DOT BACKGROUND */}
        {/* <div className="absolute left-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.05] dark:bg-black-100 dark:bg-grid-white/[0.1]">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
        </div> */}

        <h1 className="heading relative block !font-extrabold dark:hidden">
          <span className="relative inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-purple px-3 py-2 text-white">
            rj
          </span>
        </h1>
        <h1 className="heading relative hidden !font-extrabold dark:block">
          <span className="text-purple">rj</span>
        </h1>
        <h2 className="relative mb-16 items-center justify-center py-4 text-center text-lg text-black-100 dark:text-white">
          some of my fav projects
        </h2>
      </section>
    </>
  );
};

export default page;
