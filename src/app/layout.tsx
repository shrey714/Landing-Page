import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "DardiBook",
  alternates: {
    canonical: "https://dardibook.in",
    languages: {
      "en-US": "https://dardibook.in/en-US",
      // Add other languages as needed
    },
    types: {
      "application/rss+xml": "https://dardibook.in/rss",
    },
  },
  metadataBase: new URL("https://dardibook.in"),
  description:
    "DardiBook is a comprehensive patient management system designed for doctors to efficiently manage and organize patient data, appointments, and medical histories. Enhance your medical practice with our user-friendly interface and advanced features.",
  icons: {
    icon: "/favicon.png",
  },
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
      <head></head>
      <body className="bg-white" suppressHydrationWarning={true}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
