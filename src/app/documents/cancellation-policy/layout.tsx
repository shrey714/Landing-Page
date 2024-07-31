import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata : Metadata = {
  title: 'Cancellation Policy | DardiBook',
  description: 'Review DardiBook’s cancellation policy, including details on appointment cancellations, late cancellations, no-shows, and our refund policy.',
};

export default function RootLayout({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}
