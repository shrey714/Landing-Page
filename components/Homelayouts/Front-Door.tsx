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
import content from "@/content/content";
import TypingAnimation from "../ui/typingText";

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
      const triggerLine = window.innerHeight / 2;
      let activeIndex = 0;

      headingRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        if (rect.top <= triggerLine) {
          activeIndex = index;
        }
      });

      setActiveGif(activeIndex + 1);
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
      <div className="relative z-1 flex justify-center">
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
                className="grid items-center min-[600px]:grid-cols-1 min-[900px]:grid-cols-2 gap-y-8 min-[900px]:max-h-225"
              >
                <section className="grid gap-y-8 tracking-[0.2px] scroll-mt-27">
                  <header className="relative grid grid-cols-[minmax(0,1fr)] gap-y-8 pl-4 pr-4 min-[600px]:pr-16 max-w-202.5">
                    <h2 className="text-[#635bff] text-3xl md:text-4xl font-semibold leading-tight">
                      {content.FrontDoor.h1Title}
                    </h2>

                    <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white tracking-[-0.02em] wrap-break-word">
                      {content.FrontDoor.h1Subtitle}
                    </h1>
                  </header>

                  <div className="pl-4 pr-4 min-[600px]:pr-16 font-light text-lg leading-[1.555555556] text-gray-300 max-w-202.5">
                    <TypingAnimation>
                      {content.FrontDoor.h1Desc}
                    </TypingAnimation>
                  </div>
                </section>

                <figure className="relative self-start hidden min-[900px]:block">
                  <div
                    className="absolute top-0 left-0 w-full"
                    style={{ height: divHeight }}
                  >
                    {/* main gif shower */}
                    <div className="sticky aspect-square top-[calc(50%-270px)] overflow-hidden mx-auto max-w-135">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeGif}
                          initial={{ opacity: 0.4, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0.4, scale: 0.9 }}
                          transition={{ duration: 0.15, ease: "easeInOut" }}
                          className="w-full h-full"
                        >
                          <ProductPanel panelNumber={activeGif} />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </figure>
                <figure className="relative self-start grid min-[900px]:hidden px-4">
                  <div className="aspect-square overflow-hidden rounded-xl">
                    <ProductPanel panelNumber={1} />
                  </div>
                </figure>
              </div>

              <div
                id="heading2"
                ref={setHeadingRef(1)}
                className="grid items-center min-[600px]:grid-cols-1 min-[900px]:grid-cols-2 gap-y-8 min-[900px]:max-h-225 min-[900px]:py-10"
              >
                <section className="grid gap-y-6 tracking-[0.2px] scroll-mt-27">
                  <header className="relative grid grid-cols-[minmax(0,1fr)] gap-y-4 pl-4 pr-4 min-[600px]:pr-16 max-w-202.5">
                    <h2 className="text-[#635bff] text-3xl md:text-4xl font-semibold leading-tight">
                      {content.FrontDoor.h2Title}
                    </h2>

                    <h2 className="relative text-3xl md:text-4xl font-extrabold leading-tight text-white tracking-[-0.02em] wrap-break-word">
                      {content.FrontDoor.h2Subtitle}
                    </h2>
                  </header>

                  <div className="pl-4 pr-4 min-[600px]:pr-16 font-light text-lg leading-[1.555555556] text-gray-300 max-w-202.5">
                    <TypingAnimation>
                      {content.FrontDoor.h2Desc}
                    </TypingAnimation>
                  </div>

                  <footer className="grid px-4 auto-cols-fr tracking-[0.2px] font-light text-base leading-[1.6]">
                    <h1 className="mb-2 text-white text-2xl font-semibold tracking-[-0.2px]">
                      {content.FrontDoor.seeAlso}
                    </h1>
                    <ul className="list-none">
                      <TypingAnimation className="my-1 text-gray-300">
                        {content.FrontDoor.h2List1}
                      </TypingAnimation>
                      <TypingAnimation className="my-1 text-gray-300">
                        {content.FrontDoor.h2List2}
                      </TypingAnimation>
                      <TypingAnimation className="my-1 text-gray-300">
                        {content.FrontDoor.h2List3}
                      </TypingAnimation>
                    </ul>
                  </footer>
                </section>
                <figure className="relative self-start grid min-[900px]:hidden px-4">
                  <div className="aspect-square overflow-hidden rounded-xl">
                    <ProductPanel panelNumber={2} />
                  </div>
                </figure>
              </div>

              <div
                id="heading3"
                ref={setHeadingRef(2)}
                className="grid items-center min-[600px]:grid-cols-1 min-[900px]:grid-cols-2 gap-y-8 min-[900px]:max-h-225 min-[900px]:py-10"
              >
                <section className="grid gap-y-6 tracking-[0.2px] scroll-mt-27">
                  <header className="relative grid grid-cols-[minmax(0,1fr)] gap-y-4 pl-4 pr-4 min-[600px]:pr-16 max-w-202.5">
                    <h2 className="text-[#635bff] text-3xl md:text-4xl font-semibold leading-tight">
                      {content.FrontDoor.h3Title}
                    </h2>

                    <h2 className="relative font-medium text-3xl leading-[1.294117647] text-white tracking-[-0.02em] wrap-break-word">
                      {content.FrontDoor.h3Subtitle}
                    </h2>
                  </header>

                  <div className="pl-4 pr-4 min-[600px]:pr-16 font-light text-lg leading-[1.555555556] text-gray-300 max-w-202.5">
                    <TypingAnimation>
                      {content.FrontDoor.h3Desc}
                    </TypingAnimation>
                  </div>

                  <footer className="grid px-4 auto-cols-fr tracking-[0.2px] font-light text-base leading-[1.6]">
                    <h1 className="mb-2 text-white font-[425] tracking-[-0.2px]">
                      {content.FrontDoor.seeAlso}
                    </h1>
                    <ul className="list-none">
                      <TypingAnimation className="my-1 text-gray-300">
                        {content.FrontDoor.h3List1}
                      </TypingAnimation>
                      <TypingAnimation className="my-1 text-gray-300">
                        {content.FrontDoor.h3List2}
                      </TypingAnimation>
                      <TypingAnimation className="my-1 text-gray-300">
                        {content.FrontDoor.h3List3}
                      </TypingAnimation>
                    </ul>
                  </footer>
                </section>
                <figure className="relative self-start grid min-[900px]:hidden px-4">
                  <div className="aspect-square overflow-hidden rounded-xl">
                    <ProductPanel panelNumber={3} />
                  </div>
                </figure>
              </div>

              <div
                id="heading4"
                ref={setHeadingRef(3)}
                className="grid items-center min-[600px]:grid-cols-1 min-[900px]:grid-cols-2 gap-y-8 min-[900px]:max-h-225 min-[900px]:py-10"
              >
                <section className="grid gap-y-6 tracking-[0.2px] scroll-mt-27">
                  <header className="relative grid grid-cols-[minmax(0,1fr)] gap-y-4 pl-4 pr-4 min-[600px]:pr-16 max-w-202.5">
                    <h2 className="text-[#635bff] text-3xl md:text-4xl font-semibold leading-tight">
                      {content.FrontDoor.h4Title}
                    </h2>

                    <h2 className="relative font-medium text-3xl leading-[1.294117647] text-white tracking-[-0.02em] wrap-break-word">
                      {content.FrontDoor.h4Subtitle}
                    </h2>
                  </header>

                  <div className="pl-4 pr-4 min-[600px]:pr-16 font-light text-lg leading-[1.555555556] text-gray-300 max-w-202.5">
                    <TypingAnimation>
                      {content.FrontDoor.h4Desc}
                    </TypingAnimation>
                  </div>

                  <footer className="grid px-4 auto-cols-fr tracking-[0.2px] font-light text-base leading-[1.6]">
                    <h1 className="mb-2 text-white font-[425] tracking-[-0.2px]">
                      {content.FrontDoor.seeAlso}
                    </h1>
                    <ul className="list-none">
                      <TypingAnimation className="my-1 text-gray-300">
                        {content.FrontDoor.h4List1}
                      </TypingAnimation>
                      <TypingAnimation className="my-1 text-gray-300">
                        {content.FrontDoor.h4List2}
                      </TypingAnimation>
                      <TypingAnimation className="my-1 text-gray-300">
                        {content.FrontDoor.h4List3}
                      </TypingAnimation>
                    </ul>
                  </footer>
                </section>
                <figure className="relative self-start grid min-[900px]:hidden px-4">
                  <div className="aspect-square overflow-hidden rounded-xl">
                    <ProductPanel panelNumber={4} />
                  </div>
                </figure>
              </div>

              <div
                id="heading5"
                ref={setHeadingRef(4)}
                className="grid items-center min-[600px]:grid-cols-1 min-[900px]:grid-cols-2 gap-y-8 min-[900px]:max-h-225 pb-20"
              >
                <section className="grid gap-y-6 tracking-[0.2px] scroll-mt-27">
                  <header className="relative grid grid-cols-[minmax(0,1fr)] gap-y-4 pl-4 pr-4 min-[600px]:pr-16 max-w-202.5">
                    <h2 className="text-[#635bff] text-3xl md:text-4xl font-semibold leading-tight">
                      {content.FrontDoor.h5Title}
                    </h2>

                    <h2 className="relative font-medium text-3xl leading-[1.294117647] text-white tracking-[-0.02em] wrap-break-word">
                      {content.FrontDoor.h5Subtitle}
                    </h2>
                  </header>

                  <div className="pl-4 pr-4 min-[600px]:pr-16 font-light text-lg leading-[1.555555556] text-gray-300 max-w-202.5">
                    <TypingAnimation>
                      {content.FrontDoor.h5Desc}
                    </TypingAnimation>
                  </div>

                  <footer className="grid px-4 auto-cols-fr tracking-[0.2px] font-light text-base leading-[1.6]">
                    <h1 className="mb-2 text-white font-[425] tracking-[-0.2px]">
                      {content.FrontDoor.seeAlso}
                    </h1>
                    <ul className="list-none">
                      <TypingAnimation className="my-1 text-gray-300">
                        {content.FrontDoor.h5List1}
                      </TypingAnimation>
                      <TypingAnimation className="my-1 text-gray-300">
                        {content.FrontDoor.h5List2}
                      </TypingAnimation>
                      <TypingAnimation className="my-1 text-gray-300">
                        {content.FrontDoor.h5List3}
                      </TypingAnimation>
                    </ul>
                  </footer>
                </section>
                <figure className="relative self-start grid min-[900px]:hidden px-4">
                  <div className="aspect-square overflow-hidden rounded-xl">
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


