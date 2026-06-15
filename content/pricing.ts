const pricing = {
  eyebrow: "Simple clinic pricing",
  title: "Choose the modules your practice actually needs.",
  description:
    "DardiBook pricing can be configured around your users, branches, departments, and workflow modules so you do not pay for a heavy system you will not use.",
  cards: [
    {
      title: "Starter",
      description: "For solo doctors starting with digital records and prescriptions.",
      price: "Custom",
      features: [
        "Patient records",
        "Digital prescriptions",
        "Appointment tracking",
        "Follow-up reminders",
        "Guided setup",
      ],
      cta: "Book a walkthrough",
      highlighted: false,
    },
    {
      title: "Clinic",
      description: "For growing clinics that need shared workflows across reception and doctors.",
      price: "Custom",
      features: [
        "Everything in Starter",
        "Multi-user access",
        "Appointment desk",
        "Role-based views",
        "Lab and pharmacy coordination",
        "Care task tracking",
      ],
      cta: "Talk to sales",
      highlighted: true,
    },
    {
      title: "Hospital",
      description: "For hospitals and larger teams that need structured department workflows.",
      price: "Custom",
      features: [
        "Everything in Clinic",
        "Department workflows",
        "Admissions flow",
        "Advanced access planning",
        "Implementation support",
        "Team onboarding",
      ],
      cta: "Request proposal",
      highlighted: false,
    },
  ],
  faq: [
    {
      question: "Do you publish fixed prices online?",
      answer:
        "Pricing depends on users, branches, departments, and modules. We will suggest a setup after understanding your clinic workflow.",
    },
    {
      question: "Can we start with only a few modules?",
      answer:
        "Yes. Most teams start with appointments, patient records, prescriptions, and follow-ups, then expand into diagnostics, pharmacy, billing, or hospital workflows.",
    },
    {
      question: "Is onboarding included?",
      answer:
        "Yes. We help map your current workflow and set up the right DardiBook configuration for your team.",
    },
  ],
};

export default pricing;
