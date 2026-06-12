"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import content from "@/content/content";
import TypingAnimation from "../ui/typingText";

const LogoCloud = () => {

  // Different sets of company logos that cycle through
  const logoSets = [
    [
      { name: "Clinics", logo: content.LogoCloud.l1 },
      { name: "Hospitals", logo: content.LogoCloud.l2 },
      { name: "Solo Doctors", logo: content.LogoCloud.l3 },
      { name: "Reception Teams", logo: content.LogoCloud.l4 },
      { name: "Care Coordinators", logo: content.LogoCloud.l5 },
    ],
    [
      { name: "Patient Records", logo: content.LogoCloud.l6 },
      { name: "Appointments", logo: content.LogoCloud.l7 },
      { name: "Prescriptions", logo: content.LogoCloud.l8 },
      { name: "Lab Requests", logo: content.LogoCloud.l9 },
      { name: "Follow-ups", logo: content.LogoCloud.l10 },
    ],
    [
      { name: "Pharmacies", logo: content.LogoCloud.l11 },
      { name: "Diagnostics", logo: content.LogoCloud.l12 },
      { name: "Specialists", logo: content.LogoCloud.l13 },
      { name: "Medical Staff", logo: content.LogoCloud.l14 },
      { name: "Patients", logo: content.LogoCloud.l15 },
    ],
  ];

  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSetIndex((prevIndex) => (prevIndex + 1) % logoSets.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [logoSets.length]);

  return (
    <div className="py-10 px-4 relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          {content.LogoCloud.title}
        </h2>
        <TypingAnimation className="text-accent-foregroundmb-8 max-w-2xl mx-auto">
          {content.LogoCloud.description}
        </TypingAnimation>

        {/* Logo container with animation */}
        <div className="relative min-h-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSetIndex}
              className="absolute inset-0 flex justify-center items-center space-x-8 md:space-x-12 lg:space-x-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              {logoSets[currentSetIndex].map((company) => (
                <div
                  key={company.name}
                  className="text-accent-foreground text-lg md:text-xl font-semibold opacity-70 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                >
                  {company.logo}
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
