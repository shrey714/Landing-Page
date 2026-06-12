import React from "react";
import { Button } from "../ui/button";
import { HeadsetIcon, IndianRupeeIcon } from "lucide-react";
import content from "@/content/content";
import TypingAnimation from "../ui/typingText";


const CallToAction = () => {

  return (
    <section id="demo" className="relative scroll-mt-28">
      <div className="overflow-hidden">
        <div className="relative z-1 flex justify-center">
          <div className="w-full max-w-7xl mx-4">
            <div className="py-28">
              <div className="grid items-start gap-y-8 min-[600px]:grid-cols-2 min-[900px]:grid-cols-[2fr_repeat(2,1fr)]">
                <section className="scroll-mt-27 tracking-[0.2px] grid gap-y-6">
                  <header className="grid gap-y-6 max-w-240 grid-cols-[minmax(0,1fr)] pr-4 min-[600px]:pr-16 min-[900px]:pr-28 pl-4">
                    <h1 className="relative text-white tracking-[0.1px] wrap-break-word text-4xl md:text-5xl font-extrabold leading-tight">
                      {content.CallToAction.title}
                    </h1>
                  </header>

                  <TypingAnimation className="pr-4 min-[600px]:pr-16 min-[900px]:pr-28 pl-4 max-w-240 text-gray-300 font-light text-lg leading-[1.555555556]">
                    {content.CallToAction.description}
                  </TypingAnimation>

                  <footer className="px-4">
                    <Button
                      className="rounded-full"
                      size={"sm"}
                      variant={"outline"}
                    >
                      {content.CallToAction.bookDemo}
                    </Button>
                  </footer>
                </section>

                <section className="grid gap-y-2 tracking-[0.2px] scroll-mt-27">
                  <header className="grid gap-y-2 relative max-w-240 grid-cols-[minmax(0,1fr)] pr-4 min-[600px]:pr-8 pl-4">
                    <div className="flex items-end mb-2">
                      <div className="bg-[#00d4ff24] text-[#00d4ff] rounded p-2">
                        <IndianRupeeIcon size={24} />
                      </div>
                    </div>

                    <h3 className="relative text-white tracking-[0.2px] wrap-break-word text-2xl font-semibold leading-snug">
                      {content.CallToAction.pricingTitle}
                    </h3>
                  </header>

                  <div className="max-w-240 pr-4 min-[600px]:pr-8 pl-4 text-gray-300 font-light text-base leading-[1.6]">
                    {content.CallToAction.pricingDesc}
                  </div>
                </section>

                <section className="grid gap-y-2 tracking-[0.2px] scroll-mt-27">
                  <header className="grid gap-y-2 relative max-w-240 grid-cols-[minmax(0,1fr)] pr-4 min-[600px]:pr-8 pl-4">
                    <div className="flex items-end mb-2">
                      <div className="bg-[#00d4ff24] text-[#00d4ff] rounded p-2">
                        <HeadsetIcon size={24} />
                      </div>
                    </div>

                    <h4 className="relative text-white tracking-[0.2px] wrap-break-word font-[425] text-base leading-[1.6]">
                      {content.CallToAction.onboardingTitle}
                    </h4>
                  </header>

                  <div className="max-w-240 pr-4 min-[600px]:pr-8 pl-4 text-gray-300 font-light text-base leading-[1.6]">
                    {content.CallToAction.onboardingDesc}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
