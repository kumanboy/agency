import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import React from "react";


const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://devus.uz'),
  title: 'Dasturlashga oid maqolalar va dars toplamlar',
  description:
      'Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
  authors: [{name: 'Husan Davronov', url: 'https://t.me/Coder_davronov'}],
  icons: {icon: '/favicon.jpg'},
  keywords:
      "raqamli avlod, javascript, reactjs, vuejs, javascript darslari, reactjs darslari, vuejs darslari, dasturlash darslari, o'zbek tilida dasturlash, reactjs o'zbek tilida, reactjs darslari o'zbek tilida, javascript darslari, javascript darslari o'zbek tilida, dasturash darslari o'zbek tilida, dasturlashni o'rganish, dasturlash, IT loyihalar o'zbek tilida",
  openGraph: {
    title: 'Next Blog dasturlashga oid maqolalar',
    description:
        'Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
    type: 'website',
    url: 'https://talimot.uz',
    locale: 'en_EN',
    images: 'https://us-east-1-shared-usea1-02.graphassets.com/cluhz35hg2tcy08licbj9djj2/clvng2vxy14u907lh5hr5wn41',
    countryName: 'Uzbekistan',
    siteName: 'Next Blog',
    emails: 'info@next.edu',
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
