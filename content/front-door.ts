const frontDoor = {
  h1Title: "Practice operating system",
  h1Subtitle: "One connected workspace for modern healthcare teams",
  h1Desc:
    "DardiBook helps clinics digitize daily operations, organize patient journeys, and keep doctors, staff, pharmacies, and diagnostics aligned from registration to follow-up.",
  h2Title: "Patient Management",
  h2Subtitle: "Keep every patient interaction easy to find",
  h2Desc:
    "Create patient profiles, view visit history, store clinical notes, and access prescriptions without digging through paper files or scattered spreadsheets.",
  h3Title: "Appointments",
  h3Subtitle: "Manage bookings, queues, and follow-ups",
  h3Desc:
    "Plan clinic schedules, track walk-ins, reduce missed visits, and keep every patient moving through the right stage of care.",
  h4Title: "Prescriptions",
  h4Subtitle: "Create clearer prescriptions and care instructions",
  h4Desc:
    "Generate digital prescriptions, record medication advice, and make it easier for patients and pharmacies to understand the next step.",
  h5Title: "Billing & Payments",
  h5Subtitle: "Manage clinic revenue and patient bills easily",
  h5Desc:
    "Generate clear invoices, track pending payments, and keep financial records tied to the respective patient visits securely.",
  seeAlso: "See also",
  h2List: [
    "Digital case history for every consultation",
    "Quick search across patient records and visits",
    "Staff-friendly workflows for reception and doctors",
  ],
  h3List: [
    "Daily appointment list for doctors and reception",
    "Visit status updates from waiting to completed",
    "Follow-up reminders for continued patient care",
  ],
  h4List: [
    "Repeat medicine and dosage references",
    "Clearer instructions for patients",
    "Fewer clarification calls from pharmacies",
  ],
  h5List: [
    "Invoices linked to patient visits",
    "Track pending and completed payments",
    "Clear, itemized billing for patients",
  ],
  panels: [
    {
      title: "Clinic Command Center",
      subtitle: "Today across reception, doctors, pharmacy, and diagnostics",
      statLabel: "scheduled visits",
      rows: [
        ["Waiting", "12 patients", "Reception"],
        ["In consultation", "6 patients", "Doctors"],
        ["Reports pending", "7 files", "Diagnostics"],
      ],
    },
    {
      title: "Patient Timeline",
      subtitle: "One profile for history, notes, prescriptions, and files",
      statLabel: "linked visits",
      rows: [
        ["Last visit", "Fever and cough", "12 Jun"],
        ["Prescription", "3 medicines", "Active"],
        ["Attached files", "CBC report", "Reviewed"],
      ],
    },
    {
      title: "Appointment Desk",
      subtitle: "Bookings, walk-ins, queue status, and follow-up reminders",
      statLabel: "next consultation",
      rows: [
        ["Riya Patel", "Waiting", "14:00"],
        ["Amit Shah", "In room 2", "14:15"],
        ["Mira Joshi", "Follow-up", "14:30"],
      ],
    },
    {
      title: "Digital Prescription",
      subtitle: "Medication advice that stays attached to the visit record",
      statLabel: "issued today",
      rows: [
        ["Paracetamol", "500 mg", "After food"],
        ["Cough syrup", "10 ml", "Night"],
        ["Review", "3 days", "Follow-up"],
      ],
    },
    {
      title: "Diagnostics Review",
      subtitle: "Lab requests and reports available in clinical context",
      statLabel: "reports pending",
      rows: [
        ["CBC", "Received", "Needs review"],
        ["Lipid profile", "Requested", "Lab"],
        ["X-ray chest", "Uploaded", "Reviewed"],
      ],
    },
  ],
  panelLive: "Live",
  panelFocusMetric: "Focus metric",
  panelRoleBasedAccess: "Role-based access",
  panelSearchPlaceholder: "Patient, visit, report, prescription",
  panelIconDoctor: "Doctor",
  panelIconRecords: "Records",
  panelIconLabs: "Labs",
};

export default frontDoor;
