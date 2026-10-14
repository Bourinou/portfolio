import type { Metadata } from "next";
import { M_PLUS_Rounded_1c, Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageLoadEffects from "@/components/PageLoadEffects";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: {
    template: 'PAPE Dimitri - %s',
    default: 'PAPE Dimitri - Portfolio',
  },
  description: "Portfolio de PAPE Dimitri.",
};

const mplus = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const pixel = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-pixel",
});

const vt = VT323({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-vt",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${mplus.className} ${pixel.variable} ${vt.variable}`}>
      <body>
        <Navbar />
        <PageLoadEffects />
        <main> {children} </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>

  );
}
