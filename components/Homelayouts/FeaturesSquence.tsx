import React from "react";
import { Button } from "../ui/button";
import {
  CalendarDaysIcon,
  ClipboardPlusIcon,
  FlaskConicalIcon,
  LockKeyholeIcon,
} from "lucide-react";
import content from "@/content/content";
import TypingAnimation from "../ui/typingText";

const FeaturesSquence = () => {
  const features = [
    {
      title: content.FeaturesSequence.f1Title,
      description: content.FeaturesSequence.f1Desc,
      cta: content.FeaturesSequence.f1Cta,
      icon: ClipboardPlusIcon,
    },
    {
      title: content.FeaturesSequence.f2Title,
      description: content.FeaturesSequence.f2Desc,
      cta: content.FeaturesSequence.f2Cta,
      icon: CalendarDaysIcon,
    },
    {
      title: content.FeaturesSequence.f3Title,
      description: content.FeaturesSequence.f3Desc,
      cta: content.FeaturesSequence.f3Cta,
      icon: FlaskConicalIcon,
    },
    {
      title: content.FeaturesSequence.f4Title,
      description: content.FeaturesSequence.f4Desc,
      cta: content.FeaturesSequence.f4Cta,
      icon: LockKeyholeIcon,
    },
  ];

  return (
    <section className="relative mb-[calc(calc(calc(100vw-17px)*0.106))] my-10 md:my-28">
      <div className="overflow-hidden">
        <div className="absolute w-full h-full overflow-visible">
          <div className="relative h-full max-h-none w-full top-0 left-0 bg-background/70 overflow-hidden transform-[skewY(-6deg)]"></div>
        </div>
        <div className="relative z-1 flex justify-center">
          <div className="w-full max-w-[calc(calc(100vw-17px)-16px*2)] min-[1112px]:max-w-7xl mx-4">
            <div className="py-28 lg:py-52">
              <div className="grid gap-y-24 items-start grid-rows-[auto] grid-cols-[minmax(0,1fr)]">
                <div className="grid gap-y-8 items-start min-[600px]:grid-cols-2">
                  <section className="scroll-mt-27 tracking-[0.2px] grid gap-y-6">
                    <header className="gris gap-y-6 max-w-240 pr-4 min-[600px]:pr-16 pl-4 relative grid-cols-[minmax(0,1fr)]">
                      <h2 className="text-[#00d4ff] text-3xl md:text-4xl font-semibold leading-tight">
                        {content.FeaturesSequence.headerSubtitle}
                      </h2>
                      <h1 className="relative tracking-[-0.1px] min-[1112px]:tracking-[-0.2px] wrap-break-word text-4xl md:text-5xl font-extrabold leading-tight">
                        {content.FeaturesSequence.headerTitle}
                      </h1>
                    </header>

                    <TypingAnimation className="pr-4 min-[600px]:pr-16 pl-4 text-accent-foreground max-w-240 font-light text-lg leading-[1.555555556]">
                      {content.FeaturesSequence.headerDesc}
                    </TypingAnimation>

                    <footer className="pr-4 min-[600px]:pr-16 pl-4">
                      <Button
                        variant={"outline"}
                        className="rounded-full"
                        size={"sm"}
                      >
                        {content.FeaturesSequence.exploreModules}
                      </Button>
                    </footer>
                  </section>
                  <figure className="w-full flex items-center justify-center">
                    <div className="aspect-square w-4/5 md:w-122.5 rounded-xl border border-white/10 bg-[#081C4F]/70 p-5 shadow-2xl shadow-black/20">
                      <div className="flex h-full flex-col rounded-xl bg-white p-5 text-[#0a2540]">
                        <div className="flex items-center justify-between border-b border-[#e6ebf1] pb-4">
                          <div>
                            <p className="text-xs uppercase text-[#727f96]">
                              {content.FeaturesSequence.todayLabel}
                            </p>
                            <h3 className="mt-1 text-2xl font-semibold leading-snug">
                              {content.FeaturesSequence.clinicDeskTitle}
                            </h3>
                          </div>
                          <span className="rounded bg-[#00d4ff24] px-2 py-1 text-xs text-[#0a728a]">
                            {content.FeaturesSequence.liveLabel}
                          </span>
                        </div>

                        <div className="mt-5 grid gap-3">
                          {[
                            [content.FeaturesSequence.waitingLabel, content.FeaturesSequence.waitingValue],
                            [content.FeaturesSequence.prescriptionsLabel, content.FeaturesSequence.prescriptionsValue],
                            [content.FeaturesSequence.labReportsLabel, content.FeaturesSequence.labReportsValue],
                          ].map(([label, value]) => (
                            <div
                              key={label}
                              className="flex items-center justify-between rounded-xl bg-[#f6f9fc] px-4 py-3"
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

                        <div className="mt-auto rounded-xl bg-[#081C4F] p-4 text-white">
                          <p className="text-sm text-gray-300">
                            {content.FeaturesSequence.nextConsultationLabel}
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
                        className="grid gap-y-2 tracking-[0.2px] scroll-mt-27"
                      >
                        <header className="relative grid gap-y-2 max-w-240 pr-4 min-[600px]:pr-8 pl-4 grid-cols-[minmax(0,1fr)]">
                          <div className="min-h-10 flex items-end mb-2">
                            <div className="rounded p-2 bg-[#00d4ff24] text-[#00d4ff]">
                              <feature.icon size={24} />
                            </div>
                          </div>
                          <h3 className="relative tracking-[0.2px] wrap-break-word text-2xl font-semibold leading-snug">
                            {feature.title}
                          </h3>
                        </header>
                        <div className="pr-4 min-[600px]:pr-8 pl-4 text-accent-foreground max-w-240 font-light text-base leading-[1.6] line-clamp-4">
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
