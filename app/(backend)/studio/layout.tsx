import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dardibook Studio",
  description: "Studio layout component for Dardibook application",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
