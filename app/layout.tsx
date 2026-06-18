import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Essence Beauty & Wellness",
  description:
    "Luxury beauty services, body contouring, and professional training in Lufkin, Texas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${montserrat.variable} min-h-full`}
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
