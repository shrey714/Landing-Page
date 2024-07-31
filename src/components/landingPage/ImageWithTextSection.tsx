/* eslint-disable @next/next/no-img-element */
import React from "react";

const ImageWithTextSection = () => {
  return (
    <>
      <section className="pb-[calc(100vw*0.15)] pt-10 md:pt-20">
        <div className="container mx-auto">
          <div className=" flex flex-wrap">
            <div className="w-full">
              <div className="mx-auto max-w-[510px] text-center mb-3 md:mb-5">
                <h2 className="mb-2 text-2xl font-bold leading-[1.2] md:text-3xl text-gray-700">
                  Dashboard We Offer
                </h2>
                <p className="text-sm text-body-color text-gray-500 font-medium">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap"></div>
        </div>
      </section>
      <section className="bg-gray-800 h-[calc(100vw*0.35+24px)] relative">
        <div
          style={{
            boxShadow:
              "0px 0px 0px 1px #a0aec0, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          }}
          className="w-11/12 overflow-hidden absolute -top-[calc(100vw*0.15-24px)] left-1/2 -translate-x-1/2 rounded-sm sm:rounded-lg bg-white "
        >
          <img className="w-full" src="/DashboardHome.jpg" alt="Filters" />
        </div>
      </section>
    </>
  );
};

export default ImageWithTextSection;
