"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  index: number;
  children?: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  color,
  index,
  children,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, delay: index * 0.1 }}
      className="group relative rounded-2xl border border-white/10 bg-[#061233] p-6 min-h-[260px] overflow-hidden transition-all duration-300 z-10"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${color}50`;
        e.currentTarget.style.boxShadow = `0 10px 30px -10px ${color}40`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Subtle background glow */}
      <div
        className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{ backgroundColor: color }}
      ></div>

      {/* Large faint step number watermark */}
      <div className="absolute top-0 -right-3 text-[120px] font-black text-white/[0.02] leading-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:text-white/[0.04]">
        {index + 1}
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-6">
          <div
            className="grid h-14 w-14 place-items-center rounded-xl shadow-lg border border-white/10 backdrop-blur-md transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${color}20`, color: color }}
          >
            <Icon size={26} />
          </div>
          {/* You might want to pass the step number as a prop, or keep it generic */}
          <span className="text-xs font-bold tracking-widest text-gray-500 group-hover:text-white transition-colors duration-300">
            STEP 0{index + 1}
          </span>
        </div>

        <h3 className="mt-2 text-white text-xl font-bold leading-snug group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <p className="mt-3 text-gray-400 font-light text-sm leading-[1.6] group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>

        {children}
      </div>
    </motion.article>
  );
};

export default FeatureCard;