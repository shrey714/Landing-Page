"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "../ui/button";
import {
  ActivityIcon,
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
import content from "@/content/content";
import TypingAnimation from "../ui/typingText";




const CardCarousel = () => {

  const cardsData = [
    {
      id: 1,
      title: content.CardCarousel.c1Title,
      eyebrow: content.CardCarousel.c1Eyebrow,
      description: content.CardCarousel.c1Desc,
      stat: content.CardCarousel.c1Stat,
      tags: [content.CardCarousel.c1T1, content.CardCarousel.c1T2, content.CardCarousel.c1T3],
      icon: HospitalIcon,
      color: "#00D4FF",
    },
    {
      id: 2,
      title: content.CardCarousel.c2Title,
      eyebrow: content.CardCarousel.c2Eyebrow,
      description: content.CardCarousel.c2Desc,
      stat: content.CardCarousel.c2Stat,
      tags: [content.CardCarousel.c2T1, content.CardCarousel.c2T2, content.CardCarousel.c2T3],
      icon: StethoscopeIcon,
      color: "#27C17B",
    },
    {
      id: 3,
      title: content.CardCarousel.c3Title,
      eyebrow: content.CardCarousel.c3Eyebrow,
      description: content.CardCarousel.c3Desc,
      stat: content.CardCarousel.c3Stat,
      tags: [content.CardCarousel.c3T1, content.CardCarousel.c3T2, content.CardCarousel.c3T3],
      icon: HeartHandshakeIcon,
      color: "#F2B84B",
    },
    {
      id: 4,
      title: content.CardCarousel.c4Title,
      eyebrow: content.CardCarousel.c4Eyebrow,
      description: content.CardCarousel.c4Desc,
      stat: content.CardCarousel.c4Stat,
      tags: [content.CardCarousel.c4T1, content.CardCarousel.c4T2, content.CardCarousel.c4T3],
      icon: PillIcon,
      color: "#F26D6D",
    },
    {
      id: 5,
      title: content.CardCarousel.c5Title,
      eyebrow: content.CardCarousel.c5Eyebrow,
      description: content.CardCarousel.c5Desc,
      stat: content.CardCarousel.c5Stat,
      tags: [content.CardCarousel.c5T1, content.CardCarousel.c5T2, content.CardCarousel.c5T3],
      icon: FlaskConicalIcon,
      color: "#9B8CFF",
    },
    {
      id: 6,
      title: content.CardCarousel.c6Title,
      eyebrow: content.CardCarousel.c6Eyebrow,
      description: content.CardCarousel.c6Desc,
      stat: content.CardCarousel.c6Stat,
      tags: [content.CardCarousel.c6T1, content.CardCarousel.c6T2, content.CardCarousel.c6T3],
      icon: Building2Icon,
      color: "#635BFF",
    },
    {
      id: 7,
      title: content.CardCarousel.c7Title,
      eyebrow: content.CardCarousel.c7Eyebrow,
      description: content.CardCarousel.c7Desc,
      stat: content.CardCarousel.c7Stat,
      tags: [content.CardCarousel.c7T1, content.CardCarousel.c7T2, content.CardCarousel.c7T3],
      icon: GraduationCapIcon,
      color: "#FF66A1",
    },
  ];

const totalCards = cardsData.length;

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
      <div className="overflow-hidden relative z-1 flex justify-center">
        <div className="w-full max-w-7xl mx-auto">
          <div className="py-28">
            <div className="relative grid">
              <div className="grid items-start grid-rows-[auto] grid-cols-[minmax(0,1fr)] gap-y-8 min-[600px]:gap-y-12 min-[900px]:gap-y-16">
                {/* carousel header */}
                <div className="items-end grid gap-y-8 min-[900px]:grid-cols-[3fr_1fr]">
                  <section className="grid gap-y-6 tracking-[0.2px] scroll-mt-27">
                    <header className="relative pl-4 pr-4 min-[600px]:pr-16 min-[900px]:pr-28 grid gap-y-6 grid-cols-[minmax(0,1fr)] max-w-240">
                      <h1 className="relative text-4xl md:text-5xl font-extrabold leading-tight tracking-[-0.1px] min-[900px]:tracking-[-0.2px] wrap-break-word">
                        {content.CardCarousel.headerTitle}
                      </h1>
                    </header>

                    <TypingAnimation className="pl-4 pr-4 min-[600px]:pr-16 min-[900px]:pr-28 text-accent-foreground max-w-240 font-light text-lg leading-[1.555555556]">
                      {content.CardCarousel.headerDescription}
                    </TypingAnimation>
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
                  <div className="flex w-screen min-[1112px]:-ml-[calc(calc(100vw-17px)/2-1280px/2)]">
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
                      <div className="min-w-6 min-[1112px]:min-w-[calc(calc(100vw-17px)/2-1280px/2)] snap-align-none m-0 h-px"></div>

                      {cardsData.map((card, index) => (
                        <motion.div
                          key={card.id}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="snap-start grid min-w-[calc(calc(100vw-17px)-16px*2)] min-[1112px]:min-w-160"
                        >
                          <div
                            className="mr-6 shadow-lg group relative min-w-25 min-h-18 rounded-3xl border border-white/10 bg-[#061233] overflow-hidden transition-all duration-300"
                            style={{
                              // boxShadow: "0 20px 40px -15px rgba(0,0,0,0.5)",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = `${card.color}50`;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                            }}
                          >
                            {/* Top visual area with Custom SVG Graphics */}
                            <div
                              className="h-40 w-full absolute overflow-hidden"
                              style={{
                                background: `linear-gradient(135deg, ${card.color}20 0%, rgba(6, 18, 51, 0) 100%)`,
                              }}
                            >
                              <CardIllustration color={card.color} id={card.id} />
                              {/* Subtle gradient overlay at the bottom to blend with content */}
                              <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#061233] to-transparent"></div>
                            </div>

                            <div className="relative grid min-h-70 grid-rows-[auto_1fr_auto] gap-y-6 px-6 py-6 min-[900px]:min-h-80 min-[900px]:px-8 min-[900px]:pb-8">
                              <div className="flex items-start justify-between gap-4 mb-2 relative z-10">
                                <div
                                  className="grid h-16 w-16 place-items-center rounded-2xl shadow-xl border border-white/10 backdrop-blur-md"
                                  style={{
                                    backgroundColor: `${card.color}20`,
                                    color: card.color,
                                  }}
                                >
                                  <card.icon size={32} />
                                </div>
                                <span className="rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-gray-300">
                                  0{index + 1}
                                </span>
                              </div>

                              <section className="grid content-start gap-y-3 tracking-[-0.2px] scroll-mt-27 mt-2">
                                <p
                                  className="text-sm font-semibold uppercase tracking-wider"
                                  style={{ color: card.color }}
                                >
                                  {card.eyebrow}
                                </p>
                                <h3 className="w-full relative text-white tracking-normal wrap-break-word text-2xl font-bold leading-tight">
                                  {card.title}
                                </h3>

                                <div className="pr-3 text-gray-300 w-full leading-relaxed text-sm">
                                  {card.description}
                                </div>
                              </section>

                              <div className="grid gap-y-5 mt-auto">
                                <div className="rounded-xl border border-white/5 bg-white/5 p-4 shadow-inner">
                                  <p className="text-[11px] uppercase tracking-widest text-gray-400 font-medium">
                                    Best outcome
                                  </p>
                                  <p className="mt-1.5 text-white font-semibold flex items-center gap-2 text-base">
                                    <ActivityIcon
                                      size={16}
                                      style={{ color: card.color }}
                                    />
                                    {card.stat}
                                  </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                  {card.tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="rounded-md border px-2.5 py-1 text-xs font-medium"
                                      style={{
                                        backgroundColor: `${card.color}10`,
                                        borderColor: `${card.color}30`,
                                        color: "#e2e8f0",
                                      }}
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>

                                <div
                                  className="group/btn cursor-pointer inline-flex w-fit items-center gap-2 text-sm font-medium transition-colors mt-2"
                                  style={{ color: card.color }}
                                >
                                  Explore workflow{" "}
                                  <ChevronRightIcon
                                    size={16}
                                    className="transition-transform group-hover/btn:translate-x-1"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}

                      <div className="min-w-6 min-[1112px]:min-w-[calc(calc(100vw-17px)/2-1280px/2)] snap-align-none m-0 h-px"></div>
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

// Dynamic SVG Background component that changes based on card ID
const CardIllustration = ({ color, id }: { color: string; id: number }) => {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 160"
      preserveAspectRatio="none"
    >
      <defs>
        <radialGradient id={`glow-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        <pattern
          id={`grid-pattern-${id}`}
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <rect
            width="24"
            height="24"
            fill="none"
            stroke="white"
            strokeWidth="1"
            strokeOpacity="0.04"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#grid-pattern-${id})`} />
      

    </svg>
  );
};

export default CardCarousel;
