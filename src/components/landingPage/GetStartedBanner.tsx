/* eslint-disable @next/next/no-img-element */

import React from "react";
import { ChevronRightIcon } from "lucide-react";
import TokenBox from "../TokenBox";

const GetStartedBanner = () => {
  return (
    <section className="px-4 py-0 antialiased pt-10 md:pt-16">
      <div className="mx-auto grid max-w-screen-xl rounded-lg px-4 md:px-8 md:grid-cols-12 md:gap-8 lg:px-16 xl:gap-16">
        <div className="flex mb-4 items-center justify-center md:col-span-5 md:mt-0">
          <TokenBox />
        </div>
        <div className="flex md:block flex-col items-center me-auto place-self-center md:col-span-7 text-center md:text-start">
          <h1 className="mb-3 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl">
            Simplify Your Healthcare Management with DardiBook.
          </h1>
          <p className="text-gray-500 text-xs md:text-base">
            Join DardiBook today and experience a seamless healthcare management
            platform designed to make patient care more efficient and effective.
            Start now and see the difference.
          </p>
          <button
            style={{
              boxShadow:
                "0px 0px 0px 1px #a0aec0, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }}
            className="duration-200 text-base mt-4 bg-white rounded-full flex flex-row items-center px-4 py-[6px] text-gray-600 font-semibold hover:bg-gray-800 hover:text-gray-300"
          >
            <span>GET STARTED</span>
            <ChevronRightIcon strokeWidth={3} size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStartedBanner;
