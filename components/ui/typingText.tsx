"use client";

import React from "react";
import { motion } from "motion/react";

interface TypingAnimationProps {
  children: string;
  className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ children, className }) => {
  return (
    <motion.p
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.01 } },
        hidden: {},
      }}
    >
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
    </motion.p>
  );
};

export default TypingAnimation;