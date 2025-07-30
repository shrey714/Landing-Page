"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MarqueFrame = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const { scrollYProgress } = useScroll();

  // Show at top (0-0.1) and bottom (0.9-1), hide in middle
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.92, 1],
    [0.8, 0, 0, 0.8]
  );

  useEffect(() => {
    const timer = setTimeout(() => setIframeLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="w-full h-svh fixed top-0 pointer-events-none transition-opacity"
      style={{
        background:
          "linear-gradient(160deg, #020617 0%, #081C4F 35%, #0B3B7B 70%, #2A7FD0 100%)",
        opacity: opacity,
      }}
    >
      <iframe
        src="https://db-marquee-frame.vercel.app"
        style={{ opacity: iframeLoaded ? 1 : 0 }}
        width="100%"
        height="100%"
        title="visual"
        onLoad={() => setIframeLoaded(true)}
        className="transition-opacity duration-500"
      ></iframe>
    </motion.div>
  );
};
export default MarqueFrame;