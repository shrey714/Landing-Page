import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "DardiBook",
  description:
    "DardiBook is a comprehensive patient management system designed for doctors to efficiently manage and organize patient data, appointments, and medical histories. Enhance your medical practice with our user-friendly interface and advanced features.",
  alternates: {
    canonical: "https://dardibook.in",
  },
  icons: {
    icon: "/favicon.ico",
    apple: [
      { url: "/apple/apple-touch-icon.png" },
      { url: "/apple/apple-touch-icon-57x57.png", sizes: "57x57" },
      { url: "/apple/apple-touch-icon-72x72.png", sizes: "72x72" },
      { url: "/apple/apple-touch-icon-76x76.png", sizes: "76x76" },
      { url: "/apple/apple-touch-icon-114x114.png", sizes: "114x114" },
      { url: "/apple/apple-touch-icon-120x120.png", sizes: "120x120" },
      { url: "/apple/apple-touch-icon-144x144.png", sizes: "144x144" },
      { url: "/apple/apple-touch-icon-152x152.png", sizes: "152x152" },
      { url: "/apple/apple-touch-icon-180x180.png", sizes: "180x180" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Welcome to dardibook",
    description:
      "Transform Your Medical Practice with DardiBook: The Patient Management Solutionn",
    url: "https://dardibook.in",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "open graph image",
      },
    ],
    siteName: "DardiBook",
  },
};
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="bg-white" suppressHydrationWarning={true}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
