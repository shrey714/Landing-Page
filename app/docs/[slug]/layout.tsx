import { Navbar } from "@/components/Homelayouts/Navbar";
import Footer from "@/components/Homelayouts/Footer";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /* Added bg-diagonal-hatch and a base bg color (bg-slate-50 / dark:bg-[#0a0a0a]) */
    <div className="flex min-h-screen flex-col  bg-diagonal-hatch">
      
      <Navbar />
      
      <main className="flex-1 mt-[80px]">
        <article className="prose dark:prose-invert prose-blue max-w-none">
          {children}
        </article>
      </main>

      <Footer />
    </div>
  );
}
