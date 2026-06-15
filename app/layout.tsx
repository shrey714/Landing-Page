import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/wrappers/theme-provider";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "DardiBook",
  alternates: {
    canonical: "https://dardibook.in",
    languages: {
      "en-US": "https://dardibook.in",
      // Add other languages as needed
    },
    types: {
      "application/rss+xml": "https://dardibook.in/rss",
    },
  },
  metadataBase: new URL("https://dardibook.in"),
  description:
    "DardiBook is a healthcare practice management platform for doctors and clinic teams to manage appointments, patient records, prescriptions, lab requests, follow-ups, and daily care workflows.",
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

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang={"en"} className={outfit.className} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#081C4F" />
      </head>
      <body className="overflow-x-hidden antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a href="#main" className="skip-link sr-only">
            Skip to content
          </a>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
