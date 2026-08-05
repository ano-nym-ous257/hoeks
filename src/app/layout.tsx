import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gamefreakdev.xyz"),
  title: {
    default: "Gamefreak — Developer and Builder",
    template: "%s | Gamefreak",
  },
  description:
    "Gamefreak is a developer based in Accra, Ghana, building thoughtful web products, intelligent software and emerging technology experiences.",
  keywords: [
    "Gamefreak",
    "developer",
    "software engineer",
    "web developer",
    "Next.js developer",
    "Ghana developer",
    "Accra developer",
    "portfolio",
  ],
  openGraph: {
    title: "Gamefreak — Developer and Builder",
    description:
      "Building thoughtful web products, intelligent software and emerging technology experiences.",
    url: "https://gamefreakdev.xyz",
    siteName: "Gamefreak",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
