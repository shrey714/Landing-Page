"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ProductGrid } from "./ScrollRevealBoxes/First";

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
                    <h2 className="text-[#635bff] font-medium text-[18px] leading-[1.555555556]">
                      Modular solutions
                    </h2>

                    <h1 className="relative font-medium text-[42px] leading-[50px] min-[600px]:text-[48px] min-[600px]:leading-[56px] min-[900px]:text-[56px] min-[900px]:leading-[68px] text-[#fff] -tracking-[0.02em] wrap-break-word">
                      A fully integrated suite of financial and payments
                      products
                    </h1>
                  </header>

                  <div className="pl-4 pr-4 min-[600px]:pr-16 font-light text-[18px] leading-[1.555555556] text-[#a0a0a0] max-w-[810px]">
                    <p>
                      Reduce costs, grow revenue, and run your business more
                      efficiently on a fully integrated, AI-powered platform.
                      Use Stripe to handle all of your payments-related needs,
                      manage revenue operations, and launch (or invent) new
                      business models.
                    </p>
                  </div>
                </section>

                <figure className="relative self-start">
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
                          <VideoPlayer videoNumber={activeGif} />
                        </motion.div>
                      </AnimatePresence>
                    </div>
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
                    <h2 className="text-[#635bff] font-medium text-[18px] leading-[1.555555556]">
                      Payments
                    </h2>

                    <h1 className="relative font-medium text-[34px] leading-[1.294117647] text-[#fff] -tracking-[0.02em] wrap-break-word">
                      Accept and optimise payments, globally
                    </h1>
                  </header>

                  <div className="pl-4 pr-4 min-[600px]:pr-16 font-light text-[18px] leading-[1.555555556] text-[#a0a0a0] max-w-[810px]">
                    <p>
                      Increase authorisation rates, offer local payment methods
                      to boost conversion, and reduce fraud using AI.
                    </p>
                  </div>

                  <footer className="grid px-4 auto-cols-[minmax(0,1fr)] tracking-[0.2px] font-light text-[15px] leading-[1.6]">
                    <h1 className="mb-2 text-white font-[425] -tracking-[0.2px]">
                      See also
                    </h1>
                    <ul className="list-none">
                      <div className="my-1 text-[#a0a0a0]">
                        Tax for automating tax registration, collection, and
                        filing
                      </div>
                      <div className="my-1 text-[#a0a0a0]">
                        Radar for AI-powered fraud protection
                      </div>
                      <div className="my-1 text-[#a0a0a0]">
                        Terminal for custom in-person payments
                      </div>
                    </ul>
                  </footer>
                </section>
                <figure className="relative self-start grid min-[900px]:hidden">
                  xxx
                </figure>
              </div>

              <div
                id="heading3"
                ref={setHeadingRef(2)}
                className="grid items-center min-[600px]:grid-cols-1 min-[900px]:grid-cols-2 gap-y-8 min-[900px]:max-h-[900px] min-[900px]:h-[90vh]"
              >
                <section className="grid gap-y-6 tracking-[0.2px] scroll-mt-[108px]">
                  <header className="relative grid grid-cols-[minmax(0,1fr)] gap-y-4 pl-4 pr-4 min-[600px]:pr-16 max-w-[810px]">
                    <h2 className="text-[#635bff] font-medium text-[18px] leading-[1.555555556]">
                      Billing
                    </h2>

                    <h1 className="relative font-medium text-[34px] leading-[1.294117647] text-[#fff] -tracking-[0.02em] wrap-break-word">
                      Capture recurring revenue
                    </h1>
                  </header>

                  <div className="pl-4 pr-4 min-[600px]:pr-16 font-light text-[18px] leading-[1.555555556] text-[#a0a0a0] max-w-[810px]">
                    <p>
                      Manage flat rate, usage-based, and hybrid pricing models,
                      minimise churn, and automate finance operations.
                    </p>
                  </div>

                  <footer className="grid px-4 auto-cols-[minmax(0,1fr)] tracking-[0.2px] font-light text-[15px] leading-[1.6]">
                    <h1 className="mb-2 text-white font-[425] -tracking-[0.2px]">
                      See also
                    </h1>
                    <ul className="list-none">
                      <div className="my-1 text-[#a0a0a0]">
                        Invoicing for invoice creation, collection, and tracking
                      </div>
                      <div className="my-1 text-[#a0a0a0]">
                        Usage-based billing for metering, billing, and
                        consumption insights
                      </div>
                      <div className="my-1 text-[#a0a0a0]">
                        Sigma for custom revenue reports – no SQL required
                      </div>
                    </ul>
                  </footer>
                </section>
                <figure className="relative self-start grid min-[900px]:hidden">
                  xxx
                </figure>
              </div>

              <div
                id="heading4"
                ref={setHeadingRef(3)}
                className="grid items-center min-[600px]:grid-cols-1 min-[900px]:grid-cols-2 gap-y-8 min-[900px]:max-h-[900px] min-[900px]:h-[90vh]"
              >
                <section className="grid gap-y-6 tracking-[0.2px] scroll-mt-[108px]">
                  <header className="relative grid grid-cols-[minmax(0,1fr)] gap-y-4 pl-4 pr-4 min-[600px]:pr-16 max-w-[810px]">
                    <h2 className="text-[#635bff] font-medium text-[18px] leading-[1.555555556]">
                      Connect
                    </h2>

                    <h1 className="relative font-medium text-[34px] leading-[1.294117647] text-[#fff] -tracking-[0.02em] wrap-break-word">
                      Set up multi-party payments and payouts
                    </h1>
                  </header>

                  <div className="pl-4 pr-4 min-[600px]:pr-16 font-light text-[18px] leading-[1.555555556] text-[#a0a0a0] max-w-[810px]">
                    <p>
                      Integrate payments into your platform or marketplace for
                      end-to-end payments experiences.
                    </p>
                  </div>

                  <footer className="grid px-4 auto-cols-[minmax(0,1fr)] tracking-[0.2px] font-light text-[15px] leading-[1.6]">
                    <h1 className="mb-2 text-white font-[425] -tracking-[0.2px]">
                      See also
                    </h1>
                    <ul className="list-none">
                      <div className="my-1 text-[#a0a0a0]">
                        Terminal for custom in-person payments
                      </div>
                      <div className="my-1 text-[#a0a0a0]">
                        Instant Payouts for fast payments to users consumption
                        insights
                      </div>
                      <div className="my-1 text-[#a0a0a0]">
                        Payment Elements for customisable UIs
                      </div>
                    </ul>
                  </footer>
                </section>
                <figure className="relative self-start grid min-[900px]:hidden">
                  xxx
                </figure>
              </div>

              <div
                id="heading5"
                ref={setHeadingRef(4)}
                className="grid items-center min-[600px]:grid-cols-1 min-[900px]:grid-cols-2 gap-y-8 min-[900px]:max-h-[900px] pb-20"
              >
                <section className="grid gap-y-6 tracking-[0.2px] scroll-mt-[108px]">
                  <header className="relative grid grid-cols-[minmax(0,1fr)] gap-y-4 pl-4 pr-4 min-[600px]:pr-16 max-w-[810px]">
                    <h2 className="text-[#635bff] font-medium text-[18px] leading-[1.555555556]">
                      Issuing
                    </h2>

                    <h1 className="relative font-medium text-[34px] leading-[1.294117647] text-[#fff] -tracking-[0.02em] wrap-break-word">
                      Build a fintech offering with banking-as-a-service
                    </h1>
                  </header>

                  <div className="pl-4 pr-4 min-[600px]:pr-16 font-light text-[18px] leading-[1.555555556] text-[#a0a0a0] max-w-[810px]">
                    <p>
                      Launch, manage, and scale a commercial card programme
                      without any setup fees.
                    </p>
                  </div>

                  <footer className="grid px-4 auto-cols-[minmax(0,1fr)] tracking-[0.2px] font-light text-[15px] leading-[1.6]">
                    <h1 className="mb-2 text-white font-[425] -tracking-[0.2px]">
                      See also
                    </h1>
                    <ul className="list-none">
                      <div className="my-1 text-[#a0a0a0]">
                        Treasury for financial accounts
                      </div>
                      <div className="my-1 text-[#a0a0a0]">
                        Capital for offering fast, flexible financing insights
                      </div>
                      <div className="my-1 text-[#a0a0a0]">
                        Connect for powering platform payments
                      </div>
                    </ul>
                  </footer>
                </section>
                <figure className="relative self-start grid min-[900px]:hidden">
                  xxx
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Video Player Component
const VideoPlayer = ({ videoNumber }: { videoNumber: number }) => {
  if (videoNumber === 1) {
    return <ProductGrid />;
  }

  const gifFiles = [
    "dental-clinic.gif",
    "Health Online Report.gif",
    "Live chatbot.gif",
    "Medical Shield.gif",
    "registro.gif",
  ];

  const gifSrc = gifFiles[videoNumber - 1];

  if (!gifSrc || videoNumber < 1 || videoNumber > 5) {
    return null;
  }

  return (
    <Image
      width={540}
      height={540}
      className="w-full h-full object-cover"
      src={`/${gifSrc}`}
      alt={`Animation ${videoNumber}`}
    />
  );
};
