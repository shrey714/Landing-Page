/* eslint-disable @next/next/no-img-element */
import { ArrowRightIcon } from "lucide-react";
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
            <img
              alt=""
              src="https://tailwindui.com/img/logos/workcation-logo-white.svg"
              className="h-12 mb-4"
            />
            <figure>
              <blockquote className="text-lg font-medium mb-4">
                <p>
                  “Amet amet eget scelerisque tellus sit neque faucibus non
                  eleifend. Integer eu praesent at a. Ornare arcu gravida
                  natoque erat et cursus tortor consequat at. Vulputate gravida
                  sociis enim nullam ultricies habitant malesuada lorem ac.”
                </p>
              </blockquote>
              <figcaption className="text-base font-medium">
                <div className="text-gray-400">Judith Black</div>
                <div className="text-gray-500">CEO of Tuple</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiddleBanner;
