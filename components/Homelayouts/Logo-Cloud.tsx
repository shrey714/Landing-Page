"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import content from "@/content/content";
import TypingAnimation from "../ui/typingText";
import { useInView } from "@/lib/useInView";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const LogoCloud = () => {

  const logoSets = [
    content.LogoCloud.logos.slice(0, 5),
    content.LogoCloud.logos.slice(5, 10),
    content.LogoCloud.logos.slice(10),
  ];

  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [sectionRef, isInView] = useInView<HTMLDivElement>("0px");
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldCycle = isInView && !prefersReducedMotion;

  useEffect(() => {
    if (!shouldCycle) return;

    const interval = setInterval(() => {
      setCurrentSetIndex((prevIndex) => (prevIndex + 1) % logoSets.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [logoSets.length, shouldCycle]);

  return (
    <div ref={sectionRef} className="pb-10 md:py-10 px-4 relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          {content.LogoCloud.title}
        </h2>
        <TypingAnimation className="text-accent-foregroundmb-8 max-w-2xl mx-auto mb-4">
          {content.LogoCloud.description}
        </TypingAnimation>

        {/* Logo container with animation */}
        <div className="relative min-h-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSetIndex}
              className="absolute inset-0 flex justify-center items-center flex-wrap space-x-8 md:space-x-12 lg:space-x-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              {logoSets[currentSetIndex].map((logo) => (
                <div
                  key={logo}
                  className="text-accent-foreground text-lg md:text-xl font-semibold opacity-70 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                >
                  {logo}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
