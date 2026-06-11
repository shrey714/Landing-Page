"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("FrontDoor");
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
                      {t("h1Title")}
                    </h2>

                    <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#fff] -tracking-[0.02em] wrap-break-word">
                      {t("h1Subtitle")}
                    </h1>
                  </header>

                  <div className="pl-4 pr-4 min-[600px]:pr-16 font-light text-lg leading-[1.555555556] text-gray-300 max-w-[810px]">
                    <p>
                      {t("h1Desc")}
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
                      {t("h2Title")}
                    </h2>

                    <h2 className="relative text-3xl md:text-4xl font-extrabold leading-tight text-[#fff] -tracking-[0.02em] wrap-break-word">
                      {t("h2Subtitle")}
                    </h2>
                  </header>

                  <div className="pl-4 pr-4 min-[600px]:pr-16 font-light text-lg leading-[1.555555556] text-gray-300 max-w-[810px]">
                    <p>
                      {t("h2Desc")}
                    </p>
                  </div>

                  <footer className="grid px-4 auto-cols-[minmax(0,1fr)] tracking-[0.2px] font-light text-base leading-[1.6]">
                    <h1 className="mb-2 text-white text-2xl font-semibold -tracking-[0.2px]">
                      {t("seeAlso")}
                    </h1>
                    <ul className="list-none">
                      <div className="my-1 text-gray-300">
                        {t("h2List1")}
                      </div>
                      <div className="my-1 text-gray-300">
                        {t("h2List2")}
                      </div>
                      <div className="my-1 text-gray-300">
                        {t("h2List3")}
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
                      {t("h3Title")}
                    </h2>

                    <h2 className="relative font-medium text-3xl leading-[1.294117647] text-[#fff] -tracking-[0.02em] wrap-break-word">
                      {t("h3Subtitle")}
                    </h2>
                  </header>

                  <div className="pl-4 pr-4 min-[600px]:pr-16 font-light text-lg leading-[1.555555556] text-gray-300 max-w-[810px]">
                    <p>
                      {t("h3Desc")}
                    </p>
                  </div>

                  <footer className="grid px-4 auto-cols-[minmax(0,1fr)] tracking-[0.2px] font-light text-base leading-[1.6]">
                    <h1 className="mb-2 text-white font-[425] -tracking-[0.2px]">
                      {t("seeAlso")}
                    </h1>
                    <ul className="list-none">
                      <div className="my-1 text-gray-300">
                        {t("h3List1")}
                      </div>
                      <div className="my-1 text-gray-300">
                        {t("h3List2")}
                      </div>
                      <div className="my-1 text-gray-300">
                        {t("h3List3")}
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
                      {t("h4Title")}
                    </h2>

                    <h2 className="relative font-medium text-3xl leading-[1.294117647] text-[#fff] -tracking-[0.02em] wrap-break-word">
                      {t("h4Subtitle")}
                    </h2>
                  </header>

                  <div className="pl-4 pr-4 min-[600px]:pr-16 font-light text-lg leading-[1.555555556] text-gray-300 max-w-[810px]">
                    <p>
                      {t("h4Desc")}
                    </p>
                  </div>

                  <footer className="grid px-4 auto-cols-[minmax(0,1fr)] tracking-[0.2px] font-light text-base leading-[1.6]">
                    <h1 className="mb-2 text-white font-[425] -tracking-[0.2px]">
                      {t("seeAlso")}
                    </h1>
                    <ul className="list-none">
                      <div className="my-1 text-gray-300">
                        {t("h4List1")}
                      </div>
                      <div className="my-1 text-gray-300">
                        Pharmacy-ready prescription details
                      </div>
                      <div className="my-1 text-gray-300">
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
                      {t("h5Title")}
                    </h2>

                    <h2 className="relative font-medium text-3xl leading-[1.294117647] text-[#fff] -tracking-[0.02em] wrap-break-word">
                      {t("h5Subtitle")}
                    </h2>
                  </header>

                  <div className="pl-4 pr-4 min-[600px]:pr-16 font-light text-lg leading-[1.555555556] text-gray-300 max-w-[810px]">
                    <p>
                      {t("h5Desc")}
                    </p>
                  </div>

                  <footer className="grid px-4 auto-cols-[minmax(0,1fr)] tracking-[0.2px] font-light text-base leading-[1.6]">
                    <h1 className="mb-2 text-white font-[425] -tracking-[0.2px]">
                      {t("seeAlso")}
                    </h1>
                    <ul className="list-none">
                      <div className="my-1 text-gray-300">
                        {t("h5List1")}
                      </div>
                      <div className="my-1 text-gray-300">
                        {t("h5List2")}
                      </div>
                      <div className="my-1 text-gray-300">
                        {t("h5List3")}
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


