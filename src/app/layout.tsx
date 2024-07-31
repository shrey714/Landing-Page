import type { Metadata } from "next";
import "./globals.css";
import { Alegreya_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "DardiBook",
  description:
    "DardiBook is a comprehensive patient management system designed for doctors to efficiently manage and organize patient data, appointments, and medical histories. Enhance your medical practice with our user-friendly interface and advanced features.",
  icons: {
    icon: "/Favicon.svg", // /public path
  },
};
const manrope = Alegreya_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.className}>
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
