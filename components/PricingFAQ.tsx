// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// const AccordionDemo = () => {
//   return (
//     <Accordion type="single" collapsible className="w-full">
//       <AccordionItem value="item-1">
//         <AccordionTrigger>
//           How are these suites ordered? What&apos;s the main difference?
//         </AccordionTrigger>
//         <AccordionContent>
//           We&apos;ve designed these suites in order of how committed you want to
//           be with growing your practice and getting in more patients as a
//           result. If you&apos;re unsure of our services or whether you&apos;ve
//           got committment issues, we suggest you to try our{" "}
//           <strong>Foundation Suite</strong>. It&apos;s priced adeptly and
//           you&apos;ll love it, guaranteed. But if you have the guts or are
//           determined enough to succeed, we highly recommend you to go for the{" "}
//           <strong>Professional Suite</strong>. It&apos;s the best fr.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-2">
//         <AccordionTrigger>
//           I don&apos;t understand the payment model of the Foundation Suite
//         </AccordionTrigger>
//         <AccordionContent>
//           We don&apos;t understand it either lol. In all seriousness, you only
//           have to pay ₹2740 once and we&apos;ll work in that for a year.
//           It&apos;s not a monthly payment. You only pay once and that&apos;s
//           ₹2740. It&apos;s dirt cheap ngl.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-3">
//         <AccordionTrigger>What are business emails?</AccordionTrigger>
//         <AccordionContent>
//           Business emails are made from your domain. So if you get
//           dradamsmith.com as your domain for your website, you can have
//           help@dradamsmith.com or support@dradamsmith.com as your emails. In our
//           case we have hello@celesteconsulting.in.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-4">
//         <AccordionTrigger>What are persuasive landing pages?</AccordionTrigger>
//         <AccordionContent>
//           Only the greatest thing ever! As far as advertising is concerned
//           anyways. Here based on your ad campaign we make landing pages (think
//           of them as a single page website on the web). So after someone
//           interacts with your ad, they are redirected to this landing page.
//           It&apos;s written in such a persuasive manner that the likelihood that
//           the person actually gets convinced and buys your services increases
//           drastically. It&apos;s based on all sorts of understanding of human
//           psychology. They work really well. An ad campaign without the
//           persusasive landing pages aren&apos;t just as efficient.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-5">
//         <AccordionTrigger>Common Features of all the websites?</AccordionTrigger>
//         <AccordionContent>No, why would it be?</AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-6">
//         <AccordionTrigger>
//           What is the difference between the Advanced Website and the Professional Website?
//         </AccordionTrigger>
//         <AccordionContent>
//           They both are made to supplement the ad campaigns for their tiers
//           respectively. In the starting tiers, an advanced website will suffice
//           the traffic that you will receive and will have extraordinary features
//           for the same. It&apos;ll be amazing, blazingly fast and will have all
//           the bells & whistles. That said, the professional tiers are where the
//           fun is at. We design & develop the best website humanly possible, I&apos;m
//           talking Apple level website, with all the sleek animations, nifty
//           buttons and mind-blowing user experience. It looks so premium that
//           whatever high prices you wanna charge for your consultation will be
//           justified solely by it. You&apos;ll brag to your friends about it all the time ong.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-10">
//         <AccordionTrigger>Is it animated?</AccordionTrigger>
//         <AccordionContent>No, why would it be?</AccordionContent>
//       </AccordionItem>
//     </Accordion>
//   );
// };

// export default AccordionDemo;

"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

