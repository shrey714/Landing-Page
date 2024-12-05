import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Privacy Policy | DardiBook',
  description: 'Understand how DardiBook collects, uses, and protects your personal information. Learn about our data privacy practices and your rights.',
};

export default function RootLayout({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}