const ProductPanel = ({ panelNumber }: { panelNumber: number }) => {
  const panels = [
    {
      title: content.FrontDoor.p1Title,
      subtitle: content.FrontDoor.p1Subtitle,
      icon: ClipboardListIcon,
      stat: "42",
      statLabel: content.FrontDoor.p1StatLabel,
      accent: "#00D4FF",
      rows: [
        [content.FrontDoor.p1R1C1, content.FrontDoor.p1R1C2, content.FrontDoor.p1R1C3],
        [content.FrontDoor.p1R2C1, content.FrontDoor.p1R2C2, content.FrontDoor.p1R2C3],
        [content.FrontDoor.p1R3C1, content.FrontDoor.p1R3C2, content.FrontDoor.p1R3C3],
      ],
    },
    {
      title: content.FrontDoor.p2Title,
      subtitle: content.FrontDoor.p2Subtitle,
      icon: UserRoundIcon,
      stat: "8",
      statLabel: content.FrontDoor.p2StatLabel,
      accent: "#27C17B",
      rows: [
        [content.FrontDoor.p2R1C1, content.FrontDoor.p2R1C2, content.FrontDoor.p2R1C3],
        [content.FrontDoor.p2R2C1, content.FrontDoor.p2R2C2, content.FrontDoor.p2R2C3],
        [content.FrontDoor.p2R3C1, content.FrontDoor.p2R3C2, content.FrontDoor.p2R3C3],
      ],
    },
    {
      title: content.FrontDoor.p3Title,
      subtitle: content.FrontDoor.p3Subtitle,
      icon: CalendarDaysIcon,
      stat: "14:00",
      statLabel: content.FrontDoor.p3StatLabel,
      accent: "#F2B84B",
      rows: [
        [content.FrontDoor.p3R1C1, content.FrontDoor.p3R1C2, content.FrontDoor.p3R1C3],
        [content.FrontDoor.p3R2C1, content.FrontDoor.p3R2C2, content.FrontDoor.p3R2C3],
        [content.FrontDoor.p3R3C1, content.FrontDoor.p3R3C2, content.FrontDoor.p3R3C3],
      ],
    },
    {
      title: content.FrontDoor.p4Title,
      subtitle: content.FrontDoor.p4Subtitle,
      icon: PillIcon,
      stat: "28",
      statLabel: content.FrontDoor.p4StatLabel,
      accent: "#F26D6D",
      rows: [
        [content.FrontDoor.p4R1C1, content.FrontDoor.p4R1C2, content.FrontDoor.p4R1C3],
        [content.FrontDoor.p4R2C1, content.FrontDoor.p4R2C2, content.FrontDoor.p4R2C3],
        [content.FrontDoor.p4R3C1, content.FrontDoor.p4R3C2, content.FrontDoor.p4R3C3],
      ],
    },
    {
      title: content.FrontDoor.p5Title,
      subtitle: content.FrontDoor.p5Subtitle,
      icon: FlaskConicalIcon,
      stat: "7",
      statLabel: content.FrontDoor.p5StatLabel,
      accent: "#9B8CFF",
      rows: [
        [content.FrontDoor.p5R1C1, content.FrontDoor.p5R1C2, content.FrontDoor.p5R1C3],
        [content.FrontDoor.p5R2C1, content.FrontDoor.p5R2C2, content.FrontDoor.p5R2C3],
        [content.FrontDoor.p5R3C1, content.FrontDoor.p5R3C2, content.FrontDoor.p5R3C3],
      ],
    },
  ];
  const panel = panels[panelNumber - 1] ?? panels[0];

  return (
    <div className="h-full w-full rounded-xl border border-white/10 bg-white/6 p-4 shadow-2xl shadow-black/20">
      <div className="flex h-full flex-col overflow-hidden rounded-xl bg-[#f6f9fc] text-[#0a2540]">
        <div
          className="h-1 w-full"
          style={{ backgroundColor: panel.accent }}
        ></div>

        <div className="flex items-center justify-between border-b border-[#e6ebf1] bg-white px-5 py-4">
          <div className="flex items-center gap-3">
            <div
              className="grid h-10 w-10 place-items-center rounded-xl"
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
            {content.FrontDoor.panelLive}
          </div>
        </div>

        <div className="grid flex-1 gap-4 p-5">
          <div className="grid grid-cols-[1fr_auto] gap-4">
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="text-xs uppercase text-[#727f96]">{content.FrontDoor.panelFocusMetric}</p>
              <div className="mt-4 flex items-end gap-3">
                <span className="text-4xl font-medium">{panel.stat}</span>
                <span className="pb-1 text-sm text-[#727f96]">
                  {panel.statLabel}
                </span>
              </div>
            </div>
            <div className="hidden w-24 rounded-xl bg-[#081C4F] p-4 text-white min-[480px]:grid">
              <ShieldCheckIcon className="text-[#00d4ff]" size={20} />
              <span className="self-end text-xs leading-5 text-gray-300">
                {content.FrontDoor.panelRoleBasedAccess}
              </span>
            </div>
          </div>

          <div className="rounded-xl bg-white shadow-sm">
            <div className="flex items-center gap-2 border-b border-[#e6ebf1] px-4 py-3 text-sm text-[#727f96]">
              <SearchIcon size={14} />
              {content.FrontDoor.panelSearchPlaceholder}
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
              [StethoscopeIcon, content.FrontDoor.panelIconDoctor],
              [FileTextIcon, content.FrontDoor.panelIconRecords],
              [FlaskConicalIcon, content.FrontDoor.panelIconLabs],
            ].map(([Icon, label]) => {
              const IconComponent = Icon as typeof StethoscopeIcon;

              return (
                <div
                  key={label as string}
                  className="grid gap-y-2 rounded-xl bg-white p-3 text-center shadow-sm"
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
