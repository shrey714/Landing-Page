"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const LogoCloud = () => {
  // Different sets of company logos that cycle through
  const logoSets = [
    [
      { name: "OpenAI", logo: "OpenAI" },
      { name: "Bolt", logo: "Bolt" },
      { name: "Cisco", logo: "Cisco" },
      { name: "Hulu", logo: "Hulu" },
      { name: "Spotify", logo: "Spotify" },
    ],
    [
      { name: "Stripe", logo: "Stripe" },
      { name: "PayPal", logo: "PayPal" },
      { name: "Leap", logo: "Leap" },
      { name: "Beacon", logo: "Beacon" },
      { name: "Vercel", logo: "Vercel" },
    ],
    [
      { name: "Prime Video", logo: "Prime Video" },
      { name: "Supabase", logo: "Supabase" },
      { name: "GitHub", logo: "GitHub" },
      { name: "Discord", logo: "Discord" },
      { name: "Notion", logo: "Notion" },
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
    <div className="pt-10 pb-28 px-4 relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Trusted by Healthcare Professionals
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          DardiBook supports clinics, hospitals, and solo practitioners.
          <br />
          Designed for modern medical workflows.
        </p>

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
                  className="text-white text-lg md:text-xl font-semibold opacity-70 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
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
