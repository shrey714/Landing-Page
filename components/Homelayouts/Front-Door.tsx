"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDaysIcon,
  ClipboardListIcon,
  FileTextIcon,
  FlaskConicalIcon,
  PillIcon,
  SearchIcon,
  ShieldCheckIcon,
  StethoscopeIcon,
  UserRoundIcon,
} from "lucide-react";

export function StickyScrollReveal() {
  const [divHeight, setDivHeight] = useState(0);
  const [activeGif, setActiveGif] = useState(1);
  const heightOfDivRef = useRef<HTMLDivElement>(null);
  const headingRefs = useRef<HTMLDivElement[]>([]);

  const setHeadingRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      if (el) {
        headingRefs.current[index] = el;
      }
    },
    []
  );

  useEffect(() => {
    const updateHeight = () => {
      if (heightOfDivRef.current) {
        setDivHeight(heightOfDivRef.current.offsetHeight);
      }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;

      headingRefs.current.forEach((ref, index) => {
        const rect = ref.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + rect.height;

        if (scrollY >= elementTop && scrollY <= elementBottom) {
          setActiveGif(index + 1);
        }
      });
    };

    updateHeight();
    handleScroll();
    window.addEventListener("resize", updateHeight);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative">
      <div className="relative z-[1] flex justify-center">
        <div className="w-full max-w-7xl my-0 mx-4">
          <div className="px-0 py-28">
            <div
              id="heightOfDiv"
              ref={heightOfDivRef}
              className="grid items-center grid-cols-[minmax(0,1fr)] gap-y-8 min-[600px]:gap-y-12 min-[900px]:gap-y-24"
            >
              <div
                id="heading1"
                ref={setHeadingRef(0)}
                className="grid items-center min-[600px]:grid-cols-1 min-[900px]:grid-cols-2 gap-y-8 min-[900px]:max-h-[900px]"
              >
                <section className="grid gap-y-8 tracking-[0.2px] scroll-mt-[108px]">
                  <header className="relative grid grid-cols-[minmax(0,1fr)] gap-y-8 pl-4 pr-4 min-[600px]:pr-16 max-w-[810px]">
                    <h2 className="text-[#635bff] text-3xl md:text-4xl font-semibold leading-tight">
                      Practice operating system
                    </h2>

                    <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#fff] -tracking-[0.02em] wrap-break-word">
                      One connected workspace for modern healthcare teams
                    </h1>
                  </header>

                  <div className="pl-4 pr-4 min-[600px]:pr-16 font-light text-lg leading-[1.555555556] text-[#a0a0a0] max-w-[810px]">
                    <p>
                      DardiBook helps clinics digitize daily operations,
                      organize patient journeys, and keep doctors, staff,
                      pharmacies, and diagnostics aligned from registration to
                      follow-up.
                    </p>
                  </div>
                </section>

                <figure className="relative self-start hidden min-[900px]:block">
                  <div
                    className="absolute top-0 left-0 w-full"
                    style={{ height: divHeight }}
                  >
                    {/* main gif shower */}
                    <div className="sticky aspect-square top-[calc(50%-270px)] overflow-hidden mx-auto max-w-[540px]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeGif}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="w-full h-full"
                        >
                          <ProductPanel panelNumber={activeGif} />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </figure>
                <figure className="relative self-start grid min-[900px]:hidden px-4">
                  <div className="aspect-square overflow-hidden rounded-[8px]">
                    <ProductPanel panelNumber={1} />
                  </div>
                </figure>
              </div>

              <div
                id="heading2"
                ref={setHeadingRef(1)}
                className="grid items-center min-[600px]:grid-cols-1 min-[900px]:grid-cols-2 gap-y-8 min-[900px]:max-h-[900px] min-[900px]:h-[90vh]"
              >
                <section className="grid gap-y-6 tracking-[0.2px] scroll-mt-[108px]">
                  <header className="relative grid grid-cols-[minmax(0,1fr)] gap-y-4 pl-4 pr-4 min-[600px]:pr-16 max-w-[810px]">
                    <h2 className="text-[#635bff] text-3xl md:text-4xl font-semibold leading-tight">
                      Patient Management
                    </h2>

                    <h2 className="relative text-3xl md:text-4xl font-extrabold leading-tight text-[#fff] -tracking-[0.02em] wrap-break-word">
                      Keep every patient interaction easy to find
                    </h2>
                  </header>

                  <div className="pl-4 pr-4 min-[600px]:pr-16 font-light text-lg leading-[1.555555556] text-[#a0a0a0] max-w-[810px]">
                    <p>
                      Create patient profiles, view visit history, store
                      clinical notes, and access prescriptions without digging
                      through paper files or scattered spreadsheets.
                    </p>
                  </div>

                  <footer className="grid px-4 auto-cols-[minmax(0,1fr)] tracking-[0.2px] font-light text-base leading-[1.6]">
                    <h1 className="mb-2 text-white text-2xl font-semibold -tracking-[0.2px]">
                      See also
                    </h1>
                    <ul className="list-none">
                      <div className="my-1 text-[#a0a0a0]">
                        Digital case history for every consultation
                      </div>
                      <div className="my-1 text-[#a0a0a0]">
                        Quick search across patient records and visits
                      </div>
                      <div className="my-1 text-[#a0a0a0]">
                        Staff-friendly workflows for reception and doctors
                      </div>
                    </ul>
                  </footer>
                </section>
                <figure className="relative self-start grid min-[900px]:hidden px-4">
                  <div className="aspect-square overflow-hidden rounded-[8px]">
                    <ProductPanel panelNumber={2} />
                  </div>
                </figure>
              </div>

              <div
                id="heading3"
                ref={setHeadingRef(2)}
                className="grid items-center min-[600px]:grid-cols-1 min-[900px]:grid-cols-2 gap-y-8 min-[900px]:max-h-[900px] min-[900px]:h-[90vh]"
              >
                <section className="grid gap-y-6 tracking-[0.2px] scroll-mt-[108px]">
                  <header className="relative grid grid-cols-[minmax(0,1fr)] gap-y-4 pl-4 pr-4 min-[600px]:pr-16 max-w-[810px]">
                    <h2 className="text-[#635bff] text-3xl md:text-4xl font-semibold leading-tight">
                      Appointments
                    </h2>

                    <h2 className="relative font-medium text-3xl leading-[1.294117647] text-[#fff] -tracking-[0.02em] wrap-break-word">
                      Manage bookings, queues, and follow-ups
                    </h2>
                  </header>

                  <div className="pl-4 pr-4 min-[600px]:pr-16 font-light text-lg leading-[1.555555556] text-[#a0a0a0] max-w-[810px]">
                    <p>
                      Plan clinic schedules, track walk-ins, reduce missed
                      visits, and keep every patient moving through the right
                      stage of care.
                    </p>
                  </div>

                  <footer className="grid px-4 auto-cols-[minmax(0,1fr)] tracking-[0.2px] font-light text-base leading-[1.6]">
                    <h1 className="mb-2 text-white font-[425] -tracking-[0.2px]">
                      See also
                    </h1>
                    <ul className="list-none">
                      <div className="my-1 text-[#a0a0a0]">
                        Daily appointment list for doctors and reception
                      </div>
                      <div className="my-1 text-[#a0a0a0]">
                        Visit status updates from waiting to completed
                      </div>
                      <div className="my-1 text-[#a0a0a0]">
                        Follow-up reminders for continued patient care
                      </div>
                    </ul>
                  </footer>
                </section>
                <figure className="relative self-start grid min-[900px]:hidden px-4">
                  <div className="aspect-square overflow-hidden rounded-[8px]">
                    <ProductPanel panelNumber={3} />
                  </div>
                </figure>
              </div>

              <div
                id="heading4"
                ref={setHeadingRef(3)}
                className="grid items-center min-[600px]:grid-cols-1 min-[900px]:grid-cols-2 gap-y-8 min-[900px]:max-h-[900px] min-[900px]:h-[90vh]"
              >
                <section className="grid gap-y-6 tracking-[0.2px] scroll-mt-[108px]">
                  <header className="relative grid grid-cols-[minmax(0,1fr)] gap-y-4 pl-4 pr-4 min-[600px]:pr-16 max-w-[810px]">
                    <h2 className="text-[#635bff] text-3xl md:text-4xl font-semibold leading-tight">
                      Prescriptions
                    </h2>

                    <h2 className="relative font-medium text-3xl leading-[1.294117647] text-[#fff] -tracking-[0.02em] wrap-break-word">
                      Create clearer prescriptions and care instructions
                    </h2>
                  </header>

                  <div className="pl-4 pr-4 min-[600px]:pr-16 font-light text-lg leading-[1.555555556] text-[#a0a0a0] max-w-[810px]">
                    <p>
                      Generate digital prescriptions, record medication advice,
                      and make it easier for patients and pharmacies to
                      understand the next step.
                    </p>
                  </div>

                  <footer className="grid px-4 auto-cols-[minmax(0,1fr)] tracking-[0.2px] font-light text-base leading-[1.6]">
                    <h1 className="mb-2 text-white font-[425] -tracking-[0.2px]">
                      See also
                    </h1>
                    <ul className="list-none">
                      <div className="my-1 text-[#a0a0a0]">
                        Repeat medicine and dosage references
                      </div>
                      <div className="my-1 text-[#a0a0a0]">
                        Pharmacy-ready prescription details
                      </div>
                      <div className="my-1 text-[#a0a0a0]">
                        Patient instructions stored with the visit
                      </div>
                    </ul>
                  </footer>
                </section>
                <figure className="relative self-start grid min-[900px]:hidden px-4">
                  <div className="aspect-square overflow-hidden rounded-[8px]">
                    <ProductPanel panelNumber={4} />
                  </div>
                </figure>
              </div>

              <div
                id="heading5"
                ref={setHeadingRef(4)}
                className="grid items-center min-[600px]:grid-cols-1 min-[900px]:grid-cols-2 gap-y-8 min-[900px]:max-h-[900px] pb-20"
              >
                <section className="grid gap-y-6 tracking-[0.2px] scroll-mt-[108px]">
                  <header className="relative grid grid-cols-[minmax(0,1fr)] gap-y-4 pl-4 pr-4 min-[600px]:pr-16 max-w-[810px]">
                    <h2 className="text-[#635bff] text-3xl md:text-4xl font-semibold leading-tight">
                      Diagnostics
                    </h2>

                    <h2 className="relative font-medium text-3xl leading-[1.294117647] text-[#fff] -tracking-[0.02em] wrap-break-word">
                      Coordinate lab requests and reports smoothly
                    </h2>
                  </header>

                  <div className="pl-4 pr-4 min-[600px]:pr-16 font-light text-lg leading-[1.555555556] text-[#a0a0a0] max-w-[810px]">
                    <p>
                      Share test recommendations, keep reports attached to the
                      patient record, and help doctors review results with
                      context during the next visit.
                    </p>
                  </div>

                  <footer className="grid px-4 auto-cols-[minmax(0,1fr)] tracking-[0.2px] font-light text-base leading-[1.6]">
                    <h1 className="mb-2 text-white font-[425] -tracking-[0.2px]">
                      See also
                    </h1>
                    <ul className="list-none">
                      <div className="my-1 text-[#a0a0a0]">
                        Lab requests linked to patient visits
                      </div>
                      <div className="my-1 text-[#a0a0a0]">
                        Reports stored alongside medical history
                      </div>
                      <div className="my-1 text-[#a0a0a0]">
                        Better coordination between clinics and diagnostics
                      </div>
                    </ul>
                  </footer>
                </section>
                <figure className="relative self-start grid min-[900px]:hidden px-4">
                  <div className="aspect-square overflow-hidden rounded-[8px]">
                    <ProductPanel panelNumber={5} />
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const panels = [
  {
    title: "Clinic Command Center",
    subtitle: "Today across reception, doctors, pharmacy, and diagnostics",
    icon: ClipboardListIcon,
    stat: "42",
    statLabel: "scheduled visits",
    accent: "#00D4FF",
    rows: [
      ["Waiting", "12 patients", "Reception"],
      ["In consultation", "6 patients", "Doctors"],
      ["Reports pending", "7 files", "Diagnostics"],
    ],
  },
  {
    title: "Patient Timeline",
    subtitle: "One profile for history, notes, prescriptions, and files",
    icon: UserRoundIcon,
    stat: "8",
    statLabel: "linked visits",
    accent: "#27C17B",
    rows: [
      ["Last visit", "Fever and cough", "12 Jun"],
      ["Prescription", "3 medicines", "Active"],
      ["Attached files", "CBC report", "Reviewed"],
    ],
  },
  {
    title: "Appointment Desk",
    subtitle: "Bookings, walk-ins, queue status, and follow-up reminders",
    icon: CalendarDaysIcon,
    stat: "14:00",
    statLabel: "next consultation",
    accent: "#F2B84B",
    rows: [
      ["Riya Patel", "Waiting", "14:00"],
      ["Amit Shah", "In room 2", "14:15"],
      ["Mira Joshi", "Follow-up", "14:30"],
    ],
  },
  {
    title: "Digital Prescription",
    subtitle: "Medication advice that stays attached to the visit record",
    icon: PillIcon,
    stat: "28",
    statLabel: "issued today",
    accent: "#F26D6D",
    rows: [
      ["Paracetamol", "500 mg", "After food"],
      ["Cough syrup", "10 ml", "Night"],
      ["Review", "3 days", "Follow-up"],
    ],
  },
  {
    title: "Diagnostics Review",
    subtitle: "Lab requests and reports available in clinical context",
    icon: FlaskConicalIcon,
    stat: "7",
    statLabel: "reports pending",
    accent: "#9B8CFF",
    rows: [
      ["CBC", "Received", "Needs review"],
      ["Lipid profile", "Requested", "Lab"],
      ["X-ray chest", "Uploaded", "Reviewed"],
    ],
  },
];

const ProductPanel = ({ panelNumber }: { panelNumber: number }) => {
  const panel = panels[panelNumber - 1] ?? panels[0];

  return (
    <div className="h-full w-full rounded-[8px] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/20">
      <div className="flex h-full flex-col overflow-hidden rounded-[8px] bg-[#f6f9fc] text-[#0a2540]">
        <div
          className="h-1 w-full"
          style={{ backgroundColor: panel.accent }}
        ></div>

        <div className="flex items-center justify-between border-b border-[#e6ebf1] bg-white px-5 py-4">
          <div className="flex items-center gap-3">
            <div
              className="grid h-10 w-10 place-items-center rounded-[8px]"
              style={{ backgroundColor: `${panel.accent}24`, color: panel.accent }}
            >
              <panel.icon size={20} />
            </div>
            <div>
              <h3 className="text-lg font-medium leading-tight">
                {panel.title}
              </h3>
              <p className="mt-1 text-xs text-[#727f96]">{panel.subtitle}</p>
            </div>
          </div>
          <div className="hidden rounded-full bg-[#eef3f8] px-3 py-1 text-xs text-[#425466] min-[480px]:block">
            Live
          </div>
        </div>

        <div className="grid flex-1 gap-4 p-5">
          <div className="grid grid-cols-[1fr_auto] gap-4">
            <div className="rounded-[8px] bg-white p-4 shadow-sm">
              <p className="text-xs uppercase text-[#727f96]">Focus metric</p>
              <div className="mt-4 flex items-end gap-3">
                <span className="text-4xl font-medium">{panel.stat}</span>
                <span className="pb-1 text-sm text-[#727f96]">
                  {panel.statLabel}
                </span>
              </div>
            </div>
            <div className="hidden w-24 rounded-[8px] bg-[#081C4F] p-4 text-white min-[480px]:grid">
              <ShieldCheckIcon className="text-[#00d4ff]" size={20} />
              <span className="self-end text-xs leading-5 text-[#a0a0a0]">
                Role-based access
              </span>
            </div>
          </div>

          <div className="rounded-[8px] bg-white shadow-sm">
            <div className="flex items-center gap-2 border-b border-[#e6ebf1] px-4 py-3 text-sm text-[#727f96]">
              <SearchIcon size={14} />
              Patient, visit, report, prescription
            </div>
            <div className="grid">
              {panel.rows.map(([label, value, meta]) => (
                <div
                  key={`${label}-${value}`}
                  className="grid grid-cols-[1fr_auto] gap-4 border-b border-[#e6ebf1] px-4 py-3 last:border-b-0"
                >
                  <div>
                    <p className="text-sm font-medium text-[#0a2540]">
                      {label}
                    </p>
                    <p className="mt-1 text-xs text-[#727f96]">{value}</p>
                  </div>
                  <span className="self-center rounded-full bg-[#eef3f8] px-2 py-1 text-xs text-[#425466]">
                    {meta}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              [StethoscopeIcon, "Doctor"],
              [FileTextIcon, "Records"],
              [FlaskConicalIcon, "Labs"],
            ].map(([Icon, label]) => {
              const IconComponent = Icon as typeof StethoscopeIcon;

              return (
                <div
                  key={label as string}
                  className="grid gap-y-2 rounded-[8px] bg-white p-3 text-center shadow-sm"
                >
                  <IconComponent
                    className="mx-auto text-[#62788d]"
                    size={16}
                  />
                  <span className="text-xs text-[#425466]">
                    {label as string}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
