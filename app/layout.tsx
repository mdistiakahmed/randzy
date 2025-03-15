import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from 'next/head';
import Script from "next/script";
import GoogleAd from "@/components/GoogleAd";

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
      <head>
        {/* Google AdSense */}
        <Script
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9516918341435316"
          crossOrigin="anonymous"
        />
      </head>
      <GoogleAnalytics gaId="G-PQSLL3RMME" />
      <body
        className={`${geistSans.variable} ${geistMono.variable}  bg-[url('/snowflakes.png')] antialiased`}
      >
        <Navbar />
        <div className="flex justify-between">
          <div className="hidden md:block w-1/6 pt-16"> 
            <GoogleAd>  
              <ins className="adsbygoogle"
                style={{display:"block"}}
                data-ad-client="ca-pub-9516918341435316"
                data-ad-slot="5795252154"
                data-ad-format="auto"
                data-full-width-responsive="true">
              </ins>
            </GoogleAd>
          </div>
          <main className="flex-1 pt-16 md:mx-0"> {/* Adjusted main content */} {children} </main>
          <div className="hidden md:block w-1/6  pt-16"> 
            <GoogleAd>  
            <ins className="adsbygoogle"
              style={{display:"block"}}
              data-ad-client="ca-pub-9516918341435316"
              data-ad-slot="9056674468"
              data-ad-format="auto"
              data-full-width-responsive="true">
            </ins>
            </GoogleAd>
           </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
