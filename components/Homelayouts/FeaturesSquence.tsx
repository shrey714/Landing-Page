import React from "react";
import { Button } from "../ui/button";
import { Settings2Icon } from "lucide-react";

const FeaturesSquence = () => {
  return (
    <section className="relative mb-[calc(calc(calc(100vw-17px)*0.106))] my-10 md:my-28">
      <div className="overflow-hidden">
        <div className="absolute w-full h-full overflow-visible">
          <div className="relative h-full max-h-none w-full top-0 left-0 bg-background/70 overflow-hidden [transform:skewY(-6deg)]"></div>
        </div>
        <div className="relative z-[1] flex justify-center">
          <div className="w-full max-w-[calc(calc(100vw-17px)-16px*2)] min-[1112px]:max-w-7xl mx-4">
            <div className="py-28 lg:py-52">
              <div className="grid gap-y-24 items-start grid-rows-[auto] grid-cols-[minmax(0,_1fr)]">
                <div className="grid gap-y-8 items-start min-[600px]:grid-cols-2">
                  <section className="scroll-mt-[108px] tracking-[0.2px] grid gap-y-6">
                    <header className="gris gap-y-6 max-w-[calc(calc(1280px*0.25)*3)] pr-4 min-[600px]:pr-16 pl-4 relative grid-cols-[minmax(0,_1fr)]">
                      <h2 className="text-[#00d4ff] font-medium text-[18px] leading-[1.555555556]">
                        Designed for developers
                      </h2>
                      <h1 className="relative text-white -tracking-[0.1px] min-[1112px]:-tracking-[0.2px] wrap-break-word font-medium text-[34px] min-[1112px]:text-[38px] leading-[1.294117647] min-[1112px]:leading-[1.263157895]">
                        Ship faster with powerful and easy-to-use APIs
                      </h1>
                    </header>

                    <div className="pr-4 min-[600px]:pr-16 pl-4 text-[#adbdcc] max-w-[calc(calc(1280px*0.25)*3)] font-light text-[18px] leading-[1.555555556]">
                      Save engineering time with unified payments functionality.
                      We obsess over the maze of gateways, payments rails, and
                      financial institutions that make up the global economic
                      landscape so that your teams can build what you need on
                      one platform.
                    </div>

                    <footer className="pr-4 min-[600px]:pr-16 pl-4">
                      <Button
                        variant={"outline"}
                        className="rounded-full"
                        size={"sm"}
                      >
                        Learn More
                      </Button>
                    </footer>
                  </section>
                  <figure className="w-full flex items-center justify-center">
                    <div className="aspect-square w-4/5 md:w-[490px] border border-dashed rounded-lg"></div>
                  </figure>
                </div>

                <div>
                  <div className="grid gap-y-8 items-start min-[600px]:grid-cols-2 min-[900px]:grid-cols-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <section
                        key={index}
                        className="grid gap-y-2 tracking-[0.2px] scroll-mt-[108px]"
                      >
                        <header className="relative grid gap-y-2 max-w-[calc(calc(1280px*0.25)*3)] pr-4 min-[600px]:pr-8 pl-4 grid-cols-[minmax(0,_1fr)]">
                          <div className="min-h-10 flex items-end mb-2">
                            <div className="bg-[#00d4ff42] rounded p-2"><Settings2Icon size={24} /></div>
                          </div>
                          <h1 className="relative text-white tracking-[0.2px] wrap-break-word font-[425] text-[15px] leading-[1.6]">
                            Use Stripe with your stack
                          </h1>
                        </header>
                        <div className="pr-4 min-[600px]:pr-8 pl-4 text-[#adbdcc] max-w-[calc(calc(1280px*0.25)*3)] font-light text-[15px] leading-[1.6]">
                          We offer client and server libraries in everything
                          from React and PHP to .NET and iOS.
                        </div>
                        <footer className="pr-4 min-[600px]:pr-8 pl-4">
                          <Button
                            variant={"outline"}
                            className="rounded-full mt-2"
                            size={"sm"}
                          >
                            Learn More
                          </Button>
                        </footer>
                      </section>
                    ))}
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

export default FeaturesSquence;
