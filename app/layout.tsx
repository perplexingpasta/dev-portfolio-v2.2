import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Montserrat, Lexend_Deca } from "next/font/google";
// import Lexend from 'next/font/local';
import "./globals.css";
import { ThemeProvider } from "./provider";


export const mont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export const lexenddeca = Lexend_Deca({
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
// inter, mont, lex, urbanist, outfit, lexmega, lexdeca, lextera
// mont for hero h1
// lexdeca for p text

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
