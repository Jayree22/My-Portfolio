import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: "Jerry Udochu's Portfolio",
  description: "My personal portfolio website",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={montserrat.className}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
