/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ArrowRightIcon } from "lucide-react";
const GetStartedBanner = () => {
  return (
    <section className="px-4 py-0 antialiased pt-10 md:pt-16">
      <div className="mx-auto grid max-w-screen-xl rounded-lg px-4 md:px-8 md:grid-cols-12 md:gap-8 lg:px-16 xl:gap-16">
        <div className=" flex items-center justify-center md:col-span-5 md:mt-0">
          <img
            className="mb-4 md:h-full max-h-60 md:max-h-full"
            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components-dark.svg"
            alt="peripherals"
          />
        </div>
        <div className="flex md:block flex-col items-center me-auto place-self-center md:col-span-7 text-center md:text-start">
          <h1 className="mb-3 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl">
            Save $500 today on your purchase <br />
            of a new iMac computer.
          </h1>
          <p className="text-gray-500 text-xs md:text-base">
            Reserve your new Apple iMac 27” today and enjoy exclusive savings
            with qualified activation. Pre-order now to secure your discount.
          </p>
          <button
            style={{
              boxShadow:
                "0px 0px 0px 1px #a0aec0, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }}
            className="text-xs md:text-base mt-4 bg-white rounded-full flex flex-row items-center px-4 py-[6px] text-gray-600 duration-300 font-semibold"
          >
            <span>GET STARTED</span>
            <ArrowRightIcon className="ml-1 size-3" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStartedBanner;
