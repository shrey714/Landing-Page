const objectionsAccordion = {
  title: "Frequently Asked Questions",
  description:
    "Everything you need to know about our product, billing, and how we keep your data secure. Select a topic below to explore.",
  contactTitle: "Still have questions?",
  contactDesc:
    "Can't find the answer you're looking for? Our friendly team is ready to help you get the most out of our platform.",
  contactButton: "Contact Support",
};

const faqData = [
  {
    id: "general",
    title: "General Questions",
    items: [
      {
        question: "What is DardiBook and how does it work?",
        answer:
          "DardiBook is a practice management software that digitizes every clinic touchpoint. It provides a seamless connected experience for managing appointments, patient records, prescriptions, diagnostics, and follow-ups.",
      },
      {
        question: "Who is this solution built for?",
        answer:
          "It is designed for solo doctors, growing clinics, hospitals, pharmacies, and diagnostic centers who want to scale their operations and reduce administrative workloads.",
      },
      {
        question: "Can DardiBook handle multi-doctor clinics?",
        answer:
          "Yes, DardiBook is designed to support both solo practitioners and multi-speciality clinics, with role-based access for different doctors, receptionists, and staff.",
      },
      {
        question: "Do patients need to download an app?",
        answer:
          "No, patients receive their digital prescriptions, lab reports, and follow-up reminders directly via SMS or WhatsApp, without needing to install a separate application.",
      },
      {
        question: "Can I use DardiBook on my mobile device or tablet?",
        answer:
          "Yes, DardiBook is cloud-based and fully responsive, meaning you can access it securely from any web browser on your smartphone, tablet, or desktop.",
      },
      {
        question: "How does DardiBook help reduce patient wait times?",
        answer:
          "By streamlining the appointment queue and providing real-time status updates, front-desk staff can manage walk-ins and scheduled visits efficiently, reducing bottlenecks.",
      },
      {
        question: "Do I need any special hardware to run DardiBook?",
        answer:
          "No special hardware is required. Any standard computer, tablet, or smartphone with an active internet connection is sufficient to run DardiBook.",
      },
      {
        question: "Can DardiBook support multiple clinic branches?",
        answer:
          "Yes, our platform is built to handle multiple locations. You can manage patient records, staff, and analytics across all your branches from a single centralized dashboard.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing & Billing",
    items: [
      {
        question: "Is there a free trial available?",
        answer:
          "Yes! We offer a 14-day free trial on all of our premium plans. No credit card is required to sign up.",
      },
      {
        question: "Can I change my plan later?",
        answer:
          "Absolutely. You can upgrade or downgrade your plan at any time directly from your billing dashboard. Changes are prorated automatically.",
      },
      {
        question: "Do I have to pay for modules I do not use?",
        answer:
          "No, our pricing is flexible. You can choose a plan around your users, branches, and specific workflow needs, ensuring you only pay for the features you use.",
      },
      {
        question: "Are there any hidden setup fees?",
        answer:
          "No, there are no hidden charges. Our guided onboarding is included to help you set up patient records, staff roles, and appointment flows right from day one.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit and debit cards, secure bank transfers, and popular digital wallets. Billing can be configured for monthly or annual cycles.",
      },
      {
        question: "Is there a discount for annual subscriptions?",
        answer:
          "Yes, we offer a significant discount if you choose to be billed annually instead of monthly. Please check our pricing page for exact rates.",
      },
      {
        question: "What happens to my data if I cancel my subscription?",
        answer:
          "Your data is always yours. If you decide to cancel, you will have a 30-day grace period to export all your patient records and clinic data before it is securely deleted from our servers.",
      },
      {
        question: "Are updates and new features included in my subscription?",
        answer:
          "Absolutely! All system updates, security patches, and new features added to your current modules are included at no extra cost.",
      },
    ],
  },
  {
    id: "support",
    title: "Support & Security",
    items: [
      {
        question: "How do I contact customer support?",
        answer:
          "You can reach out to our support team 24/7 via the live chat widget in the bottom right corner, or by emailing support.",
      },
      {
        question: "Is patient data secure?",
        answer:
          "Security is our top priority. We use privacy-first workflows, industry-standard encryption, and role-based access to ensure sensitive health information is fully protected.",
      },
      {
        question: "What kind of training or onboarding is provided?",
        answer:
          "We provide a comprehensive product walkthrough, guided setup assistance, and ongoing support to ensure your entire team—from reception to doctors—is comfortable using the system.",
      },
      {
        question: "Are you compliant with healthcare data protection regulations?",
        answer:
          "Yes, DardiBook is built with strict adherence to global healthcare data privacy standards, ensuring secure storage, encryption, and safe handling of all medical records.",
      },
      {
        question: "How often is the data backed up?",
        answer:
          "We perform automated, encrypted backups multiple times a day across secure servers to ensure zero data loss and maximum availability in case of emergencies.",
      },
      {
        question: "Can I restrict access for certain staff members?",
        answer:
          "Yes. DardiBook features granular role-based access control. You can limit what receptionists, nurses, and doctors can view or edit based on their specific responsibilities.",
      },
      {
        question: "What happens if the system goes offline?",
        answer:
          "DardiBook is hosted on highly reliable cloud infrastructure with 99.9% uptime. In the rare event of an outage, our 24/7 technical team is immediately alerted to resolve the issue as fast as possible.",
      },
      {
        question: "Is two-factor authentication (2FA) available?",
        answer:
          "Yes, we strongly encourage enabling two-factor authentication for all clinic staff to add an extra layer of security when logging into the system.",
      },
    ],
  },
  {
    id: "workflows",
    title: "Workflows & Features",
    items: [
      {
        question: "How does DardiBook manage lab and pharmacy workflows?",
        answer:
          "Doctors can create digital prescriptions and test requests during consultations. These are instantly accessible by your connected pharmacy and diagnostic teams, keeping reports attached to the patient's visit.",
      },
      {
        question: "Can I access patient records during a consultation?",
        answer:
          "Absolutely. The patient timeline gives you a complete view of medical history, previous visit notes, active prescriptions, and attached files, all on one screen.",
      },
      {
        question: "Does the system support walk-ins and queues?",
        answer:
          "Yes, the Appointment Desk allows reception to manage scheduled bookings, track walk-ins, and update queue status from 'waiting' to 'in consultation' in real-time.",
      },
      {
        question: "Can I customize my digital prescription templates?",
        answer:
          "Yes, you can fully customize your prescription layout to include your clinic's logo, doctor signatures, specific fields, and preferred medical abbreviations.",
      },
      {
        question: "How does the follow-up reminder system work?",
        answer:
          "DardiBook automatically sends SMS or WhatsApp reminders to patients for their upcoming follow-up visits based on the timeline set by the doctor during the initial consultation.",
      },
      {
        question: "Is there an analytics dashboard for clinic performance?",
        answer:
          "Yes, you can track daily footfall, revenue, appointment trends, and module usage through an intuitive analytics dashboard built directly into the system.",
      },
      {
        question: "Can doctors use voice-to-text for clinical notes?",
        answer:
          "Yes, DardiBook supports standard voice-to-text dictation tools available on your mobile or desktop device, making it faster to capture detailed consultation notes.",
      },
      {
        question: "Can I upload past medical records and external lab reports?",
        answer:
          "Absolutely. You can scan and upload physical reports, X-rays, and past prescriptions directly into a patient's digital timeline for comprehensive care history.",
      },
    ],
  },
  {
    id: "migration",
    title: "Onboarding & Data Migration",
    items: [
      {
        question: "Can you help us migrate data from our old software?",
        answer:
          "Yes, our dedicated onboarding team provides data migration assistance to safely transfer your existing patient profiles, past records, and appointment histories into DardiBook.",
      },
      {
        question: "How long does it take to implement DardiBook?",
        answer:
          "Most solo clinics can be fully set up within 24 hours. Larger hospitals or multi-branch clinics typically take a few days, including staff training and workflow customization.",
      },
      {
        question: "Will my clinic operations be disrupted during the transition?",
        answer:
          "Not at all. We phase the implementation step-by-step—usually starting with appointments and prescriptions—so your daily operations continue smoothly without interruption.",
      },
      {
        question: "Can we import our existing medicine database?",
        answer:
          "Yes, you can upload your preferred medicine list, frequent dosages, and pharmacy inventory via CSV, making it instantly available in the digital prescription module.",
      },
      {
        question: "Do you provide on-site training for staff?",
        answer:
          "While our primary onboarding is conducted virtually through comprehensive guided sessions, we can arrange on-site training for larger hospital deployments upon request.",
      },
      {
        question: "What format should my old data be in for migration?",
        answer:
          "We accept standard formats like CSV, Excel, and SQL exports. Our team will guide you on how to extract this data from your legacy system.",
      },
      {
        question: "Is there a dedicated account manager assigned to us?",
        answer:
          "Premium and Enterprise plans include a dedicated technical account manager who will assist you during setup and provide ongoing strategic support.",
      },
    ],
  },
];

export { faqData };
export default objectionsAccordion;
