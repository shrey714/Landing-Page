import { ReactNode } from "react";
import HeaderDocument from "@/components/HeaderDocument";
import FooterDocuments from "@/components/FooterDocuments";

export default function RootLayout({ children }: { children?: ReactNode }) {
  return (
    <div className="pt-24 min-h-dvh bg-gray-300">
      <HeaderDocument />
      {children}
      <FooterDocuments />
    </div>
  );
}
