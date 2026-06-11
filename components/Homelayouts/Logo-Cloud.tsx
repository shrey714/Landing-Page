"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

const LogoCloud = () => {
  const t = useTranslations("LogoCloud");

  // Different sets of company logos that cycle through
  const logoSets = [
    [
      { name: "Clinics", logo: t("l1") },
      { name: "Hospitals", logo: t("l2") },
      { name: "Solo Doctors", logo: t("l3") },
      { name: "Reception Teams", logo: t("l4") },
      { name: "Care Coordinators", logo: t("l5") },
    ],
    [
      { name: "Patient Records", logo: t("l6") },
      { name: "Appointments", logo: t("l7") },
      { name: "Prescriptions", logo: t("l8") },
      { name: "Lab Requests", logo: t("l9") },
      { name: "Follow-ups", logo: t("l10") },
    ],
    [
      { name: "Pharmacies", logo: t("l11") },
      { name: "Diagnostics", logo: t("l12") },
      { name: "Specialists", logo: t("l13") },
      { name: "Medical Staff", logo: t("l14") },
      { name: "Patients", logo: t("l15") },
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          {t("title")}
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          {t("description")}
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
