import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ed Kenneth Garate — Full-Stack Software Engineer",
  description:
    "Portfolio of Ed Kenneth Garate, a Full-Stack Software Engineer with 3+ years building enterprise web applications with React, ASP.NET, and TypeScript.",
  keywords: ["full-stack", "software engineer", "portfolio", "react", "nextjs", "asp.net", "typescript"],
  openGraph: {
    title: "Ed Kenneth Garate — Full-Stack Software Engineer",
    description: "3+ years building enterprise web apps with React, ASP.NET, and TypeScript.",
    type: "website",
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
