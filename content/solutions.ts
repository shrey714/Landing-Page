const solutions = {
  commonCTA: "Book a workflow walkthrough",
  commonDemoDesc:
    "Tell us how your team works. We will map your reception, consultation, prescription, lab, and follow-up flow to the right DardiBook setup.",
  pages: [
    {
      slug: "solo-doctors",
      title: "DardiBook for Solo Doctors",
      eyebrow: "Solo practices",
      description:
        "A simple digital practice workspace for independent doctors who want fewer paper files, clearer prescriptions, and better follow-up discipline without complicated software.",
      heroTitle: "Run your solo practice with more clarity and less admin.",
      heroDescription:
        "DardiBook helps solo doctors manage appointments, patient records, prescriptions, lab requests, and follow-ups from one calm workspace built for busy OPD days.",
      audience: [
        "Independent doctors",
        "Small clinics",
        "Consultants with repeat patients",
        "Doctors moving from paper registers to digital records",
      ],
      painPoints: [
        "Patient history is spread across paper files, WhatsApp messages, and memory.",
        "Follow-ups depend on manual reminders or patient recall.",
        "Prescriptions and lab advice need to stay clear and attached to the visit.",
        "Clinic admin work takes time away from consultation.",
      ],
      workflows: [
        {
          title: "Quick patient profile",
          description:
            "Create a patient record once and keep visits, notes, prescriptions, files, and follow-up tasks in one timeline.",
        },
        {
          title: "Focused consultation view",
          description:
            "Review history, active issues, previous prescriptions, and attached reports before writing the next plan.",
        },
        {
          title: "Digital prescription flow",
          description:
            "Create structured prescriptions with medicine, dosage, advice, and revisit instructions that stay linked to the visit.",
        },
        {
          title: "Follow-up reminders",
          description:
            "Track pending follow-ups and reminders so patients do not disappear after the consultation.",
        },
      ],
      modules: ["Patient Records", "Appointments", "Prescriptions", "Follow-ups", "Lab Requests"],
      metricLabel: "patient timeline",
      metricValue: "One",
    },
    {
      slug: "clinics",
      title: "DardiBook for Clinics",
      eyebrow: "Growing clinics",
      description:
        "Coordinate reception, doctors, pharmacy, diagnostics, and follow-up teams without losing track of the patient journey.",
      heroTitle: "Keep every clinic team member aligned from registration to follow-up.",
      heroDescription:
        "DardiBook gives growing clinics a shared workspace for queues, patient records, prescriptions, lab coordination, care tasks, and daily operational visibility.",
      audience: [
        "Multi-doctor clinics",
        "Speciality clinics",
        "Clinics with reception teams",
        "Clinics adding pharmacy, lab, or follow-up workflows",
      ],
      painPoints: [
        "Reception and doctors often work from different sources of truth.",
        "Queue status, visit notes, and follow-up tasks can get missed during busy hours.",
        "Staff access needs to be clear without exposing unnecessary patient data.",
        "Clinic owners need operational visibility without enterprise complexity.",
      ],
      workflows: [
        {
          title: "Shared appointment desk",
          description:
            "Manage scheduled visits, walk-ins, waiting status, in-consultation status, and completed visits from one queue view.",
        },
        {
          title: "Role-aware records",
          description:
            "Give reception, doctors, and operations teams the right view for their work while keeping patient records organized.",
        },
        {
          title: "Care task coordination",
          description:
            "Track lab reports, pharmacy instructions, pending calls, and follow-up reminders across the care team.",
        },
        {
          title: "Operational rhythm",
          description:
            "Keep daily footfall, open visits, pending reports, and follow-ups visible without switching between scattered tools.",
        },
      ],
      modules: ["Appointment Desk", "Patient Records", "Role-based Access", "Care Tasks", "Diagnostics", "Follow-ups"],
      metricLabel: "clinic workflows connected",
      metricValue: "All",
    },
    {
      slug: "hospitals",
      title: "DardiBook for Hospitals",
      eyebrow: "Larger care teams",
      description:
        "Structure patient records, department workflows, admissions, diagnostics, and follow-up coordination for larger healthcare teams.",
      heroTitle: "Bring structure to hospital workflows without forcing everyone into a heavy system.",
      heroDescription:
        "DardiBook helps hospital teams keep patient context, visit records, prescriptions, diagnostics, and follow-up tasks connected across departments and care teams.",
      audience: [
        "Small hospitals",
        "Multi-speciality hospitals",
        "Hospital OPD teams",
        "Departments that need shared patient context",
      ],
      painPoints: [
        "Patient information is fragmented across departments and paper files.",
        "Follow-up and diagnostics coordination can become difficult at scale.",
        "Staff need structured access based on role and department.",
        "Hospital teams need clarity without slowing down daily operations.",
      ],
      workflows: [
        {
          title: "Department-level visibility",
          description:
            "Organize patient journeys across OPD, diagnostics, pharmacy, admissions, and follow-up workflows.",
        },
        {
          title: "Structured patient timeline",
          description:
            "Keep visits, notes, prescriptions, reports, and files attached to the right patient and encounter.",
        },
        {
          title: "Care continuity",
          description:
            "Connect diagnostics, pharmacy instructions, discharge advice, and follow-up reminders for smoother handoffs.",
        },
        {
          title: "Controlled access",
          description:
            "Support role-aware access so teams see the information they need for their work.",
        },
      ],
      modules: ["Patient Timeline", "Department Workflows", "Diagnostics", "Admissions", "Follow-ups", "Access Control"],
      metricLabel: "care touchpoints organized",
      metricValue: "End-to-end",
    },
  ],
};

export default solutions;
