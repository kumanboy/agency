import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import React from "react";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devus | Code & more code",
  description: "Devus agentligi - bu innovatsion va ijodiy IT xizmatlarini taqdim etuvchi etakchi texnologiya kompaniyasi.",
  keywords: ["Devus", "JavaScript", "web development", "coding", "devus studio"],
  openGraph: {
    title: "Devus | Code & more code",
    description: "Devus agentligi - bu innovatsion va ijodiy IT xizmatlarini taqdim etuvchi etakchi texnologiya kompaniyasi.",
    url: "https://your-website.com", // Replace with your actual site URL
    images: [
      {
        url: '/favicon.ico',
        width: 1200,
        height: 630,
        alt: 'Devus Logo',
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devus | Code & more code",
    description: "Grow your business with Bird, a design & development studio.",
    images: ['/favicon.ico'], // Use the same direct image URL
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={font.className}>
      {children}
      <Analytics />
      </body>
      </html>
  );
}
