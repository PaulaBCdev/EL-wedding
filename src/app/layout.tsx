import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";
import { Toaster } from "sonner";
import Head from "next/head";

const breathing = localFont({
  src: "../../public/fonts/Breathing.ttf",
  variable: "--font-breathing",
  display: "swap",
});

const catchy = localFont({
  src: "../../public/fonts/CatchyMager.otf",
  variable: "--font-catchy",
  display: "swap",
});

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert",
  display: "swap",
});

export const metadata: Metadata = {
  title: "La boda del año",
  description: "Save de date: 20-02-2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${catchy.variable} ${breathing.variable} ${albertSans.variable} antialiased`}
      >
        <Toaster position="top-right" />
        {children}
        <Footer />

        <script src="../../node_modules/flyonui/flyonui.js"></script>
      </body>
    </html>
  );
}
