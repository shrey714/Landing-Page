import React from "react";
import { Button } from "../ui/button";
import {
  CalendarDaysIcon,
  ClipboardPlusIcon,
  FlaskConicalIcon,
  LockKeyholeIcon,
} from "lucide-react";

const FeaturesSquence = () => {
  const features = [
    {
      title: "Digital Patient Records",
      description:
        "Keep medical history, visits, prescriptions, files, and notes organized for quick review during every consultation.",
      cta: "View records",
      icon: ClipboardPlusIcon,
    },
    {
      title: "Appointment Workflow",
      description:
        "Manage bookings, queues, reminders, and follow-ups from one place without losing track of the day.",
      cta: "See scheduling",
      icon: CalendarDaysIcon,
    },
    {
      title: "Prescription & Lab Flow",
      description:
        "Create digital prescriptions and connect recommended tests with diagnostics for smoother patient handoffs.",
      cta: "Explore care flow",
      icon: FlaskConicalIcon,
    },
    {
      title: "Secure Practice Data",
      description:
        "Protect clinic information with role-aware access and a digital workflow built for responsible healthcare use.",
      cta: "Review access",
      icon: LockKeyholeIcon,
    },
  ];

  return (
    <section className="relative mb-[calc(calc(calc(100vw-17px)*0.106))] my-10 md:my-28">
      <div className="overflow-hidden">
        <div className="absolute w-full h-full overflow-visible">
          <div className="relative h-full max-h-none w-full top-0 left-0 bg-background/70 overflow-hidden [transform:skewY(-6deg)]"></div>
        </div>
        <div className="relative z-[1] flex justify-center">
          <div className="w-full max-w-[calc(calc(100vw-17px)-16px*2)] min-[1112px]:max-w-7xl mx-4">
            <div className="py-28 lg:py-52">
              <div className="grid gap-y-24 items-start grid-rows-[auto] grid-cols-[minmax(0,_1fr)]">
                <div className="grid gap-y-8 items-start min-[600px]:grid-cols-2">
                  <section className="scroll-mt-[108px] tracking-[0.2px] grid gap-y-6">
                    <header className="gris gap-y-6 max-w-[calc(calc(1280px*0.25)*3)] pr-4 min-[600px]:pr-16 pl-4 relative grid-cols-[minmax(0,_1fr)]">
                      <h2 className="text-[#00d4ff] text-3xl md:text-4xl font-semibold leading-tight">
                        Designed for care teams
                      </h2>
                      <h1 className="relative text-white -tracking-[0.1px] min-[1112px]:-tracking-[0.2px] wrap-break-word text-4xl md:text-5xl font-extrabold leading-tight">
                        Run your practice with less admin and more clarity
                      </h1>
                    </header>

                    <div className="pr-4 min-[600px]:pr-16 pl-4 text-[#adbdcc] max-w-[calc(calc(1280px*0.25)*3)] font-light text-lg leading-[1.555555556]">
                      DardiBook brings appointments, patient records,
                      prescriptions, lab requests, follow-ups, and clinic
                      activity into one simple workspace so doctors and staff
                      can spend more time on patient care.
                    </div>

                    <footer className="pr-4 min-[600px]:pr-16 pl-4">
                      <Button
                        variant={"outline"}
                        className="rounded-full"
                        size={"sm"}
                      >
                        Explore modules
                      </Button>
                    </footer>
                  </section>
                  <figure className="w-full flex items-center justify-center">
                    <div className="aspect-square w-4/5 md:w-[490px] rounded-[8px] border border-white/10 bg-[#081C4F]/70 p-5 shadow-2xl shadow-black/20">
                      <div className="flex h-full flex-col rounded-[8px] bg-white p-5 text-[#0a2540]">
                        <div className="flex items-center justify-between border-b border-[#e6ebf1] pb-4">
                          <div>
                            <p className="text-xs uppercase text-[#727f96]">
                              Today
                            </p>
                            <h3 className="mt-1 text-2xl font-semibold leading-snug">
                              Clinic desk
                            </h3>
                          </div>
                          <span className="rounded bg-[#00d4ff24] px-2 py-1 text-xs text-[#0a728a]">
                            Live
                          </span>
                        </div>

                        <div className="mt-5 grid gap-3">
                          {[
                            ["Waiting", "12 patients"],
                            ["Prescriptions", "28 issued"],
                            ["Lab reports", "7 pending"],
                          ].map(([label, value]) => (
                            <div
                              key={label}
                              className="flex items-center justify-between rounded-[8px] bg-[#f6f9fc] px-4 py-3"
                            >
                              <span className="text-sm text-[#425466]">
                                {label}
                              </span>
                              <span className="text-sm font-medium">
                                {value}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-auto rounded-[8px] bg-[#081C4F] p-4 text-white">
                          <p className="text-sm text-gray-300">
                            Next consultation
                          </p>
                          <div className="mt-2 flex items-center justify-between">
                            <span className="font-medium">Riya Patel</span>
                            <span className="text-[#00d4ff]">14:00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </figure>
                </div>

                <div>
                  <div className="grid gap-y-8 items-start min-[600px]:grid-cols-2 min-[900px]:grid-cols-4">
                    {features.map((feature, index) => (
                      <section
                        key={index}
                        className="grid gap-y-2 tracking-[0.2px] scroll-mt-[108px]"
                      >
                        <header className="relative grid gap-y-2 max-w-[calc(calc(1280px*0.25)*3)] pr-4 min-[600px]:pr-8 pl-4 grid-cols-[minmax(0,_1fr)]">
                          <div className="min-h-10 flex items-end mb-2">
                            <div className="bg-[#00d4ff42] rounded p-2">
                              <feature.icon size={24} />
                            </div>
                          </div>
                          <h3 className="relative text-white tracking-[0.2px] wrap-break-word text-2xl font-semibold leading-snug">
                            {feature.title}
                          </h3>
                        </header>
                        <div className="pr-4 min-[600px]:pr-8 pl-4 text-[#adbdcc] max-w-[calc(calc(1280px*0.25)*3)] font-light text-base leading-[1.6]">
                          {feature.description}
                        </div>
                        <footer className="pr-4 min-[600px]:pr-8 pl-4">
                          <Button
                            variant={"outline"}
                            className="rounded-full mt-2"
                            size={"sm"}
                          >
                            {feature.cta}
                          </Button>
                        </footer>
                      </section>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSquence;
