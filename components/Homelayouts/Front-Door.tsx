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

                    <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-[-0.02em] wrap-break-word">
                      {content.FrontDoor.h1Subtitle}
                    </h1>
                  </header>

                  <div className="pl-4 pr-4 min-[600px]:pr-16 font-light text-lg leading-[1.555555556] text-accent-foreground max-w-202.5">
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

                    <h2 className="relative text-3xl md:text-4xl font-extrabold leading-tight tracking-[-0.02em] wrap-break-word">
                      {content.FrontDoor.h2Subtitle}
                    </h2>
                  </header>

                  <div className="pl-4 pr-4 min-[600px]:pr-16 font-light text-lg leading-[1.555555556] text-accent-foreground max-w-202.5">
                    <TypingAnimation>
                      {content.FrontDoor.h2Desc}
                    </TypingAnimation>
                  </div>

                  <footer className="grid px-4 auto-cols-fr tracking-[0.2px] font-light text-base leading-[1.6]">
                    <h1 className="mb-2 text-2xl font-semibold tracking-[-0.2px]">
                      {content.FrontDoor.seeAlso}
                    </h1>
                    <ul className="list-none">
                      <TypingAnimation className="my-1 text-accent-foreground">
                        {content.FrontDoor.h2List1}
                      </TypingAnimation>
                      <TypingAnimation className="my-1 text-accent-foreground">
                        {content.FrontDoor.h2List2}
                      </TypingAnimation>
                      <TypingAnimation className="my-1 text-accent-foreground">
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

                    <h2 className="relative font-medium text-3xl leading-[1.294117647] tracking-[-0.02em] wrap-break-word">
                      {content.FrontDoor.h3Subtitle}
                    </h2>
                  </header>

                  <div className="pl-4 pr-4 min-[600px]:pr-16 font-light text-lg leading-[1.555555556] text-accent-foreground max-w-202.5">
                    <TypingAnimation>
                      {content.FrontDoor.h3Desc}
                    </TypingAnimation>
                  </div>

                  <footer className="grid px-4 auto-cols-fr tracking-[0.2px] font-light text-base leading-[1.6]">
                    <h1 className="mb-2 font-[425] tracking-[-0.2px]">
                      {content.FrontDoor.seeAlso}
                    </h1>
                    <ul className="list-none">
                      <TypingAnimation className="my-1 text-accent-foreground">
                        {content.FrontDoor.h3List1}
                      </TypingAnimation>
                      <TypingAnimation className="my-1 text-accent-foreground">
                        {content.FrontDoor.h3List2}
                      </TypingAnimation>
                      <TypingAnimation className="my-1 text-accent-foreground">
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

                    <h2 className="relative font-medium text-3xl leading-[1.294117647] tracking-[-0.02em] wrap-break-word">
                      {content.FrontDoor.h4Subtitle}
                    </h2>
                  </header>

                  <div className="pl-4 pr-4 min-[600px]:pr-16 font-light text-lg leading-[1.555555556] text-accent-foreground max-w-202.5">
                    <TypingAnimation>
                      {content.FrontDoor.h4Desc}
                    </TypingAnimation>
                  </div>

                  <footer className="grid px-4 auto-cols-fr tracking-[0.2px] font-light text-base leading-[1.6]">
                    <h1 className="mb-2 font-[425] tracking-[-0.2px]">
                      {content.FrontDoor.seeAlso}
                    </h1>
                    <ul className="list-none">
                      <TypingAnimation className="my-1 text-accent-foreground">
                        {content.FrontDoor.h4List1}
                      </TypingAnimation>
                      <TypingAnimation className="my-1 text-accent-foreground">
                        {content.FrontDoor.h4List2}
                      </TypingAnimation>
                      <TypingAnimation className="my-1 text-accent-foreground">
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

                    <h2 className="relative font-medium text-3xl leading-[1.294117647] tracking-[-0.02em] wrap-break-word">
                      {content.FrontDoor.h5Subtitle}
                    </h2>
                  </header>

                  <div className="pl-4 pr-4 min-[600px]:pr-16 font-light text-lg leading-[1.555555556] text-accent-foreground max-w-202.5">
                    <TypingAnimation>
                      {content.FrontDoor.h5Desc}
                    </TypingAnimation>
                  </div>

                  <footer className="grid px-4 auto-cols-fr tracking-[0.2px] font-light text-base leading-[1.6]">
                    <h1 className="mb-2 font-[425] tracking-[-0.2px]">
                      {content.FrontDoor.seeAlso}
                    </h1>
                    <ul className="list-none">
                      <TypingAnimation className="my-1 text-accent-foreground">
                        {content.FrontDoor.h5List1}
                      </TypingAnimation>
                      <TypingAnimation className="my-1 text-accent-foreground">
                        {content.FrontDoor.h5List2}
                      </TypingAnimation>
                      <TypingAnimation className="my-1 text-accent-foreground">
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
    },
    {
      title: content.FrontDoor.p2Title,
      subtitle: content.FrontDoor.p2Subtitle,
      icon: UserRoundIcon,
      stat: "8",
      statLabel: content.FrontDoor.p2StatLabel,
      accent: "#27C17B",
    },
    {
      title: content.FrontDoor.p3Title,
      subtitle: content.FrontDoor.p3Subtitle,
      icon: CalendarDaysIcon,
      stat: "14:00",
      statLabel: content.FrontDoor.p3StatLabel,
      accent: "#F2B84B",
    },
    {
      title: content.FrontDoor.p4Title,
      subtitle: content.FrontDoor.p4Subtitle,
      icon: PillIcon,
      stat: "28",
      statLabel: content.FrontDoor.p4StatLabel,
      accent: "#F26D6D",
    },
    {
      title: content.FrontDoor.p5Title,
      subtitle: content.FrontDoor.p5Subtitle,
      icon: FlaskConicalIcon,
      stat: "7",
      statLabel: content.FrontDoor.p5StatLabel,
      accent: "#9B8CFF",
    },
  ];
  const panel = panels[panelNumber - 1] ?? panels[0];
  const index = panelNumber - 1;

  return (
    <div className="h-full w-full min-h-112.5 rounded-3xl overflow-hidden flex items-center justify-center flex-col relative bg-linear-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm">
      {/* Ambient Glow */}
      <div
        className="absolute inset-0 opacity-20 blur-[100px]"
        style={{ backgroundColor: panel.accent }}
      />

            {/* Dynamic Animated Scene */}
      <div className="z-10 contents items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`scene-${index}`}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full flex items-center justify-center"
          >
            {index === 0 && <RegistrationScene accent={panel.accent} />}
            {index === 1 && <NetworkScene accent={panel.accent} />}
            {index === 2 && <QueueScene accent={panel.accent} />}
            {index === 3 && <RxScene accent={panel.accent} />}
            {index === 4 && <LabScene accent={panel.accent} />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Central Glass Info Card (Floating) */}
      <motion.div
        className="z-10 m-8 mt-0 w-[stretch] p-5 rounded-2xl bg-white/30 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        key={`text-${index}`}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-white/50 shadow-sm" style={{ color: panel.accent }}>
            <panel.icon size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 leading-tight">{panel.title}</h3>
            <p className="text-xs text-gray-700 font-medium">{panel.subtitle}</p>
          </div>
        </div>
        <div className="flex items-end gap-2 mt-4 ml-1">
          <span 
            className="text-4xl font-black drop-shadow-sm" 
            style={{ color: panel.accent }}
          >
            {panel.stat}
          </span>
          <span className="text-sm text-gray-700 font-medium mb-1 tracking-wide uppercase">{panel.statLabel}</span>
        </div>
      </motion.div>
    </div>
  );
};

