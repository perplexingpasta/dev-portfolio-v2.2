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

      {/* CALENDLY FOR LIGHT MODE */}
      <div className="dark:hidden">
        <div
          className="calendly-inline-widget h-[700px] min-w-80"
          data-url="https://calendly.com/celeste-consulting/strategy-session-w-celeste-consulting"
        ></div>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
      </div>
      {/* <div className="hidden dark:block">
        <div
          className="calendly-inline-widget h-[700px] min-w-80 background_color=000319&text_color=ffffff&primary_color=6366f1"
          data-url="https://calendly.com/celeste-consulting/strategy-session-w-celeste-consulting"
        ></div>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
      </div> */}
    </div>
  );
};

export default Contact;
