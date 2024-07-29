import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq_data = [
  {
    id: 1,
    question: "What do you mean by 'Figma assets'?",
    answer:
      "You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.",
  },
  {
    id: 2,
    question: "What does 'lifetime access' exactly mean?",
    answer:
      "Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge.",
  },
  {
    id: 3,
    question: "How does support work?",
    answer:
      "We're aware of the importance of well qualified support, that is why we decided that support will only be provided by the authors that actually worked on this project. Feel free to contact us and we'll help you out as soon as we can.",
  },
  {
    id: 4,
    question: "I want to build more than one project. Is that allowed?",
    answer:
      "You can use Windster for an unlimited amount of projects, whether it's a personal website, a SaaS app, or a website for a client. As long as you don't build a product that will directly compete with Windster either as a UI kit, theme, or template, it's fine. Find out more information by reading the license.",
  },
  {
    id: 5,
    question: "What does 'free updates' include?",
    answer:
      "The free updates that will be provided is based on the roadmap that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well.",
  },
  {
    id: 6,
    question: "What does the free version include?",
    answer:
      "The free version of Windster includes a minimal style guidelines, component variants, and a dashboard page with the mobile version alongside it. You can use this version for any purposes, because it is open-source under the MIT license.",
  },
  {
    id: 7,
    question: "What is the difference between Windster and Tailwind UI?",
    answer:
      "Although both Windster and Tailwind UI are built for integration with Tailwind CSS, the main difference is in the design, the pages, the extra components and UI elements that Windster includes. Additionally, Windster is a project that is still in development, and later it will include both the application, marketing, and e-commerce UI interfaces.",
  },
  {
    id: 8,
    question: "Can I use Windster in open-source projects?",
    answer:
      "Generally, it is accepted to use Windster in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to Windster itself. With that being said, feel free to use this design kit for your open-source projects. Find out more information by reading the license.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-white">
      <div className="py-6 px-4 mx-auto max-w-screen-xl md:pt-6">
        <h2 className="mb-4 text-2xl font-bold leading-[1.2] md:text-3xl">
          Frequently Asked Questions
        </h2>

        <Accordion
          type="single"
          collapsible
          className="grid text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2"
        >
          <div>
            {faq_data.slice(0, 4).map((faq: any, key: number) => {
              return (
                <AccordionItem key={key} value={faq.id}>
                  <AccordionTrigger className="text-start py-3 md:py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              );
            })}
          </div>

          <div>
            {faq_data.slice(4, 8).map((faq: any, key: number) => {
              return (
                <AccordionItem key={key} value={faq.id}>
                  <AccordionTrigger className="text-start py-3 md:py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              );
            })}
          </div>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
