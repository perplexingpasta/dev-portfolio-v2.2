import React from "react";

const Contact = () => {
  return (
    <div className="pt-40" id="contact">
      <header>
        <h1 className="heading relative block !font-extrabold dark:hidden">
          <span className="relative inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-purple px-3 py-2 text-white">
            Contact Us
          </span>
        </h1>
        <h1 className="heading relative hidden !font-extrabold dark:block">
          <span className="text-purple">Contact Us</span>
        </h1>
      </header>
      <p className="mt-12 text-center">page in development &gt;.&lt;</p>
      <div className="tidycal-embed" data-path="1dpydk1/discovery-call"></div>
      <script src="https://asset-tidycal.b-cdn.net/js/embed.js" async></script>
    </div>
  );
};

export default Contact;