const RegistrationScene = ({ accent }: { accent: string }) => (
  <div className="relative w-56 h-64 perspective-1000">
    <motion.div
      className="absolute inset-0 bg-white/30 backdrop-blur-lg border border-white/60 rounded-2xl shadow-2xl flex flex-col p-5 gap-4 overflow-hidden"
      animate={{ rotateY: [-8, 8, -8], rotateX: [4, -4, 4], y: [-10, 10, -10] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="w-1/2 h-3 rounded-full bg-gray-400/30" />
      <div className="w-1/3 h-2 rounded-full bg-gray-400/20 mb-2" />
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="w-full h-2 rounded-full"
          style={{ transformOrigin: "left", backgroundColor: `${accent}50` }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity, repeatDelay: 2 }}
        />
      ))}
      <motion.div
        className="absolute left-0 right-0 h-0.5 shadow-[0_0_12px_2px_currentColor] z-10"
        style={{ backgroundColor: accent, color: accent }}
        animate={{ top: ["10%", "90%", "10%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
         className="absolute bottom-4 right-4 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg border-2"
         style={{ borderColor: accent }}
         initial={{ scale: 0, opacity: 0 }}
         animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
         transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      >
         <ShieldCheckIcon size={24} style={{ color: accent }} />
      </motion.div>
    </motion.div>
  </div>
);

const NetworkScene = ({ accent }: { accent: string }) => (
  <div className="relative w-64 h-64 flex items-center justify-center">
    <motion.div
      className="absolute z-20 w-24 h-24 bg-white/50 backdrop-blur-xl border-4 rounded-full shadow-2xl flex items-center justify-center"
      style={{ borderColor: accent }}
      animate={{ scale: [1, 1.1, 1], boxShadow: [`0 0 0 0 ${accent}60`, `0 0 0 25px ${accent}00`] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <SearchIcon size={40} style={{ color: accent }} />
    </motion.div>
    <motion.div
      className="absolute z-10 w-52 h-52 border-[1.5px] border-dashed rounded-full"
      style={{ borderColor: `${accent}80` }}
      animate={{ rotate: 360 }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
    >
      <div className="absolute -top-5 left-1/2 -ml-5 w-10 h-10 bg-white/90 rounded-full shadow-xl flex items-center justify-center border border-gray-100">
        <UserRoundIcon size={20} style={{ color: accent }} />
      </div>
      <div className="absolute -bottom-5 left-1/2 -ml-5 w-10 h-10 bg-white/90 rounded-full shadow-xl flex items-center justify-center border border-gray-100">
        <StethoscopeIcon size={20} style={{ color: accent }} />
      </div>
    </motion.div>
    <motion.div
      className="absolute z-10 w-72 h-72 border border-dashed rounded-full opacity-50"
      style={{ borderColor: accent }}
      animate={{ rotate: -360 }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
    >
      <div className="absolute top-1/2 -right-5 -mt-5 w-10 h-10 bg-white/90 rounded-full shadow-xl flex items-center justify-center border border-gray-100">
        <FileTextIcon size={20} style={{ color: accent }} />
      </div>
    </motion.div>
  </div>
);

const QueueScene = ({ accent }: { accent: string }) => (
  <div className="relative w-64 h-64 flex flex-col items-center justify-center overflow-hidden" style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}>
    <motion.div
      className="flex flex-col gap-4 absolute w-full px-2"
      animate={{ y: ["0%", "-33.33%"] }}
      transition={{ repeat: Infinity, ease: "linear", duration: 3 }}
    >
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="w-full h-16 bg-white/40 backdrop-blur-md border border-white/60 rounded-xl shadow-md flex items-center px-4 gap-4 shrink-0">
          <div className="w-10 h-10 rounded-lg flex flex-col items-center justify-center bg-white/70 shadow-inner" style={{ color: accent }}>
             <CalendarDaysIcon size={20} />
          </div>
          <div className="flex-1">
            <div className="h-2.5 w-3/4 rounded-full mb-2" style={{ backgroundColor: `${accent}60` }} />
            <div className="h-2 w-1/2 rounded-full" style={{ backgroundColor: `${accent}30` }} />
          </div>
        </div>
      ))}
    </motion.div>
  </div>
);

const RxScene = ({ accent }: { accent: string }) => (
  <div className="relative w-64 h-64 flex items-center justify-center perspective-1000">
    <motion.div
       className="absolute z-20"
       animate={{ y: [-15, 15, -15], rotate: [0, 15, -10, 0] }}
       transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
       <PillIcon size={90} style={{ color: accent }} className="drop-shadow-2xl" />
    </motion.div>
    <motion.div
       className="absolute z-10 w-48 h-64 bg-white/30 backdrop-blur-lg border border-white/60 rounded-2xl shadow-xl p-5"
       transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    >
       <div className="text-3xl font-serif italic font-black mb-6" style={{ color: accent }}>Rx</div>
       <motion.div className="h-2 w-full rounded-full mb-3 origin-left" style={{ backgroundColor: `${accent}40` }} animate={{ scaleX: [0, 1] }} transition={{ duration: 2, repeat: Infinity }} />
       <motion.div className="h-2 w-5/6 rounded-full mb-3 origin-left" style={{ backgroundColor: `${accent}40` }} animate={{ scaleX: [0, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} />
       <motion.div className="h-2 w-4/6 rounded-full origin-left" style={{ backgroundColor: `${accent}40` }} animate={{ scaleX: [0, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} />
    </motion.div>
    {[1, 2, 3].map(i => (
       <motion.div key={i} className="absolute text-4xl font-bold z-0" style={{ color: accent }}
          initial={{ opacity: 0, y: 0, x: (i - 2) * 60 }}
          animate={{ opacity: [0, 0.6, 0], y: -80, rotate: 180 }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
       >
          +
       </motion.div>
    ))}
  </div>
);

const LabScene = ({ accent }: { accent: string }) => (
  <div className="relative w-full h-64 flex items-center justify-center">
    <svg className="absolute w-full h-40 z-10 opacity-60" viewBox="0 0 200 100" preserveAspectRatio="none">
      <motion.path
        d="M 0,50 L 40,50 L 55,20 L 75,90 L 95,10 L 115,80 L 130,50 L 200,50"
        fill="none"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="drop-shadow-[0_0_10px_currentColor]"
      />
    </svg>
    <motion.div
      className="absolute z-20 w-28 h-28 bg-white/40 backdrop-blur-xl border border-white/60 rounded-full shadow-2xl flex flex-col items-center justify-center"
      animate={{ y: [-12, 12, -12] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
    >
       <FlaskConicalIcon size={48} style={{ color: accent }} />
       {[1,2,3,4,5].map(i => (
          <motion.div key={i} className="absolute w-2 h-2 rounded-full" style={{ backgroundColor: accent }}
             initial={{ opacity: 0, y: 10, x: (i-3)*10 }}
             animate={{ opacity: [0, 1, 0], y: -50, scale: [0.5, 1.5, 0.5] }}
             transition={{ duration: 1.5 + Math.random(), repeat: Infinity, delay: i * 0.3 }}
          />
       ))}
    </motion.div>
  </div>
);
