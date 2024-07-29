import HeroSection from "@/components/landingPage/HeroSection";
import Footer from "@/components/landingPage/Footer";
import Header from "@/components/landingPage/Header";
import { MarqueeSection } from "@/components/landingPage/MarqueeSection";
import FeaturesSection from "@/components/landingPage/FeaturesSection";
import ImageWithTextSection from "@/components/landingPage/ImageWithTextSection";
import FAQSection from "@/components/landingPage/FAQSection";
import GetStartedBanner from "@/components/landingPage/GetStartedBanner";
import MiddleBanner from "@/components/landingPage/MiddleBanner";

export default function Home() {
  return (
    <main className="min-h-dvh w-full">
      <Header />
      <HeroSection />
      <MarqueeSection />
      <FeaturesSection />
      <MiddleBanner />
      <ImageWithTextSection />
      <GetStartedBanner />
      <FAQSection />
      <Footer />
    </main>
  );
}
