import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata : Metadata = {
  title: "About Us | DardiBook",
  description:
    "Learn more about DardiBook, our mission, our team, and our commitment to improving healthcare through innovative technology.",
};

export default function RootLayout({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}
