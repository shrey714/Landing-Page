import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pricing | DardiBook',
  description: 'Explore the various subscription plans offered by DardiBook. Find a plan that suits your needs and helps you streamline your healthcare management.',
};

export default function RootLayout({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}
