"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "../ui/button";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Building2Icon,
  ChevronRightIcon,
  FlaskConicalIcon,
  GraduationCapIcon,
  HeartHandshakeIcon,
  HospitalIcon,
  LucideIcon,
  PillIcon,
  StethoscopeIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const cardsData: {
  id: number;
  title: string;
  eyebrow: string;
  description: string;
  stat: string;
  tags: string[];
  icon: LucideIcon;
}[] = [
  {
    id: 1,
    title: "Clinics & Hospitals",
    eyebrow: "Operations",
    description:
      "Digitize front-desk, consultation, prescription, and follow-up workflows in one practical clinic management system.",
    stat: "One connected desk",
    tags: ["Queues", "Records", "Reports"],
    icon: HospitalIcon,
  },
  {
    id: 2,
    title: "Doctors",
    eyebrow: "Consultation",
    description:
      "Review patient history, write prescriptions, request tests, and continue care with fewer administrative interruptions.",
    stat: "Faster visits",
    tags: ["History", "Rx", "Notes"],
    icon: StethoscopeIcon,
  },
  {
    id: 3,
    title: "Patients",
    eyebrow: "Care journey",
    description:
      "Give patients a smoother journey with organized visits, clearer instructions, digital prescriptions, and timely follow-ups.",
    stat: "Better continuity",
    tags: ["Visits", "Advice", "Follow-up"],
    icon: HeartHandshakeIcon,
  },
  {
    id: 4,
    title: "Pharmacies",
    eyebrow: "Medicine flow",
    description:
      "Read prescription details clearly, reduce manual clarification, and support faster medicine fulfillment.",
    stat: "Clearer Rx",
    tags: ["Dosage", "Medicine", "Refills"],
    icon: PillIcon,
  },
  {
    id: 5,
    title: "Diagnostics",
    eyebrow: "Lab workflow",
    description:
      "Link lab requests and reports with patient visits so doctors can review results in the right clinical context.",
    stat: "Linked reports",
    tags: ["Tests", "Reports", "Review"],
    icon: FlaskConicalIcon,
  },
  {
    id: 6,
    title: "Healthcare Platforms",
    eyebrow: "Ecosystem",
    description:
      "Extend patient engagement and care coordination with modules built around real clinic workflows.",
    stat: "Modular setup",
    tags: ["Integrations", "Teams", "Care"],
    icon: Building2Icon,
  },
  {
    id: 7,
    title: "Medical Institutions",
    eyebrow: "Institutional care",
    description:
      "Support institutional operations with structured case histories, visit records, and repeatable care processes.",
    stat: "Structured cases",
    tags: ["Training", "Cases", "Records"],
    icon: GraduationCapIcon,
  },
];

