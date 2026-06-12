"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

import {
  ActivityIcon,
  Building2Icon,
  CalendarDaysIcon,
  ChevronRightIcon,
  FileTextIcon,
  FlaskConicalIcon,
  HospitalIcon,
  LucideIcon,
  PillIcon,
  StethoscopeIcon,
} from "lucide-react";
import content from "@/content/content";
import TypingAnimation from "../ui/typingText";



const GridCarousel = () => {

  const slides: {
    id: number;
    title: string;
    stats: string;
    description: string;
    products: string[];
    color: string;
    icon: LucideIcon;
    metric: string;
    metricLabel: string;
    action: string;
    queue: string[][];
  }[] = [
    {
      id: 0,
      title: content.GridCarousel.s0Title,
      stats: content.GridCarousel.s0Stats,
      description: content.GridCarousel.s0Desc,
      products: [content.GridCarousel.s0P1, content.GridCarousel.s0P2],
      color: "#00D4FF",
      icon: Building2Icon,
      metric: content.GridCarousel.s0Metric,
      metricLabel: content.GridCarousel.s0MetricLabel,
      action: content.GridCarousel.s0Action,
      queue: [
        [content.GridCarousel.s0Q1L, content.GridCarousel.s0Q1V],
        [content.GridCarousel.s0Q2L, content.GridCarousel.s0Q2V],
        [content.GridCarousel.s0Q3L, content.GridCarousel.s0Q3V],
      ],
    },
    {
      id: 1,
      title: content.GridCarousel.s1Title,
      stats: content.GridCarousel.s1Stats,
      description: content.GridCarousel.s1Desc,
      products: [content.GridCarousel.s1P1, content.GridCarousel.s1P2],
      color: "#27C17B",
      icon: HospitalIcon,
      metric: content.GridCarousel.s1Metric,
      metricLabel: content.GridCarousel.s1MetricLabel,
      action: content.GridCarousel.s1Action,
      queue: [
        [content.GridCarousel.s1Q1L, content.GridCarousel.s1Q1V],
        [content.GridCarousel.s1Q2L, content.GridCarousel.s1Q2V],
        [content.GridCarousel.s1Q3L, content.GridCarousel.s1Q3V],
      ],
    },
    {
      id: 2,
      title: content.GridCarousel.s2Title,
      stats: content.GridCarousel.s2Stats,
      description: content.GridCarousel.s2Desc,
      products: [content.GridCarousel.s2P1, content.GridCarousel.s2P2],
      color: "#F2B84B",
      icon: FlaskConicalIcon,
      metric: content.GridCarousel.s2Metric,
      metricLabel: content.GridCarousel.s2MetricLabel,
      action: content.GridCarousel.s2Action,
      queue: [
        [content.GridCarousel.s2Q1L, content.GridCarousel.s2Q1V],
        [content.GridCarousel.s2Q2L, content.GridCarousel.s2Q2V],
        [content.GridCarousel.s2Q3L, content.GridCarousel.s2Q3V],
      ],
    },
    {
      id: 3,
      title: content.GridCarousel.s3Title,
      stats: content.GridCarousel.s3Stats,
      description: content.GridCarousel.s3Desc,
      products: [content.GridCarousel.s3P1, content.GridCarousel.s3P2],
      color: "#F26D6D",
      icon: StethoscopeIcon,
      metric: content.GridCarousel.s3Metric,
      metricLabel: content.GridCarousel.s3MetricLabel,
      action: content.GridCarousel.s3Action,
      queue: [
        [content.GridCarousel.s3Q1L, content.GridCarousel.s3Q1V],
        [content.GridCarousel.s3Q2L, content.GridCarousel.s3Q2V],
        [content.GridCarousel.s3Q3L, content.GridCarousel.s3Q3V],
      ],
    },
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const active = slides[activeSlide];

  return (
    <section className="relative">
      <div className="overflow-hidden">
        <div className="relative z-1 flex justify-center">
          <div className="w-full max-w-7xl mx-4">
            <div className="py-28">
              <div className="grid gap-y-8 min-[600px]:gap-y-12 min-[900px]:gap-y-16 items-start grid-rows-[auto] grid-cols-[minmax(0,1fr)]">
                <div className="items-start gap-y-8 grid min-[900px]:grid-cols-[3fr_1fr]">
                  <section className="grid gap-y-6 tracking-[0.2px] scroll-mt-27">
                    <header className="grid gap-y-6 max-w-240 grid-cols-[minmax(0,1fr)] pr-4 min-[600px]:pr-8 pl-4">
                      <h2 className="text-[#00d4ff] text-3xl md:text-4xl font-semibold leading-tight">
                        {content.GridCarousel.headerTitle1}
                      </h2>
                      <h1 className="relative text-white tracking-[-0.2px] wrap-break-word text-4xl md:text-5xl font-extrabold leading-tight">
                        {content.GridCarousel.headerTitle2}
                      </h1>
                    </header>

                    <div className="text-gray-300 font-light text-lg leading-[1.555555556] max-w-240 pr-4 min-[600px]:pr-8 pl-4">
                      <TypingAnimation>
                        {content.GridCarousel.headerDescription}
                      </TypingAnimation>
                    </div>

                    <footer className="px-4">
                      <Button
                        variant={"outline"}
                        size={"sm"}
                        className="rounded-full"
                      >
                        {content.GridCarousel.exploreDardiBookForTeams} <ChevronRightIcon />
                      </Button>
                    </footer>
                  </section>
                </div>

                <div>
                  <div className="grid gap-y-8 items-start min-[900px]:grid-cols-[1fr_minmax(0,3fr)]">
                    <aside className="grid gap-y-8 grid-cols-1 grid-flow-row min-[600px]:grid-cols-2 min-[600px]:grid-flow-col min-[600px]:gap-y-0 min-[900px]:grid-cols-1 min-[900px]:grid-flow-row min-[900px]:gap-y-8">
                      <section className="scroll-mt-27 tracking-[0.2px] grid gap-y-2 min-w-full items-start">
                        <header className="relative gap-y-2 grid grid-cols-[minmax(0,1fr)] pl-4 pr-4 min-[60px]:pr-16 min-[900px]:pr-28">
                          <h4 className="relative text-white tracking-[0.2px] wrap-break-word font-medium text-xl leading-[1.33]">
                            <span
                              className="block absolute top-[4.46px] -left-4 w-px h-6"
                              style={{ backgroundColor: active.color }}
                            ></span>
                            {active.stats}
                          </h4>
                        </header>

                        <div className="pl-4 pr-5 text-gray-300 font-light text-base leading-[1.6]">
                          {active.description}
                        </div>
                      </section>

                      <section className="scroll-mt-27 tracking-[0.2px] grid gap-y-2 min-w-full items-start">
                        <header className="relative gap-y-2 grid grid-cols-[minmax(0,1fr)] pl-4 pr-4 min-[60px]:pr-16 min-[900px]:pr-28">
                          <h4 className="relative text-white tracking-[0.2px] wrap-break-word font-medium text-xl leading-[1.33]">
                            <span
                              className="block absolute top-[4.46px] -left-4 w-px h-6"
                              style={{ backgroundColor: active.color }}
                            ></span>
                            {active.title}
                          </h4>
                        </header>

                        <div className="pl-4 pr-5 text-gray-300 font-light text-base leading-[1.6]">
                          {content.GridCarousel.dardibookWorkflow}
                        </div>
                      </section>

                      <section className="scroll-mt-27 tracking-[0.2px] grid gap-y-2 min-w-full">
                        <header className="grid grid-cols-[minmax(0,1fr)] gap-y-2 relative pr-4 min-[600px]:pr-8 pl-4 max-w-240">
                          <h4 className="relative text-white tracking-[0.2px] wrap-break-word font-[425] text-base leading-[1.6]">
                            <span
                              className="block absolute top-1.25 -left-4 w-px h-3.75"
                              style={{ backgroundColor: active.color }}
                            ></span>
                            {content.GridCarousel.modulesUsed}
                          </h4>
                        </header>

                        <footer className="grid gap-y-6 px-4">
                          <ul className="list-none grid p-0 mt-4 overflow-hidden gap-y-3 grid-cols-none">
                            {active.products.map((product) => (
                              <li
                                key={product}
                                className="grid grid-rows-[1fr] grid-cols-[20px_1fr] gap-x-3.5 gap-y-0 items-center"
                              >
                                <div
                                  className="w-5 h-5 rounded"
                                  style={{ backgroundColor: active.color }}
                                ></div>
                                <span>{product}</span>
                              </li>
                            ))}
                          </ul>
                        </footer>
                      </section>

                      <section className="scroll-mt-27 tracking-[0.2px] grid gap-y-2 min-w-full">
                        <header className="grid grid-cols-[minmax(0,1fr)] gap-y-2 relative pr-4 min-[600px]:pr-8 pl-4 max-w-240">
                          <h4 className="relative text-white tracking-[0.2px] wrap-break-word font-[425] text-base leading-[1.6]">
                            <span
                              className="block absolute top-1.25 -left-4 w-px h-3.75"
                              style={{ backgroundColor: active.color }}
                            ></span>
                            {content.GridCarousel.nextBestAction}
                          </h4>
                        </header>

                        <div className="pl-4 pr-5 text-gray-300 font-light text-base leading-[1.6]">
                          {active.action}
                        </div>
                      </section>
                    </aside>

                    <div
                      className="relative min-w-25 min-h-18 rounded-xl border border-white/10 h-115 overflow-hidden bg-white/6"
                      style={{
                        boxShadow:
                          "0 13px 27px -5px rgba(50,50,93,0.25),0 8px 16px -8px rgba(0,0,0,0.3)",
                      }}
                    >
                      <div
                        className="flex w-[400%] h-full transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${activeSlide * 25}%)` }}
                      >
                        {slides.map((slide) => (
                          <div
                            key={slide.id}
                            className="min-w-[25%] h-full p-5 min-[700px]:p-8"
                            style={{ backgroundColor: `${slide.color}20` }}
                          >
                            <div className="flex h-full flex-col rounded-xl bg-[#f6f9fc] text-[#0a2540] overflow-hidden">
                              <div
                                className="h-1 w-full"
                                style={{ backgroundColor: slide.color }}
                              ></div>

                              <div className="flex items-center justify-between border-b border-[#e6ebf1] bg-white px-5 py-4">
                                <div className="flex items-center gap-3">
                                  <div
                                    className="grid h-10 w-10 place-items-center rounded-xl"
                                    style={{
                                      backgroundColor: `${slide.color}24`,
                                      color: slide.color,
                                    }}
                                  >
                                    <slide.icon size={20} />
                                  </div>
                                  <div>
                                    <h3 className="text-lg font-medium leading-tight">
                                      {slide.title}
                                    </h3>
                                    <p className="mt-1 text-xs text-[#727f96]">
                                      {slide.description}
                                    </p>
                                  </div>
                                </div>
                                <span className="hidden rounded-full bg-[#eef3f8] px-3 py-1 text-xs text-[#425466] min-[700px]:block">
                                  Live
                                </span>
                              </div>

                              <div className="grid flex-1 gap-4 p-5">
                                <div className="grid grid-cols-[1fr_120px] gap-4">
                                  <div className="rounded-xl bg-white p-4 shadow-sm">
                                    <p className="text-xs uppercase text-[#727f96]">
                                      {content.GridCarousel.operationalSignal}
                                    </p>
                                    <div className="mt-4 flex items-end gap-3">
                                      <span className="text-4xl font-medium">
                                        {slide.metric}
                                      </span>
                                      <span className="pb-1 text-sm text-[#727f96]">
                                        {slide.metricLabel}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="hidden rounded-xl bg-[#081C4F] p-4 text-white min-[700px]:grid">
                                    <ActivityIcon
                                      className="text-[#00d4ff]"
                                      size={20} 
                                    />
                                    <span className="self-end text-xs leading-5 text-gray-300">
                                      {content.GridCarousel.careFlowVisible}
                                    </span>
                                  </div>
                                </div>

                                <div className="grid gap-3 min-[700px]:grid-cols-[1.1fr_0.9fr]">
                                  <div className="rounded-xl bg-white shadow-sm">
                                    <div className="border-b border-[#e6ebf1] px-4 py-3 text-sm font-medium">
                                      {content.GridCarousel.liveFlow}
                                    </div>
                                    <div>
                                      {slide.queue.map(([label, value]) => (
                                        <div
                                          key={`${label}-${value}`}
                                          className="flex items-center justify-between border-b border-[#e6ebf1] px-4 py-3 last:border-b-0"
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
                                  </div>

                                  <div className="grid gap-3">
                                    {slide.products.map((product) => (
                                      <div
                                        key={product}
                                        className="rounded-xl bg-white p-4 shadow-sm"
                                      >
                                        <div className="flex items-center gap-2">
                                          {product.includes("Report") ||
                                          product.includes("Lab") ? (
                                            <FlaskConicalIcon
                                              size={16}
                                              style={{ color: slide.color }}
                                            />
                                          ) : product.includes("Prescription") ||
                                            product.includes("Follow") ? (
                                            <PillIcon
                                              size={16}
                                              style={{ color: slide.color }}
                                            />
                                          ) : product.includes("Appointment") ||
                                            product.includes("Queue") ? (
                                            <CalendarDaysIcon
                                              size={16}
                                              style={{ color: slide.color }}
                                            />
                                          ) : (
                                            <FileTextIcon
                                              size={16}
                                              style={{ color: slide.color }}
                                            />
                                          )}
                                          <span className="text-sm font-medium">
                                            {product}
                                          </span>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div className="rounded-xl bg-[#081C4F] p-4 text-white">
                                  <p className="text-xs uppercase text-gray-300">
                                    {content.GridCarousel.nextBestAction}
                                  </p>
                                  <div className="mt-2 flex items-center justify-between gap-4">
                                    <span className="text-sm font-medium">
                                      {slide.action}
                                    </span>
                                    <ChevronRightIcon
                                      size={18}
                                      style={{ color: slide.color }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex relative min-w-0 col-span-full mt-10">
                    <ul className="flex items-center justify-center list-none m-0 p-0 min-w-full min-[900px]:grid min-[900px]:grid-flow-col min-[900px]:auto-cols-fr min-[900px]:items-stretch">
                      {slides.map((slide, index) => (
                        <li
                          key={slide.id}
                          className="relative flex items-center justify-center min-[900px]:w-full"
                        >
                          <div className="w-full h-px left-0 absolute -top-5 max-[899px]:hidden">
                            <div
                              className="origin-left h-full w-full top-0 left-0 absolute transition-transform duration-500"
                              style={{
                                backgroundColor: slide.color,
                                transform:
                                  activeSlide === index
                                    ? "scaleX(1)"
                                    : "scaleX(0)",
                              }}
                            ></div>
                          </div>

                          <button
                            className={`cursor-pointer outline-none border-none bg-transparent py-5 px-3 text-sm text-white transition-opacity duration-300 max-[899px]:hidden ${
                              activeSlide === index
                                ? "opacity-100"
                                : "opacity-60 hover:opacity-80"
                            }`}
                            onClick={() => setActiveSlide(index)}
                          >
                            {slide.title}
                          </button>

                          <button
                            aria-label={`Show ${slide.title}`}
                            className="w-6 h-0.5 rounded-[1px] mx-0.5 min-[900px]:hidden cursor-pointer border-none transition-all duration-300"
                            style={{
                              backgroundColor:
                                activeSlide === index
                                  ? slide.color
                                  : "rgba(255,255,255,0.35)",
                            }}
                            onClick={() => setActiveSlide(index)}
                          ></button>
                        </li>
                      ))}
                    </ul>
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

export default GridCarousel;
