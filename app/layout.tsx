import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Montserrat, Lexend_Deca } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";


const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

const lexenddeca = Lexend_Deca({
  subsets: ['latin'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: "Celeste Consulting",
  description:
    "Helping Dermatologists with Consistent, Predictable & Loyal Patient Acquisition.",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
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
