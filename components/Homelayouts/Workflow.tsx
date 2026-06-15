"use client";

import {
  ClipboardPlusIcon,
  FileTextIcon,
  FlaskConicalIcon,
  PillIcon,
  UserRoundCheckIcon,
} from "lucide-react";
import content from "@/content/content";
import { motion } from "motion/react";
import TypingAnimation from "../ui/typingText";

const Workflow = () => {

  const workflowSteps = content.Workflow.steps;
  const workflowIcons = [UserRoundCheckIcon, ClipboardPlusIcon, PillIcon, FlaskConicalIcon, FileTextIcon];
  const workflowColors = ["#00D4FF", "#27C17B", "#F2B84B", "#9B8CFF", "#F26D6D"];




  return (
    <section id="workflow" className="relative scroll-mt-28">
      <div className="relative z-1 flex justify-center">
        <div className="w-full max-w-7xl mx-4">
          <div className="py-10 md:py-28">
            <div className="grid gap-y-12">
              <section className="grid gap-y-6 max-w-3xl px-4">
                <h2 className="text-[#00d4ff] text-3xl md:text-4xl font-semibold leading-tight">
                  {content.Workflow.title}
                </h2>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                  {content.Workflow.subtitle}
                </h1>
                <TypingAnimation
                  className="text-accent-foreground font-light text-lg leading-[1.555555556]"
                >
                  {content.Workflow.description}
                </TypingAnimation>
              </section>

              <div className="relative grid gap-6 px-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                {workflowSteps.map((step, index) => {
                  const Icon = workflowIcons[index];
                  const color = workflowColors[index];

                  return (
                    <motion.article
                      key={step.title}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="group shadow-md relative rounded-2xl border border-white/10 bg-[#061233] p-6 md:min-h-65 overflow-hidden transition-all duration-300 z-10"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = `${color}50`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                      }}
                    >
                      <div
                        className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                        style={{ backgroundColor: color }}
                      ></div>

                      <div className="absolute top-0 -right-3 text-[120px] font-black text-white/2 leading-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:text-white/4">
                        {index + 1}
                      </div>

                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-6">
                          <div
                            className="grid h-14 w-14 place-items-center rounded-xl shadow-lg border border-white/10 backdrop-blur-md transition-transform duration-300"
                            style={{ backgroundColor: `${color}20`, color }}
                          >
                            <Icon size={26} />
                          </div>
                        </div>

                        <h3 className="mt-2 text-white text-xl font-bold leading-snug group-hover:text-white transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-gray-400 font-light text-sm leading-[1.6] group-hover:text-gray-300 transition-colors duration-300">
                          {step.desc}
                        </p>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
