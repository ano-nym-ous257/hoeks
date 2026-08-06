import type { Metadata, Viewport } from "next";
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
    default: "Alex Agyei | IT Support, Cybersecurity, AWS & Networking",
    template: "%s | Alex Agyei",
  },

  description:
    "Portfolio of Alex Agyei, an IT support, cybersecurity, AWS cloud and networking professional building secure systems, reliable infrastructure and modern software.",

  keywords: [
    "Alex Agyei",
    "IT Support",
    "Cybersecurity",
    "AWS Cloud",
    "Networking",
    "Technical Support",
    "Cloud Support",
    "Next.js Developer",
    "Remote Internship",
    "Ghana",
  ],

  authors: [
    {
      name: "Alex Agyei",
      url: "https://gamefreakdev.xyz",
    },
  ],

  creator: "Alex Agyei",
  publisher: "Alex Agyei",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "https://gamefreakdev.xyz",
    siteName: "Gamefreak Developer Portfolio",
    title: "Alex Agyei | Building Secure Systems",
    description:
      "IT Support, Cybersecurity, AWS Cloud, Networking and Software Engineering portfolio.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Alex Agyei — Gamefreak Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Alex Agyei | Building Secure Systems",
    description:
      "IT Support, Cybersecurity, AWS Cloud, Networking and Software Engineering portfolio.",
    images: ["/opengraph-image.png"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
  },

  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07080b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
