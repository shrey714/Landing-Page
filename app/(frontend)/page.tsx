import Footer from "@/components/Homelayouts/Footer";
import { StickyScrollReveal } from "@/components/Homelayouts/Front-Door";
import Hero from "@/components/Homelayouts/Hero";
import LogoCloud from "@/components/Homelayouts/Logo-Cloud";
import { Navbar } from "@/components/Homelayouts/Navbar";
import MarqueFrame from "@/components/subs/MarqueFrame";

export default async function IndexPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#081C4F]">
      {process.env.NEXT_PUBLIC_NODE_ENV === "development" && <Section_Masked />}
      <MarqueFrame />
      <Navbar />
      <Hero />
      <LogoCloud />
      <StickyScrollReveal />
      <div className="h-[5000px] relative w-full">shrey</div>
      <Footer />
    </main>
  );
}

const Section_Masked = () => {
  return (
    <div className="absolute w-full h-full overflow-visible">
      <div
        className="relative h-full max-h-none w-full top-0 left-0 overflow-hidden"
        style={{
          transformOrigin: "100% 0",
          transform: "skewY(0)",
        }}
      >
        <div className="absolute h-full w-full top-0 left-0 py-0 px-4 pointer-events-none">
          <div className="grid relative max-w-7xl grid-rows-1 grid-cols-2 sm:grid-cols-4 md:grid-cols-6 h-full mx-auto my-0">
            <div className="bg-[rgba(255,255,255,0.3)] w-[1px]"></div>
            <div className="w-[1px] bg-[linear-gradient(180deg,_rgba(255,255,255,0.3),_rgba(255,255,255,0.3)_50%,_transparent_0,_transparent)] bg-[length:1px_8px]"></div>
            <div className="w-[1px] bg-[linear-gradient(180deg,_rgba(255,255,255,0.3),_rgba(255,255,255,0.3)_50%,_transparent_0,_transparent)] bg-[length:1px_8px]"></div>
            <div className="w-[1px] bg-[linear-gradient(180deg,_rgba(255,255,255,0.3),_rgba(255,255,255,0.3)_50%,_transparent_0,_transparent)] bg-[length:1px_8px]"></div>
            <div className="w-[1px] bg-[linear-gradient(180deg,_rgba(255,255,255,0.3),_rgba(255,255,255,0.3)_50%,_transparent_0,_transparent)] bg-[length:1px_8px]"></div>
            <div className="w-[1px] bg-[linear-gradient(180deg,_rgba(255,255,255,0.3),_rgba(255,255,255,0.3)_50%,_transparent_0,_transparent)] bg-[length:1px_8px]"></div>
            <div className="bg-[rgba(255,255,255,0.3)] w-[1px] absolute top-0 right-0 h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
