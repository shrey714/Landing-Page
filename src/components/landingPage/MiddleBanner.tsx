/* eslint-disable @next/next/no-img-element */
import { ArrowRightIcon, ChevronRightIcon, HeartPulse } from "lucide-react";
import Link from "next/link";
import React from "react";

const MiddleBanner = () => {
  return (
    <section className="w-full pt-8 md:pt-16">
      <div className="max-w-[75rem] mx-auto sm:px-6 lg:px-8">
        <div className="w-full flex relative overflow-hidden sm:rounded-xl py-16 px-6 sm:px-9 sm:py-16 md:px-12 lg:px-20">
          <img
            alt=""
            src="/Logo.svg"
            className="absolute inset-0 m-auto w-[80%] h-[80%] sm:w-[90%] sm:h-[90%] object-scale-down sm:object-right brightness-150 saturate-0"
          />
          <div className="absolute inset-0 bg-[#111827e6] mix-blend-multiply"></div>

          <div
            aria-hidden="true"
            className="absolute inset-0 transform-gpu -left-[20rem] -top-[14rem] blur-3xl"
          >
            <div
              className="opacity-45 w-[68.5625rem] aspect-[1097/845] bg-gradient-to-r from-[#ff4694] to-[#776fff]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
          <div
            aria-hidden="true"
            className="absolute hidden left-[50rem] bottom-16 md:blur-3xl md:transform-gpu md:block"
          >
            <div
              className="opacity-25  w-[68.5625rem] aspect-[1097/845] bg-gradient-to-r from-[#ff4694] to-[#776fff]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>

          <div className="relative max-w-[42rem] flex flex-col justify-center items-center lg:items-start text-white">
            <HeartPulse size={48} className="mb-4" />
            <figure>
              <p className="text-lg font-medium mb-4 tracking-wide">
                DardiBook can transfer the way healthcare providers manage their
                medical practice. The ease of scheduling, managing
                prescriptions, and tracking patient history is unparalleled.
                It&apos;s a must-have tool for any healthcare provider.
              </p>
              <Link
                href={"https://dashboard.dardibook.in/"}
                style={{
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
                className="duration-200 border-2 border-white text-sm mt-4 bg-transparent rounded-full inline-flex flex-row items-center px-3 py-[4px] text-white font-semibold hover:bg-gray-800/20 hover:text-gray-300 hover:border-gray-300"
              >
                <span className="tracking-wide">Go to DashBoard</span>
                <ChevronRightIcon strokeWidth={3} size={16} className="ml-1" />
              </Link>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiddleBanner;
