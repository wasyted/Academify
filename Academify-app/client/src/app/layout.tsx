import type { Metadata } from "next";
import { Nunito_Sans } from 'next/font/google'
import './globals.css'

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Academify: Learn online now",
  description: "Academify: Learn online now",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 👇 Attach font to global JSX node
    <html lang="en" className={nunitoSans.className}>
      <body className="aliased">{children}</body>
    </html>
  );
}

// src/app/layout.js



