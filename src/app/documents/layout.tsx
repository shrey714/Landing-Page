import { ReactNode } from "react";
import FooterDocuments from "@/components/FooterDocuments";
import dynamic from "next/dynamic";

export default function RootLayout({ children }: { children?: ReactNode }) {
  const Header = dynamic(() => import("@/components/HeaderDocument"), {
    ssr: false, // This ensures the component is not SSR'd
  });
  return (
    <div className="pt-24 min-h-dvh bg-gray-300">
      <Header />
      {children}
      <FooterDocuments />
    </div>
  );
}
