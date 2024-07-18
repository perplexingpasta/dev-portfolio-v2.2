import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";

const Footer = () => {
  const footerLinks = [
    {
      title: "Help",
      links: [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" },
        { label: "FAQs", href: "/faqs" },
        { label: "About Us", href: "/about-us" },
      ],
    },
    {
      title: "Get in touch",
      links: [
        { label: "+91 63628-40780", href: "tel:+6362840780" },
        {
          label: "hello@celesteconsulting.in",
          href: "mailto:hello@celesteconsulting.in",
        },
      ],
    },
  ];
  return (
    <footer className="relative w-full pb-10 pt-20 lg:mt-24" id="contact">
      {/* <div className="w-full relative left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt=""
          className="w-full h-full opacity-50"
        />
      </div> */}

      <div className="flex flex-col md:flex-1 md:flex-row">
        <div>
          <h1 className="text-xl font-bold md:text-4xl lg:max-w-[45vw]">
            Céleste Consulting
          </h1>
          <p className="mt-3 text-sm text-white-200">
            Helping Dermatologists with{" "}
            <span className="text-purple">
              Consistent, Predictable <br className="hidden md:block" /> & Loyal
            </span>{" "}
            Patient Acquisition
          </p>
          <br />
          <div className="text-xs text-white-100 md:text-sm">
            <a href="/privacypolicy">
              <p>Privacy Policy</p>
            </a>
            <br />
            <a href="/termsofuse">
              <p>Terms of Use</p>
            </a>
          </div>
        </div>

        {/* <br className="block md:hidden" />
        <br className="block md:hidden" /> */}
        <div className="flex flex-1 flex-wrap justify-start gap-10 md:justify-around">
          {footerLinks.map((section) => (
            <div key={section.title}>
              {/* <h1 className="mb-6 text-2xl font-medium leading-normal text-white">
                {section.title}
              </h1> */}
              <ul>
                {section.links.map((item) => (
                  <li
                    className="text-white-400 mt-3 cursor-pointer text-sm leading-normal transition-all hover:scale-110 hover:text-red-300 md:text-base"
                    key={item.label}
                  >
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-50 mt-16 flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Thanks{" "}
          <a
            href="https://ui.aceternity.com/"
            target="_blank"
            className="!cursor-pointer hover:text-purple"
          >
            Aceternity UI
          </a>
        </p>

        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright © 2024{" "}
          <a href="#index" className="!cursor-pointer hover:text-purple">
            {" "}
            Céleste Consulting
          </a>
        </p>

        <div className="flex items-center gap-6 pt-5 md:gap-3 md:pt-0">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 saturate-150 backdrop-blur-lg backdrop-filter"
            >
              <img
                src={profile.img}
                alt="Social Media Link Icons"
                width={20}
                height={20}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
