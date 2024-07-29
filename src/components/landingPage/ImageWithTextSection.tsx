/* eslint-disable @next/next/no-img-element */
import React from "react";

const ImageWithTextSection = () => {
  return (
    <>
      <section className="pb-[calc(100vw*0.15)] pt-2 md:pt-4 bg-white">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-0 max-w-[510px] text-center">
                <h2 className="mb-2 text-2xl font-bold leading-[1.2] md:text-3xl">
                  Dashboard We Offer
                </h2>
                <p className="text-sm text-body-color ">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap"></div>
        </div>
      </section>
      <section className="bg-gray-300 h-[calc(100vw*0.35+24px)] relative">
        <div
          style={{
            boxShadow:
              "0px 0px 0px 1px #a0aec0, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          }}
          className="w-11/12 overflow-hidden absolute -top-[calc(100vw*0.15-24px)] left-1/2 -translate-x-1/2 rounded-sm sm:rounded-lg bg-white "
        >
          <img className="w-full" src="/Home.jpg" alt="Filters" />
        </div>
      </section>
    </>
  );
};

export default ImageWithTextSection;
