import "./globals.scss";
import { ReactNode } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";

const avenir = localFont({
  src: [
    {
      path: "../public/fonts/avenir-next/AvenirNext-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/avenir-next/AvenirNext-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/avenir-next/AvenirNext-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={avenir.className}>{children}</body>
    </html>
  );
}
