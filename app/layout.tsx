import type { Metadata } from "next";
import {Geist, Geist_Mono } from "next/font/google";
import { Titan_One } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const titanOne = Titan_One({
  variable: "--font-titan-one",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Vision Sécurité",
    default: "Vision Sécurité – Installation Caméras de Sécurité",
  },
  description:
    "Installation professionnelle de caméras de sécurité pour particuliers et entreprises. Systèmes CCTV HD/4K, surveillance à distance, support 24/7. Devis gratuit.",
  keywords:
    "caméra de sécurité, vidéosurveillance, installation caméra, CCTV, sécurité maison, sécurité entreprise, alarme vidéo, surveillance à distance",
  authors: [{ name: "Vision Sécurité" }],
  creator: "Vision Sécurité",
  publisher: "Vision Sécurité",
  metadataBase: new URL("https://https://camx.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://https://camx.vercel.app/",
    siteName: "Vision Sécurité",
    title: "Vision Sécurité – Caméras de Sécurité Professionnelles",
    description:
      "Installation rapide et garantie de systèmes de vidéosurveillance HD/4K pour votre maison ou entreprise.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vision Sécurité – Caméras de surveillance professionnelles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision Sécurité – Installation Caméras de Sécurité",
    description: "Systèmes CCTV professionnels, installation garantie, support 24/7.",
    images: ["/og-image.png"],
    creator: "@visionsecurite",
  },
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
  verification: {
    google: "your-google-site-verification",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Preload fonts */}
        <link
          rel="preload"
          href="/fonts/titan-one.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>

      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable} 
          ${titanOne.variable} 
          antialiased bg-(--background) text-(--2-sec)
          font-sans
        `}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}