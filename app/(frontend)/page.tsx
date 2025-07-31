import Footer from "@/components/Homelayouts/Footer";
import Hero from "@/components/Homelayouts/Hero";
import LogoCloud from "@/components/Homelayouts/Logo-Cloud";
import { Navbar } from "@/components/Homelayouts/Navbar";
import MarqueFrame from "@/components/subs/MarqueFrame";

export default async function IndexPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#081C4F]">
      <MarqueFrame />
      <Navbar />
      <Hero />
      <LogoCloud />
      <div className="h-[8000px] relative w-full">shrey</div>
      <Footer />
    </main>
  );
}
