'use client';

import React, { useState } from 'react';
import content from "@/content/content";
import TypingAnimation from "../ui/typingText";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { APP_LINKS } from "@/content/links";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

  const allTopic: FAQTopic = {
    id: "all",
    title: "All",
    items: faqData.flatMap((topic) => topic.items)
  };

  const displayTopics = [allTopic, ...faqData];

  const [activeTopic, setActiveTopic] = useState<string>(faqData[0].id);

  const currentTopicData = displayTopics.find((topic) => topic.id === activeTopic);

  return (
    <section id="faq" className="relative scroll-mt-28 py-20 min[900px]:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-1 lg:gap-16">

          {/* Left Side: Meaningful Content & Topic Selector */}
          <div className="lg:w-1/3 flex flex-col">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 tracking-[-0.02em]">
              {content.ObjectionsAccordion.title}
            </h2>
            <TypingAnimation className="text-accent-foreground font-light text-lg leading-[1.6] mb-8">
              {content.ObjectionsAccordion.description}
            </TypingAnimation>

            {/* Desktop Topic Selector */}
            <div className="hidden lg:flex flex-col space-y-2">
              {displayTopics.map((topic) => (
                <Button
                  variant={"link"}
                  key={topic.id}
                  onClick={() => {
                    setActiveTopic(topic.id);
                  }}
                  className={`justify-start px-5 py-3  ${activeTopic === topic.id
                    ? 'font-bold underline'
                    : 'text-accent-foreground/80'
                    }`}
                >
                  {topic.title}
                </Button>
              ))}
            </div>

            {/* Mobile Topic Selector */}
            <div className="lg:hidden mb-4">
              <Select value={activeTopic} onValueChange={setActiveTopic}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a topic" />
                </SelectTrigger>
                <SelectContent>
                  {displayTopics.map((topic) => (
                    <SelectItem key={topic.id} value={topic.id}>
                      {topic.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Right Side: FAQs & Contact Us */}
          <div className="lg:w-2/3 flex flex-col">
            <section className='bg-background/70 rounded-2xl px-5 shadow-sm'>
              <Accordion type='single' collapsible className='w-full' defaultValue='item-1'>
                {currentTopicData?.items.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index + 1}`}>
                    <AccordionTrigger className='text-lg'>{item.question}</AccordionTrigger>
                    <AccordionContent className='text-muted-foreground text-base'>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>


            {/* Contact Us Section */}
            <div className="mt-12 bg-background/70 rounded-2xl p-8 text-center shadow-sm relative overflow-hidden group">
              <h3 className="text-2xl font-bold mb-3">{content.ObjectionsAccordion.contactTitle}</h3>
              <p className="text-accent-foreground font-light mb-6 max-w-md mx-auto text-sm leading-[1.6]">
                {content.ObjectionsAccordion.contactDesc}
              </p>
              <Button asChild size="lg" className="rounded-full border-2 border-[#635bff] bg-[#635bff] dark:bg-[#635bff96] text-white hover:bg-[#635bff96] dark:hover:bg-[#635bff] shadow-none" variant={"default"}>
                <Link href={APP_LINKS.DOCS.CONTACT_US} aria-label="Contact our team">
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