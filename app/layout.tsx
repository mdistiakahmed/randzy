import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://randzy.com"),
  title: "Randzy | Ultimate Random Tools Collection",
  description:
    "Discover a comprehensive suite of random tools for decision-making, team building, and fun. Generate random names, numbers, teams, and more with our interactive web application.",
  keywords: [
    "random tools",
    "decision making",
    "team generator",
    "random name picker",
    "online randomization",
    "fair selection",
    "interactive tools",
    "web utilities",
  ],
  other: {
    "google-site-verification": "2qBbxSReKB4tdytzvsFkyqJuk22Ry6lh8C5_VMJ08yI",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://randzy.com",
    title: "Randzy: Your Ultimate Random Tools Platform",
    description:
      "Explore a diverse collection of random tools designed to make decisions easier, fairer, and more fun.",
    images: [
      {
        url: "/main-cover.png",
        width: 1200,
        height: 630,
        alt: "Randzy Random Tools Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Randzy: Random Tools for Every Occasion",
    description:
      "Discover interactive random tools for team building, decision making, and more.",
    images: ["/main-cover.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-PQSLL3RMME" />
      <body
        className={`${geistSans.variable} ${geistMono.variable}  bg-[url('/snowflakes.png')] antialiased`}
      >
        <Navbar />
        <main className="flex-1 pt-16 md:mx-[14vw]">
          {" "}
          {/* Add top padding to account for fixed navbar */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
