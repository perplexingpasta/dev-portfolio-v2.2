import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Montserrat, Lexend_Deca } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const lexenddeca = Lexend_Deca({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Celeste Consulting | Helping Dermatologists with Consistent, Predictable & Loyal Patient Acquisition",
  description:
    "We help Dermatologists with consistent, predictable & loyal patient acquisition. We get dermatologists more patients and help them grow their practice online by running paid ads on facebook and google and professional website development using nextjs. We also help set up their google business profile and increase google reviews on google maps of their clinic.",
  other: {
    "twitter:image": "/images/ogmeta.png",
    "twitter:card": "céleste consulting",
    "og:url": "https://www.celesteconsulting.in/",
    "og:image": "/images/ogmeta.png",
    "og:type": "website",
  },
  icons: {
    icon: ["/images/favicon.ico"],
    apple: ["/images/apple-touch-icon.png"],
    shortcut: ["/images/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
