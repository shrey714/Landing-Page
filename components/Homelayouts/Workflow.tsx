import {
  ClipboardPlusIcon,
  FileTextIcon,
  FlaskConicalIcon,
  PillIcon,
  UserRoundCheckIcon,
} from "lucide-react";

const workflowSteps = [
  {
    title: "Register Patient",
    description:
      "Create a patient profile once and keep demographics, visits, files, and care notes organized.",
    icon: UserRoundCheckIcon,
  },
  {
    title: "Consultation",
    description:
      "Doctors can review history, capture clinical notes, and keep each visit linked to the patient record.",
    icon: ClipboardPlusIcon,
  },
  {
    title: "Prescription",
    description:
      "Generate clear digital prescriptions with medicine, dosage, advice, and revisit instructions.",
    icon: PillIcon,
  },
  {
    title: "Lab & Pharmacy",
    description:
      "Connect test requests, pharmacy details, and reports back to the same visit for better continuity.",
    icon: FlaskConicalIcon,
  },
  {
    title: "Follow-up",
    description:
      "Track pending care tasks and follow-up reminders so patients do not disappear after the visit.",
    icon: FileTextIcon,
  },
];

const Workflow = () => {
  return (
    <section id="workflow" className="relative scroll-mt-28">
      <div className="relative z-[1] flex justify-center">
        <div className="w-full max-w-7xl mx-4">
          <div className="py-28">
            <div className="grid gap-y-12">
              <section className="grid gap-y-6 max-w-3xl px-4">
                <h2 className="text-[#00d4ff] text-3xl md:text-4xl font-semibold leading-tight">
                  How DardiBook works
                </h2>
                <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight">
                  A complete patient journey from entry to follow-up
                </h1>
                <p className="text-gray-300 font-light text-lg leading-[1.555555556]">
                  DardiBook is built around the way clinics actually move:
                  reception, consultation, prescription, diagnostics, and
                  continued care.
                </p>
              </section>

              <div className="grid gap-4 px-4 min-[760px]:grid-cols-5">
                {workflowSteps.map((step, index) => (
                  <article
                    key={step.title}
                    className="relative rounded-[8px] border border-white/10 bg-white/[0.06] p-5 min-h-[230px]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="grid h-10 w-10 place-items-center rounded bg-[#00d4ff24] text-[#00d4ff]">
                        <step.icon size={20} />
                      </div>
                      <span className="text-sm text-gray-300">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-8 text-white text-2xl font-semibold leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-gray-300 font-light text-base leading-[1.6]">
                      {step.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