const ProductPanel = ({ panelNumber }: { panelNumber: number }) => {
  const t = useTranslations("FrontDoor");
  const panels = [
    {
      title: t("p1Title"),
      subtitle: t("p1Subtitle"),
      icon: ClipboardListIcon,
      stat: "42",
      statLabel: t("p1StatLabel"),
      accent: "#00D4FF",
      rows: [
        [t("p1R1C1"), t("p1R1C2"), t("p1R1C3")],
        [t("p1R2C1"), t("p1R2C2"), t("p1R2C3")],
        [t("p1R3C1"), t("p1R3C2"), t("p1R3C3")],
      ],
    },
    {
      title: t("p2Title"),
      subtitle: t("p2Subtitle"),
      icon: UserRoundIcon,
      stat: "8",
      statLabel: t("p2StatLabel"),
      accent: "#27C17B",
      rows: [
        [t("p2R1C1"), t("p2R1C2"), t("p2R1C3")],
        [t("p2R2C1"), t("p2R2C2"), t("p2R2C3")],
        [t("p2R3C1"), t("p2R3C2"), t("p2R3C3")],
      ],
    },
    {
      title: t("p3Title"),
      subtitle: t("p3Subtitle"),
      icon: CalendarDaysIcon,
      stat: "14:00",
      statLabel: t("p3StatLabel"),
      accent: "#F2B84B",
      rows: [
        [t("p3R1C1"), t("p3R1C2"), t("p3R1C3")],
        [t("p3R2C1"), t("p3R2C2"), t("p3R2C3")],
        [t("p3R3C1"), t("p3R3C2"), t("p3R3C3")],
      ],
    },
    {
      title: t("p4Title"),
      subtitle: t("p4Subtitle"),
      icon: PillIcon,
      stat: "28",
      statLabel: t("p4StatLabel"),
      accent: "#F26D6D",
      rows: [
        [t("p4R1C1"), t("p4R1C2"), t("p4R1C3")],
        [t("p4R2C1"), t("p4R2C2"), t("p4R2C3")],
        [t("p4R3C1"), t("p4R3C2"), t("p4R3C3")],
      ],
    },
    {
      title: t("p5Title"),
      subtitle: t("p5Subtitle"),
      icon: FlaskConicalIcon,
      stat: "7",
      statLabel: t("p5StatLabel"),
      accent: "#9B8CFF",
      rows: [
        [t("p5R1C1"), t("p5R1C2"), t("p5R1C3")],
        [t("p5R2C1"), t("p5R2C2"), t("p5R2C3")],
        [t("p5R3C1"), t("p5R3C2"), t("p5R3C3")],
      ],
    },
  ];
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
            {t("panelLive")}
          </div>
        </div>

        <div className="grid flex-1 gap-4 p-5">
          <div className="grid grid-cols-[1fr_auto] gap-4">
            <div className="rounded-[8px] bg-white p-4 shadow-sm">
              <p className="text-xs uppercase text-[#727f96]">{t("panelFocusMetric")}</p>
              <div className="mt-4 flex items-end gap-3">
                <span className="text-4xl font-medium">{panel.stat}</span>
                <span className="pb-1 text-sm text-[#727f96]">
                  {panel.statLabel}
                </span>
              </div>
            </div>
            <div className="hidden w-24 rounded-[8px] bg-[#081C4F] p-4 text-white min-[480px]:grid">
              <ShieldCheckIcon className="text-[#00d4ff]" size={20} />
              <span className="self-end text-xs leading-5 text-gray-300">
                {t("panelRoleBasedAccess")}
              </span>
            </div>
          </div>

          <div className="rounded-[8px] bg-white shadow-sm">
            <div className="flex items-center gap-2 border-b border-[#e6ebf1] px-4 py-3 text-sm text-[#727f96]">
              <SearchIcon size={14} />
              {t("panelSearchPlaceholder")}
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
              [StethoscopeIcon, t("panelIconDoctor")],
              [FileTextIcon, t("panelIconRecords")],
              [FlaskConicalIcon, t("panelIconLabs")],
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