const PricingFAQ = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion>
      <AccordionItem
        key="1"
        aria-label="How are these suites ordered? What's the main difference?"
        title="How are these suites ordered? What's the main difference?"
      >
        We&apos;ve designed these suites in order of how committed you want to
        be with growing your practice and getting in more patients as a result.
        If you&apos;re unsure of our services or whether you&apos;ve got
        committment issues, we suggest you to try our{" "}
        <span className="text-purple">Foundation Suite</span>. It&apos;s priced
        adeptly and you&apos;ll love it,guaranteed. But if you have the guts or
        are determined enough to succeed, we highly recommend you to go for the{" "}
        <span className="text-purple">Professional Suite</span>. It&apos;s the
        best fr.
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="I don't understand the payment model of the Foundation Suite"
        title="I don't understand the payment model of the Foundation Suite"
      >
        We don&apos;t understand it either lol. In all seriousness, you only
        have to pay ₹2740 once and we&apos;ll work in that for a year. It&apos;s
        not a monthly payment. You only pay once and that&apos;s ₹2740.
        It&apos;s dirt cheap ngl.
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="What are business emails?"
        title="What are business emails?"
      >
        Business emails are very essential for your profession. They&apos;re made
        from your domain so if you get dradamsmith.com as your domain for your
        website, you can have help@dradamsmith.com or support@dradamsmith.com as
        your emails. In our case we have hello@celesteconsulting.in. You don&apos;t
        need to make a new account or anything, we&apos;ll simply forward all
        incoming emails to your main email which can be your gmail account. So
        you get to receive all the emails in one single place.
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="What are persuasive landing pages?"
        title="What are persuasive landing pages?"
      >
        Only the greatest thing ever! As far as advertising is concerned
        anyways. Here, based on your ad campaign we make landing pages (think of
        them as a single page website on the web). So after someone interacts
        with your ad, they are redirected to this landing page. It&apos;s
        written in such a persuasive manner that the likelihood that the person
        actually gets convinced and buys your services increases drastically.
        It&apos;s based on all sorts of understanding of human psychology. They
        work really well. An ad campaign without the persusasive landing pages
        aren&apos;t just as efficient.
      </AccordionItem>
      <AccordionItem
        key="5"
        aria-label="What features will I get in the website?"
        title="What features will I get in the website?"
      >
        All our websites will have the following features. Of course, the professional tiers will have more advanced features but these are the common ones found across all.
        <ul>
            <li>+ Domain</li>
            <li>+ Hosting</li>
            <li>+ Analytics</li>
            <li>+ SEO Setup</li>
            <li>+ Image Gallery</li>
            <li>+ Whatsapp Integration</li>
            <li>+ Google Maps of your location</li>
            <li>+ Google Reviews of your practice</li>
            <li>+ Copywriting & Content Creation</li>
            <li>+ Fully mobile, tablet, iphone, ipad, laptop, samsung fridge responsive</li>
            <li>+ Follows the best Accessibility Practices</li>
            <li>+ Regular Website Testing & Maintenance</li>
        </ul>
      </AccordionItem>
      <AccordionItem
        key="6"
        aria-label="What is the difference between the Advanced Website and the Professional Website?"
        title="What is the difference between the Advanced Website and the Professional Website?"
      >
        They both are made to supplement the ad campaigns for their tiers
        respectively. In the starting tiers, an advanced website will suffice
        the traffic that you will receive and will have extraordinary features
        for the same. It&apos;ll be amazing, blazingly fast and will have all
        the bells & whistles. That said, the professional tiers are where the
        fun is at. We design & develop the best website humanly possible,
        I&apos;m talking Apple level website, with all the sleek animations,
        nifty buttons and mind-blowing user experience. It looks so premium that
        whatever high prices you wanna charge for your consultation will be
        justified solely by it. You&apos;ll brag to your friends about it all
        the time ong.
      </AccordionItem>
      <AccordionItem
        key="7"
        aria-label="What are strategy meetings?"
        title="What are strategy meetings?"
      >
        In our professional tiers, we provide strategy meetings, the frequency
        of which is monthly for the{" "}
        <span className="text-purple">Professional Suite</span> and weekly fo
        the <span className="text-purple">Master Suite</span>. Here you get to
        interact with our founders who also happen to be the web development
        manager and the ads manager. We discuss your goals, current trajectory,
        extrapolated trajectory and business concerns with them so that you can
        have the peace of mind that everything is going well and according to
        plan. We also talk about which ads are performing well and where we
        should focus our efforts for best optimization and efficiency.
      </AccordionItem>
    </Accordion>
  );
};

export default PricingFAQ;