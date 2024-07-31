import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Us | DardiBook',
  description: 'Get in touch with DardiBook for support, inquiries, or feedback. Find our contact details including address, phone numbers, and email.',
};

export default function RootLayout({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}
