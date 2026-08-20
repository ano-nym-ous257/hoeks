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
  metadataBase: new URL("https://www.gamefreakdev.xyz"),

  title: {
    default:
      "Gamefreak - Network Engineer | Cybersecurity | AWS Cloud Infrastructure",
    template: "%s | Gamefreak Engineering",
  },

  description:
    "Network and cloud engineer specializing in secure systems, AWS architecture, cybersecurity and reliable infrastructure for remote teams.",

  keywords: [
    "Gamefreak",
    "AWS Network Engineer",
    "Cybersecurity Engineer",
    "Secure Systems Architect",
    "Infrastructure Engineer",
    "AWS Cloud Infrastructure",
    "Network Engineering",
    "Remote Engineer",
  ],

  authors: [
    {
      name: "Gamefreak",
      url: "https://www.gamefreakdev.xyz",
    },
  ],

  creator: "Gamefreak",
  publisher: "Gamefreak",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.gamefreakdev.xyz",
    siteName: "Gamefreak Developer Portfolio",
    title: "Gamefreak | Network Engineering, Cybersecurity & AWS",
    description:
      "Secure systems, AWS cloud infrastructure, cybersecurity and network engineering for modern teams.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Gamefreak Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gamefreak | Network Engineering, Cybersecurity & AWS",
    description:
      "Secure systems, AWS cloud infrastructure, cybersecurity and network engineering for modern teams.",
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
