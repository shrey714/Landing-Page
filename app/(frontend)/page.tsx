import Footer from "@/components/Homelayouts/Footer";
import Hero from "@/components/Homelayouts/Hero";
import { Navbar } from "@/components/Homelayouts/Navbar";
import MarqueFrame from "@/components/subs/MarqueFrame";

export default async function IndexPage() {
  return (
    <main
      className="min-h-svh w-full overflow-x-hidden"
      style={{
        background:
          "linear-gradient(160deg, #020617 0%, #081C4F 35%, #081C4F 75%, #020617 100%)",
      }}
    >
      <MarqueFrame />

      <Navbar />
      <Hero />
      <div className="h-[9000px] relative w-full">shrey</div>
      <Footer />
    </main>
  );
}
