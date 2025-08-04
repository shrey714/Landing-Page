import React from "react";
import { Button } from "../ui/button";
import { Settings2Icon } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="relative">
      <div className="overflow-hidden">
        <div className="relative z-[1] flex justify-center">
          <div className="w-full max-w-7xl mx-4">
            <div className="py-28">
              <div className="grid items-start gap-y-8 min-[600px]:grid-cols-2 min-[900px]:grid-cols-[2fr_repeat(2,_1fr)]">
                <section className="scroll-mt-[108px] tracking-[0.2px] grid gap-y-6">
                  <header className="grid gap-y-6 max-w-[calc(calc(1280px*0.25)*3)] grid-cols-[minmax(0,_1fr)] pr-4 min-[600px]:pr-16 min-[900px]:pr-28 pl-4">
                    <h1 className="relative text-white tracking-[0.1px] wrap-break-word font-medium text-[24px] leading-[1.333333333]">
                      Ready to simplify your healthcare workflow?
                    </h1>
                  </header>

                  <div className="pr-4 min-[600px]:pr-16 min-[900px]:pr-28 pl-4 max-w-[calc(calc(1280px*0.25)*3)] text-[#a0a0a0] font-light text-[18px] leading-[1.555555556]">
                    <p>
                      Get started by creating your account today, or reach out
                      to us for a custom solution tailored to your clinic,
                      hospital, or practice.
                    </p>
                  </div>

                  <footer className="px-4">
                    <Button
                      className="rounded-full"
                      size={"sm"}
                      variant={"outline"}
                    >
                      Start Now
                    </Button>
                  </footer>
                </section>

                <section className="grid gap-y-2 tracking-[0.2px] scroll-mt-[108px]">
                  <header className="grid gap-y-2 relative max-w-[calc(calc(1280px*0.25)*3)] grid-cols-[minmax(0,_1fr)] pr-4 min-[600px]:pr-8 pl-4">
                    <div className="flex items-end mb-2">
                      <div className="bg-[#00d4ff42] rounded p-2">
                        <Settings2Icon size={24} />
                      </div>
                    </div>

                    <h1 className="relative text-white tracking-[0.2px] wrap-break-word font-[425] text-[16px] leading-[1.6]">
                      Transparent and simple pricing
                    </h1>
                  </header>

                  <div className="max-w-[calc(calc(1280px*0.25)*3)] pr-4 min-[600px]:pr-8 pl-4 text-[#a0a0a0] font-light text-[15px] leading-[1.6]">
                    Clear, per-subscription pricing with no hidden costs — pay
                    only for what you use.
                  </div>
                </section>

                <section className="grid gap-y-2 tracking-[0.2px] scroll-mt-[108px]">
                  <header className="grid gap-y-2 relative max-w-[calc(calc(1280px*0.25)*3)] grid-cols-[minmax(0,_1fr)] pr-4 min-[600px]:pr-8 pl-4">
                    <div className="flex items-end mb-2">
                      <div className="bg-[#00d4ff42] rounded p-2">
                        <Settings2Icon size={24} />
                      </div>
                    </div>

                    <h1 className="relative text-white tracking-[0.2px] wrap-break-word font-[425] text-[16px] leading-[1.6]">
                      Quick and easy onboarding
                    </h1>
                  </header>

                  <div className="max-w-[calc(calc(1280px*0.25)*3)] pr-4 min-[600px]:pr-8 pl-4 text-[#a0a0a0] font-light text-[15px] leading-[1.6]">
                    Set up your DardiBook account and start managing patients
                    and prescriptions in minutes — no tech expertise needed.
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
