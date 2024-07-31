import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Terms and Conditions | DardiBook',
  description: 'Review the terms and conditions for using DardiBook’s services. Understand your rights, obligations, and the limitations of our liability.',
};

export default function RootLayout({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}
