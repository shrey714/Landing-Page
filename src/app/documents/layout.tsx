import { ReactNode } from "react";
import HeaderDocument from "@/components/HeaderDocument";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DardiBook-Dashboard",
  description: "App to help doctors to track their patient",
};

export default function RootLayout({ children }: { children?: ReactNode }) {


  return (
    <div className="pt-24 min-h-dvh bg-gray-300">
      <HeaderDocument />
      {children}
    </div>
  );
};

