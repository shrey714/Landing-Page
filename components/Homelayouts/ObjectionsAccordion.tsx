'use client';

import React, { useState } from 'react';
import content from "@/content/content";
import TypingAnimation from "../ui/typingText";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQTopic = {
  id: string;
  title: string;
  items: FAQItem[];
};

export default function ObjectionsAccordion() {
  const faqData: FAQTopic[] = content.FAQData;
  const [activeTopic, setActiveTopic] = useState<string>(faqData[0].id);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const currentTopicData = faqData.find((topic) => topic.id === activeTopic);

  return (
    <section id="faq" className="relative scroll-mt-28 py-20 min-[900px]:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Side: Meaningful Content & Topic Selector */}
          <div className="lg:w-1/3 flex flex-col">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4 tracking-[-0.02em]">
              {content.ObjectionsAccordion.title}
            </h2>
            <TypingAnimation className="text-accent-foreground font-light text-lg leading-[1.6] mb-8">
              {content.ObjectionsAccordion.description}
            </TypingAnimation>
            
            <div className="flex flex-col space-y-2">
              {faqData.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => {
                    setActiveTopic(topic.id);
                    setOpenQuestion(null); // Reset open question on topic change
                  }}
                  className={`text-left px-5 py-3 rounded-lg font-medium transition-all duration-300 border ${
                    activeTopic === topic.id
                      ? 'bg-[#00d4ff24] text-[#00d4ff] border-[#00d4ff]/30 shadow-[0_0_15px_rgba(0,212,255,0.15)]'
                      : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-gray-300'
                  }`}
                >
                  {topic.title}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: FAQs & Contact Us */}
          <div className="lg:w-2/3 flex flex-col">
            <div className="space-y-4 flex-grow">
              {currentTopicData?.items.map((faq, index) => {
                const isOpen = openQuestion === faq.question;
                return (
                  <div key={index} className="bg-[#061233] rounded-xl shadow-sm border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/20">
                    <button
                      onClick={() => setOpenQuestion(isOpen ? null : faq.question)}
                      className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                    >
                      <span className="font-semibold text-gray-200 text-base">{faq.question}</span>
                      <span className="ml-6 flex-shrink-0 text-[#00d4ff]">
                        {isOpen ? (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                        )}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-gray-400 font-light text-sm leading-[1.6] animate-in fade-in slide-in-from-top-2">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Contact Us Section */}
            <div className="mt-12 bg-[#061233] rounded-2xl p-8 text-center border border-white/10 shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_120%,#00D4FF,transparent_70%)] pointer-events-none transition-opacity duration-700 group-hover:opacity-20" />
              <h3 className="text-2xl font-bold text-white mb-3">{content.ObjectionsAccordion.contactTitle}</h3>
              <p className="text-gray-400 font-light mb-6 max-w-md mx-auto text-sm leading-[1.6]">
                {content.ObjectionsAccordion.contactDesc}
              </p>
              <Button asChild size="lg" className="rounded-full border-2 border-[#635bff] bg-[#635bff] dark:bg-[#635bff96] text-white hover:bg-[#635bff96] dark:hover:bg-[#635bff] shadow-none" variant={"default"}>
                <Link href="#demo" aria-label="Contact our team">
                  <span>{content.ObjectionsAccordion.contactButton}</span>
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}