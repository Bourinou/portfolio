import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageLoadEffects from "@/components/PageLoadEffects";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: 'PAPE Dimitri - %s',
    default: 'PAPE Dimitri - Portfolio',
  },
  description: "Portfolio de PAPE Dimitri.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={poppins.className}>
      <body>
        <Navbar />
        <PageLoadEffects />
        <main> {children} </main>
        <Footer />
      </body>
    </html>

  );
}