const totalCards = cardsData.length;

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const updateScrollButtons = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);

      // Sync currentIndex with actual scroll position
      const cardWidth = scrollWidth / totalCards;
      const newIndex = Math.round(scrollLeft / cardWidth);
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    }
  }, [currentIndex]);

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.scrollWidth / totalCards;
      const scrollPosition = cardWidth * index;
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      scrollToCard(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalCards - 1) {
      scrollToCard(currentIndex + 1);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scrollContainerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, [updateScrollButtons]);
  return (
    <section id="modules" className="scroll-mt-28">
      <div className="overflow-hidden relative z-[1] flex justify-center">
        <div className="w-full max-w-7xl mx-auto">
          <div className="py-28">
            <div className="relative grid">
              <div className="grid items-start grid-rows-[auto] grid-cols-[minmax(0,1fr)] gap-y-8 min-[600px]:gap-y-12 min-[900px]:gap-y-16">
                {/* carousel header */}
                <div className="items-end grid gap-y-8 min-[900px]:grid-cols-[3fr_1fr]">
                  <section className="grid gap-y-6 tracking-[0.2px] scroll-mt-[108px]">
                    <header className="relative pl-4 pr-4 min-[600px]:pr-16 min-[900px]:pr-28 grid gap-y-6 grid-cols-[minmax(0,_1fr)] max-w-[calc(calc(1280px*0.25)*3)]">
                      <h1 className="relative text-4xl md:text-5xl font-extrabold leading-tight -tracking-[0.1px] min-[900px]:-tracking-[0.2px] text-white wrap-break-word">
                        Built for every kind of healthcare provider
                      </h1>
                    </header>

                    <div className="pl-4 pr-4 min-[600px]:pr-16 min-[900px]:pr-28 text-gray-300 max-w-[calc(calc(1280px*0.25)*3)] font-light text-lg leading-[1.555555556]">
                      From small clinics to growing hospitals, and from
                      individual doctors to diagnostic labs, DardiBook helps
                      reduce administrative workload while improving patient
                      continuity.
                    </div>
                  </section>

                  <nav className="px-4 hidden justify-start gap-1 min-[600px]:flex min-[600px]:justify-end">
                    <motion.div
                      whileHover={{ scale: canScrollLeft ? 1.1 : 1 }}
                      whileTap={{ scale: canScrollLeft ? 0.95 : 1 }}
                    >
                      <Button
                        variant={"outline"}
                        onClick={handlePrevious}
                        disabled={!canScrollLeft}
                        className={`relative grid place-items-center w-7 h-7 p-0 rounded-full transition-opacity ${
                          canScrollLeft
                            ? "cursor-pointer opacity-100"
                            : "cursor-not-allowed opacity-50"
                        }`}
                      >
                        <ArrowLeftIcon size={16} />
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: canScrollRight ? 1.1 : 1 }}
                      whileTap={{ scale: canScrollRight ? 0.95 : 1 }}
                    >
                      <Button
                        variant={"outline"}
                        onClick={handleNext}
                        disabled={!canScrollRight}
                        className={`relative grid place-items-center w-7 h-7 p-0 rounded-full transition-opacity ${
                          canScrollRight
                            ? "cursor-pointer opacity-100"
                            : "cursor-not-allowed opacity-50"
                        }`}
                      >
                        <ArrowRightIcon size={16} />
                      </Button>
                    </motion.div>
                  </nav>
                </div>

                {/* carousel code */}
                <div className="min-w-0">
                  <div className="flex w-screen min-[1112px]:ml-[calc(calc(calc(100vw-17px)/2-1280px/2)*-1)]">
                    <div
                      ref={scrollContainerRef}
                      className={`relative flex pt-6 pb-32 -mt-8 -mb-32 scroll-px-6 min-[1112px]:scroll-px-[calc(calc(100vw-17px)/2-1280px/2)] overflow-x-scroll overscroll-x-contain select-none ${isDragging ? "cursor-grabbing" : ""}`}
                      style={{
                        scrollSnapType: "x mandatory",
                        WebkitOverflowScrolling: "touch",
                      }}
                      onScroll={updateScrollButtons}
                      onMouseDown={handleMouseDown}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseUp}
                    >
                      <div className="min-w-6 min-[1112px]:min-w-[calc(calc(100vw-17px)/2-1280px/2)] snap-align-none m-0 h-[1px]"></div>

                      {cardsData.map((card, index) => (
                        <div
                          key={card.id}
                          className="snap-start grid min-w-[calc(calc(100vw-17px)-16px*2)] min-[1112px]:min-w-[calc(1280px/2)]"
                        >
                          <div className="mr-6 relative min-w-[100px] min-h-[72px] rounded-[8px] border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/20 overflow-hidden">
                            <div className="absolute inset-x-0 top-0 h-1 bg-[#00d4ff] opacity-80"></div>
                            <div className="relative grid min-h-[390px] grid-rows-[auto_1fr_auto] gap-y-8 p-6 min-[900px]:min-h-[430px] min-[900px]:p-10">
                              <div className="flex items-start justify-between gap-4">
                                <div className="grid h-12 w-12 place-items-center rounded-[8px] bg-[#00d4ff24] text-[#00d4ff]">
                                  <card.icon size={24} />
                                </div>
                                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300">
                                  0{index + 1}
                                </span>
                              </div>

                              <section className="grid content-start gap-y-4 -tracking-[0.2px] scroll-mt-[108px]">
                                <p className="text-[#00d4ff] text-sm font-medium leading-none">
                                  {card.eyebrow}
                                </p>
                                <h3 className="w-full relative text-white tracking-normal wrap-break-word text-2xl font-semibold leading-[36px]">
                                  {card.title}
                                </h3>

                                <div className="pr-3 text-gray-300 w-full leading-7">
                                  {card.description}
                                </div>
                              </section>

                              <div className="grid gap-y-5">
                                <div className="rounded-[8px] bg-[#081C4F]/70 p-4">
                                  <p className="text-xs uppercase text-gray-300">
                                    Best outcome
                                  </p>
                                  <p className="mt-2 text-white font-medium">
                                    {card.stat}
                                  </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                  {card.tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="rounded-full bg-white/10 px-3 py-1 text-xs text-[#d6e2ef]"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>

                                <p className="font-[425] text-base leading-[1.6] flex flex-row gap-1 items-center text-white">
                                  Explore workflow{" "}
                                  <ChevronRightIcon size={18} />
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="min-w-6 min-[1112px]:min-w-[calc(calc(100vw-17px)/2-1280px/2)] snap-align-none m-0 h-[1px]"></div>
                    </div>
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

export default CardCarousel;
