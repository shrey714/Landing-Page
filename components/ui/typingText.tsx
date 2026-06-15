"use client";

import React from "react";
import { motion } from "motion/react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

interface TypingAnimationProps {
  children: string;
  className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ children, className }) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return (
      <p className={className} aria-label={children}>
        {children}
      </p>
    );
  }

  return (
    <motion.p
      className={className}
      aria-label={children}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.01 } },
        hidden: {},
      }}
    >
      <span aria-hidden="true">
        {children.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            {char}
          </motion.span>
        ))}
      </span>
    </motion.p>
  );
};

export default TypingAnimation;
