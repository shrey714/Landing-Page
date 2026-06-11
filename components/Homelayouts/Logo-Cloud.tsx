"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const LogoCloud = () => {
  // Different sets of company logos that cycle through
  const logoSets = [
    [
      { name: "Clinics", logo: "Clinics" },
      { name: "Hospitals", logo: "Hospitals" },
      { name: "Solo Doctors", logo: "Solo Doctors" },
      { name: "Reception Teams", logo: "Reception Teams" },
      { name: "Care Coordinators", logo: "Care Coordinators" },
    ],
    [
      { name: "Patient Records", logo: "Patient Records" },
      { name: "Appointments", logo: "Appointments" },
      { name: "Prescriptions", logo: "Prescriptions" },
      { name: "Lab Requests", logo: "Lab Requests" },
      { name: "Follow-ups", logo: "Follow-ups" },
    ],
    [
      { name: "Pharmacies", logo: "Pharmacies" },
      { name: "Diagnostics", logo: "Diagnostics" },
      { name: "Specialists", logo: "Specialists" },
      { name: "Medical Staff", logo: "Medical Staff" },
      { name: "Patients", logo: "Patients" },
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
          Trusted by Healthcare Professionals
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          DardiBook supports clinics, hospitals, pharmacies, diagnostics, and solo practitioners.
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
