import type { Metadata } from "next";
import { Merriweather, Lato } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  variable: "--font-merriweather",
  subsets: ["latin"],
});

const lato = Lato({
  weight: ['300', '400', '700', '900'],
  variable: "--font-lato",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jen Mak",
  description: "Jen Mak's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${lato.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
