import CallToAction from "@/components/Homelayouts/CallToAction";
import CardCarousel from "@/components/Homelayouts/CardCarousel";
import FeaturesSquence from "@/components/Homelayouts/FeaturesSquence";
import Footer from "@/components/Homelayouts/Footer";
import { StickyScrollReveal } from "@/components/Homelayouts/Front-Door";
import GridCarousel from "@/components/Homelayouts/GridCarousel";
import Hero from "@/components/Homelayouts/Hero";
import LogoCloud from "@/components/Homelayouts/Logo-Cloud";
import { Navbar } from "@/components/Homelayouts/Navbar";
import TrustProof from "@/components/Homelayouts/TrustProof";
import Workflow from "@/components/Homelayouts/Workflow";
import MarqueFrame from "@/components/subs/MarqueFrame";

export default async function IndexPage() {
  return (
    <main id="main" className="relative min-h-screen overflow-x-hidden min-[900px]:overflow-x-visible w-full bg-[#081C4F]">
      {process.env.NEXT_PUBLIC_NODE_ENV === "development" && <Section_Masked />}
      <Navbar />
      <MarqueFrame />
      <Hero />
      <LogoCloud />
      <Workflow />
      <StickyScrollReveal />
      <CardCarousel />
      <TrustProof />
      <FeaturesSquence />
      <GridCarousel />
      <CallToAction />
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
            <div className="bg-[rgba(255,255,255,0.1)] w-px"></div>
            <div className="w-px bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.1)_50%,transparent_0,transparent)] bg-size-[1px_8px]"></div>
            <div className="w-px bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.1)_50%,transparent_0,transparent)] bg-size-[1px_8px]"></div>
            <div className="w-px bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.1)_50%,transparent_0,transparent)] bg-size-[1px_8px]"></div>
            <div className="w-px bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.1)_50%,transparent_0,transparent)] bg-size-[1px_8px]"></div>
            <div className="w-px bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.1)_50%,transparent_0,transparent)] bg-size-[1px_8px]"></div>
            <div className="bg-[rgba(255,255,255,0.1)] w-px absolute top-0 right-0 h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
