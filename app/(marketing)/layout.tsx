import type { Metadata } from "next";
import { Navbar } from "@/components/Homelayouts/Navbar";
import Footer from "@/components/Homelayouts/Footer";

export const metadata: Metadata = {
  openGraph: {
    siteName: "DardiBook",
  },
  twitter: {
    site: "@dardibook",
  },
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex min-h-screen flex-col bg-diagonal-hatch">
    <Navbar />

    <main className="flex-1 mt-20">
      <article className="prose dark:prose-invert prose-blue max-w-none">
        {children}
      </article>
    </main>

    <Footer />
  </div>
}
