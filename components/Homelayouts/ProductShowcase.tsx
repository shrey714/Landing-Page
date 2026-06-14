"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import content from "@/content/content";
import TypingAnimation from "../ui/typingText";
import Link from "next/link";

export default function ProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "/Registrations.jpg", alt: "Registrations" },
    { src: "/Patients.jpg", alt: "Patients" },
    { src: "/Admissions.jpg", alt: "Admissions" },
    { src: "/Prescriptions.jpg", alt: "Prescriptions" },
    { src: "/Bills.jpg", alt: "Billing" },
  ];

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500); // 3 seconds interval

    return () => clearInterval(interval);
  }, [images.length]);

  const getStyles = (index: number) => {
    let diff = (index - currentIndex) % images.length;
    // Handle wrapping for infinite loop
    if (diff > Math.floor(images.length / 2)) {
      diff -= images.length;
    } else if (diff < -Math.floor(images.length / 2)) {
      diff += images.length;
    }

    let translateX = "-50%";
    let scale = 1;
    let opacity = 1;
    let zIndex = 30;

    if (diff === 0) {
      translateX = "-50%";
      scale = 1;
      opacity = 1;
      zIndex = 30;
    } else if (diff === -1) {
      translateX = "calc(-50% - 105%)";
      scale = 0.85;
      opacity = 0.6;
      zIndex = 20;
    } else if (diff === 1) {
      translateX = "calc(-50% + 105%)";
      scale = 0.85;
      opacity = 0.6;
      zIndex = 20;
    } else if (diff < -1) {
      translateX = "calc(-50% - 200%)";
      scale = 0.5;
      opacity = 0;
      zIndex = 10;
    } else if (diff > 1) {
      translateX = "calc(-50% + 200%)";
      scale = 0.5;
      opacity = 0;
      zIndex = 10;
    }

    return {
      transform: `translate(${translateX}, -50%) scale(${scale})`,
      opacity,
      zIndex,
      pointerEvents: Math.abs(diff) > 1 ? "none" : "auto",
    } as React.CSSProperties;
  };

  return (
    <section className="relative py-20 min-[900px]:py-32 overflow-hidden" id="product-showcase">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-stretch lg:h-150">


          <div className="items-start gap-y-8 w-full lg:w-[38%]">
            <section className="grid gap-y-6 tracking-[0.2px] scroll-mt-27">
              <header className="grid gap-y-6 max-w-240 grid-cols-[minmax(0,1fr)] pr-4 min-[600px]:pr-8 pl-4">
                <div className="inline-flex w-fit items-center gap-3 px-4 py-2 rounded-full text-sm font-medium border-2 border-[#635bff] bg-[#635bff] dark:bg-[#635bff96] text-white">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6f68ff]"></span>
                  {content.ProductShowcase.title}
                </div>

                <h1 className="relative tracking-[-0.2px] wrap-break-word text-4xl md:text-5xl font-extrabold leading-tight">
                  {content.ProductShowcase.subtitle}
                </h1>
              </header>

              <div className="text-accent-foreground font-light text-lg leading-[1.555555556] max-w-240 pr-4 min-[600px]:pr-8 pl-4">
                <TypingAnimation>
                  {content.ProductShowcase.description}
                </TypingAnimation>
              </div>

              <footer className="px-4">
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="rounded-full px-6 py-4 text-base"
                  asChild
                >
                  <Link href="#demo" aria-label="Request a demo of DardiBook">
                    <span>Get Started</span> <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </Button>
              </footer>
            </section>
          </div>


          {/* Left Text Content */}
          {/* <div className="w-full lg:w-[38%] flex flex-col items-start pr-4 sm:pr-6 lg:pr-0">
            <div className="pt-4 lg:pt-8 pr-4 min-[600px]:pr-8 pl-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm font-medium mb-8 border-2 border-[#635bff] bg-[#635bff] dark:bg-[#635bff96] text-white">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6f68ff]"></span>
                {content.ProductShowcase.title}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-[-0.02em] wrap-break-word mb-6">
                {content.ProductShowcase.subtitle}
              </h1>

              <TypingAnimation className="font-light text-lg leading-[1.555555556] text-accent-foreground max-w-md">
                {content.ProductShowcase.description}
              </TypingAnimation>
            </div>

            <Button asChild size="lg" className="mt-10 px-6 py-5 rounded-full text-base h-9 border-2 border-[#635bff] bg-[#635bff] dark:bg-[#635bff96] text-white hover:bg-[#635bff96] dark:hover:bg-[#635bff] shadow-none" variant={"default"}>
              <Link href="#demo" aria-label="Request a demo of DardiBook">
                <span>Get Started</span> <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Button>
          </div> */}

          {/* Right Carousel Content */}
          <div className="w-full lg:w-[62%] flex flex-col justify-between relative min-h-112.5">

            {/* Carousel Track */}
            <div className="relative w-full grow overflow-hidden flex items-center justify-center pt-4 pb-8">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  style={getStyles(idx)}
                  className="absolute left-1/2 top-1/2 transition-all duration-500 ease-in-out cursor-pointer"
                >
                  <div className="relative w-[32vw] sm:w-50 md:w-60 lg:w-55 xl:w-65 h-[48vw] sm:h-75 md:h-90 lg:h-85 xl:h-100 rounded-lg md:rounded-3xl shadow-lg overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center lg:justify-end gap-3 pr-4 lg:pr-12 pb-4 lg:pb-8 z-40 relative">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={"h-2.5 rounded-full transition-all duration-300 " + (idx === currentIndex ? "bg-foreground w-6" : "bg-foreground/20 w-2.5 hover:bg-foreground/40")}
                  aria-label={"Go to slide " + (idx + 1)}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
