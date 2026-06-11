import React from "react";
import { Button } from "../ui/button";
import { HeadsetIcon, IndianRupeeIcon } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="demo" className="relative scroll-mt-28">
      <div className="overflow-hidden">
        <div className="relative z-[1] flex justify-center">
          <div className="w-full max-w-7xl mx-4">
            <div className="py-28">
              <div className="grid items-start gap-y-8 min-[600px]:grid-cols-2 min-[900px]:grid-cols-[2fr_repeat(2,_1fr)]">
                <section className="scroll-mt-[108px] tracking-[0.2px] grid gap-y-6">
                  <header className="grid gap-y-6 max-w-[calc(calc(1280px*0.25)*3)] grid-cols-[minmax(0,_1fr)] pr-4 min-[600px]:pr-16 min-[900px]:pr-28 pl-4">
                    <h1 className="relative text-white tracking-[0.1px] wrap-break-word text-4xl md:text-5xl font-extrabold leading-tight">
                      Ready to see DardiBook inside your clinic workflow?
                    </h1>
                  </header>

                  <div className="pr-4 min-[600px]:pr-16 min-[900px]:pr-28 pl-4 max-w-[calc(calc(1280px*0.25)*3)] text-[#a0a0a0] font-light text-lg leading-[1.555555556]">
                    <p>
                      Book a walkthrough for your team. We will map your
                      current reception, consultation, prescription, lab, and
                      follow-up process to the right DardiBook setup.
                    </p>
                  </div>

                  <footer className="px-4">
                    <Button
                      className="rounded-full"
                      size={"sm"}
                      variant={"outline"}
                    >
                      Book a Demo
                    </Button>
                  </footer>
                </section>

                <section className="grid gap-y-2 tracking-[0.2px] scroll-mt-[108px]">
                  <header className="grid gap-y-2 relative max-w-[calc(calc(1280px*0.25)*3)] grid-cols-[minmax(0,_1fr)] pr-4 min-[600px]:pr-8 pl-4">
                    <div className="flex items-end mb-2">
                      <div className="bg-[#00d4ff42] rounded p-2">
                        <IndianRupeeIcon size={24} />
                      </div>
                    </div>

                    <h3 className="relative text-white tracking-[0.2px] wrap-break-word text-2xl font-semibold leading-snug">
                      Simple clinic pricing
                    </h3>
                  </header>

                  <div className="max-w-[calc(calc(1280px*0.25)*3)] pr-4 min-[600px]:pr-8 pl-4 text-[#a0a0a0] font-light text-base leading-[1.6]">
                    Choose a plan around your users, branches, and workflow
                    needs without paying for modules you do not use.
                  </div>
                </section>

                <section className="grid gap-y-2 tracking-[0.2px] scroll-mt-[108px]">
                  <header className="grid gap-y-2 relative max-w-[calc(calc(1280px*0.25)*3)] grid-cols-[minmax(0,_1fr)] pr-4 min-[600px]:pr-8 pl-4">
                    <div className="flex items-end mb-2">
                      <div className="bg-[#00d4ff42] rounded p-2">
                        <HeadsetIcon size={24} />
                      </div>
                    </div>

                    <h4 className="relative text-white tracking-[0.2px] wrap-break-word font-[425] text-base leading-[1.6]">
                      Guided onboarding
                    </h4>
                  </header>

                  <div className="max-w-[calc(calc(1280px*0.25)*3)] pr-4 min-[600px]:pr-8 pl-4 text-[#a0a0a0] font-light text-base leading-[1.6]">
                    Get help setting up patient records, staff roles,
                    appointment flow, prescriptions, and diagnostics from day
                    one.
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
