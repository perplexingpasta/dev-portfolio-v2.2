import React from "react";

const Contact = () => {
  return (
    // <div className="pt-40" id="contact">
    //   <header>
    //     <h1 className="heading relative block !font-extrabold dark:hidden">
    //       <span className="relative inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-purple px-3 py-2 text-white">
    //         Contact Us
    //       </span>
    //     </h1>
    //     <h1 className="heading relative hidden !font-extrabold dark:block">
    //       <span className="text-purple">Contact Us</span>
    //     </h1>
    //   </header>
    //   <p className="mt-12 text-center text-xl">page in development &gt;.&lt;</p>
    // </div>
    <>
      <header id="contact" className="pt-40">
        {/* GRID/DOT BACKGROUND */}
        {/* <div className="absolute left-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.05] dark:bg-black-100 dark:bg-grid-white/[0.1]">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
        </div> */}

        <h1 className="heading relative block dark:hidden">
          <span className="relative inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-purple px-3 py-2 text-white">
            Contact Us
          </span>
        </h1>
        <h1 className="heading relative hidden dark:block">
          <span className="text-purple">Contact Us</span>
        </h1>
        <h2 className="relative mb-16 items-center justify-center py-4 text-center font-lexendDeca text-lg font-light text-black-100 dark:text-white">
          Here are all the ways you can get in touch with us!
        </h2>
      </header>

      <main>
        <section className="relative font-semibold tracking-wide text-3xl">
          <h1>Book A Meeting</h1>
        </section>
      </main>
    </>
  );
};

export default Contact;
