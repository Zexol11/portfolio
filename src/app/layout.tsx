import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Cursor from "@/components/ui/Cursor";
import StructuredData from "@/components/seo/StructuredData";
import GoogleAnalytics from "@/components/seo/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://edkenneth.vercel.app"), // Updated to actual domain
  title: {
    default: "Ed Kenneth — Full-Stack Software Engineer",
    template: "%s | Ed Kenneth",
  },
  description:
    "Full-Stack Software Engineer with 3+ years of experience building scalable web applications with React, ASP.NET, and TypeScript.",
  keywords: [
    "Ed Kenneth",
    "Full-Stack Developer",
    "Software Engineer",
    "React Developer",
    "TypeScript Expert",
    "ASP.NET Core",
    "Web Development Portfolio",
    "Next.js Developer",
    "Tailwind CSS",
  ],
  authors: [{ name: "Ed Kenneth", url: "https://edkenneth.vercel.app" }],
  creator: "Ed Kenneth",
  publisher: "Ed Kenneth",
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
  openGraph: {
    title: "Ed Kenneth — Full-Stack Software Engineer",
    description: "Full-Stack Software Engineer with 3+ years of experience building scalable web applications.",
    url: "https://edkenneth.vercel.app",
    siteName: "Ed Kenneth Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ed Kenneth — Full-Stack Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ed Kenneth — Full-Stack Software Engineer",
    description: "Full-Stack Software Engineer with 3+ years of experience building scalable web applications.",
    images: ["/og-image.png"],
    creator: "@edkenneth", 
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <StructuredData />
        <Cursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
