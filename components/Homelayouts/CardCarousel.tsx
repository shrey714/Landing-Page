"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const totalCards = 7;

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

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

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);
  return (
    <section>
      <div className="overflow-hidden relative z-[1] flex justify-center">
        <div className="w-full max-w-7xl mx-auto">
          <div className="py-28">
            <div className="relative grid">
              <div className="grid items-start grid-rows-[auto] grid-cols-[minmax(0,1fr)] gap-y-8 min-[600px]:gap-y-12 min-[900px]:gap-y-16">
                {/* carousel header */}
                <div className="items-end grid gap-y-8 min-[900px]:grid-cols-[3fr_1fr]">
                  <section className="grid gap-y-6 tracking-[0.2px] scroll-mt-[108px]">
                    <header className="relative pl-4 pr-4 min-[600px]:pr-16 min-[900px]:pr-28 grid gap-y-6 grid-cols-[minmax(0,_1fr)] max-w-[calc(calc(1080px*0.25)*3)]">
                      <h1 className="relative font-medium text-[34px] min-[900px]:text-[38px] leading-[1.294117647] min-[900px]:leading-[1.263157895] -tracking-[0.1px] min-[900px]:-tracking-[0.2px] text-white  wrap-break-word">
                        Support for any business type
                      </h1>
                    </header>

                    <div className="pl-4 pr-4 min-[600px]:pr-16 min-[900px]:pr-28 text-[#a0a0a0] max-w-[calc(calc(1080px*0.25)*3)] font-light text-[18px] leading-[1.555555556]">
                      From global AI companies to category-defining
                      marketplaces, successful businesses across industries grow
                      and scale with Stripe.
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
                  <div className="flex w-[calc(100vw-17px)] -ml-6 min-[1112px]:ml-[calc(calc(calc(100vw-17px)/2-1280px/2)*-1)]">
                    <div
                      ref={scrollContainerRef}
                      className="relative flex pt-6 pb-32 -mt-8 -mb-32 scroll-px-6 min-[1112px]:scroll-px-[calc(calc(100vw-17px)/2-1280px/2)] overflow-x-scroll overscroll-x-contain"
                      style={{
                        scrollSnapType: "x mandatory",
                        WebkitOverflowScrolling: "touch",
                      }}
                      onScroll={updateScrollButtons}
                    >
                      <div className="min-w-6 min-[1112px]:min-w-[calc(calc(100vw-17px)/2-1280px/2)] snap-align-none m-0 h-[1px]"></div>

                      {Array.from({ length: 7 }).map((_, index) => (
                        <div
                          key={index}
                          className="snap-start grid min-w-[calc(calc(100vw-17px)-16px*2)] min-[1112px]:min-w-[calc(1280px/2)]"
                        >
                          <div className="border-2 shadow-md bg-[#081C4F] flex flex-col mr-6 relative min-w-[100px] min-h-[72px] rounded-[8px]">
                            <a
                              className="font-[425] cursor-pointer outline-none transition-[color,opacity] duration-[150ms] ease-[cubic-bezier(0.215,0.61,0.355,1)]"
                              href="#"
                            >
                              <div className="pt-10 pb-10 px-6 min-[900px]:pt-20 min-[900px]:px-10 min-[900px]:pb-[68px]">
                                <section className="grid gap-y-4 -tracking-[0.2px] scroll-mt-[108px]">
                                  <h1 className="w-full relative text-white tracking-normal wrap-break-word font-[425] text-[28px] leading-[36px]">
                                    AI
                                  </h1>

                                  <div className="pr-3 text-[#a0a0a0] w-full">
                                    Stripe supports businesses across the AI
                                    ecosystem – from usage-based billing for AI
                                    assistants like Perplexity to premium
                                    subscriptions for infrastructure providers
                                    like OpenAI.
                                  </div>
                                </section>
                              </div>
                            </a>
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
