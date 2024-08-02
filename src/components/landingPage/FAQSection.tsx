import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq_data =[
  {
    "id": 1,
    "question": "What services does DardiBook offer?",
    "answer": "DardiBook offers comprehensive healthcare management services including appointment scheduling, prescription management, patient history tracking, and referral services. It’s designed to streamline the workflow for doctors and provide a seamless experience for patients."
  },
  {
    "id": 2,
    "question": "Is my data secure with DardiBook?",
    "answer": "Yes, DardiBook prioritizes the security and privacy of your data. We use advanced encryption protocols to ensure that all patient and doctor information is securely stored and handled in compliance with industry standards."
  },
  {
    "id": 3,
    "question": "How can I schedule an appointment through DardiBook?",
    "answer": "You can easily schedule appointments through DardiBook by selecting your preferred doctor and choosing an available time slot. The platform also allows you to manage and reschedule appointments if necessary."
  },
  {
    "id": 4,
    "question": "Can I access DardiBook on my mobile device?",
    "answer": "Yes, DardiBook is designed to be fully responsive and accessible on various devices including smartphones, tablets, and desktops, ensuring you can manage healthcare needs on the go."
  },
  {
    "id": 5,
    "question": "What kind of support does DardiBook offer?",
    "answer": "DardiBook provides direct customer support to assist with any issues or inquiries. Our support team is available to help via email or live chat, ensuring timely and effective assistance."
  },
  {
    "id": 6,
    "question": "How does DardiBook handle prescriptions?",
    "answer": "DardiBook allows doctors to generate and manage prescriptions digitally. These prescriptions can be easily shared with patients, ensuring clear communication and reducing the risk of errors."
  },
  {
    "id": 7,
    "question": "Is there a limit on the number of patient records I can manage?",
    "answer": "No, DardiBook offers unlimited patient record management, allowing you to store and organize as many patient records as you need without any limitations."
  },
  {
    "id": 8,
    "question": "Can I try DardiBook before committing to a subscription?",
    "answer": "Yes, DardiBook offers a free trial period so you can explore the platform’s features and functionality before deciding on a subscription plan. This ensures that the platform meets your needs before you commit."
  }
]


const FAQSection = () => {
  return (
    <section>
      <div className="pt-8 md:pt-16 px-4 mx-auto max-w-screen-xl">
        <h2 className="mb-4 text-2xl font-bold leading-[1.2] md:text-3xl text-gray-700">
          Frequently Asked Questions
        </h2>

        <Accordion
          type="single"
          collapsible
          className="grid text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2 pt-4 md:pt-6"
        >
          <div>
            {faq_data.slice(0, 4).map((faq: any, key: number) => {
              return (
                <AccordionItem key={key} value={faq.id}>
                  <AccordionTrigger className="text-start py-3 md:py-4 text-gray-500">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500" >{faq.answer}</AccordionContent>
                </AccordionItem>
              );
            })}
          </div>

          <div>
            {faq_data.slice(4, 8).map((faq: any, key: number) => {
              return (
                <AccordionItem key={key} value={faq.id}>
                  <AccordionTrigger className="text-start py-3 md:py-4 text-gray-500">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500" >{faq.answer}</AccordionContent>
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
