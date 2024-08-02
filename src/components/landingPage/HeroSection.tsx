/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useMemo } from "react";
import Lottie from "react-lottie";
import * as animationData from "@/lottieFiles/ScrollDown.json";
import { ChevronRightIcon } from "lucide-react";
import ShimmerButton from "../magicUiComponents/ShimmerButton";

const MemoizedLottie = React.memo((props: any) => <Lottie {...props} />);
MemoizedLottie.displayName = "MemoizedLottie";
const FirstSection = () => {
  const defaultOptions = useMemo(
    () => ({
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    }),
    []
  );

  const handleScroll = () => {
    const viewportHeight = window.innerHeight;
    const targetScroll = Math.floor(viewportHeight);

    window.scrollTo({
      top: targetScroll - 24,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="flex relative bg-gray-300 w-full md:min-h-vh min-h-svh pt-6 pb-11 items-center justify-center">
        <button className="absolute bottom-0" onClick={handleScroll}>
          <MemoizedLottie
            style={{
              transform: "rotate(180deg)",
              pointerEvents: "none", // Ensures clicks go through the Lottie animation
            }}
            options={defaultOptions}
            height={40}
            width={40}
          />
        </button>
        <div className="hero-content text-center flex-col justify-around">
          <h1 className="font-bold text-[#1F2B5B] text-[30px] leading-tight max-w-[90%] tracking-wide md:tracking-wider md:text-4xl md:max-w-4xl lg:text-5xl lg:max-w-6xl">
            Transform Your Medical Practice with{" "}
            <span className="inline-flex items-baseline">
              <img
                className="inline-block h-8 md:h-10 lg:h-12 align-middle mr-[0.08em]"
                src="/Logo.svg"
                alt="LOGO"
              />
              ardiBook
            </span>{" "}
            : The Patient Management Solution
          </h1>

          <p className="tracking-wide py-3 md:py-6 text-gray-500 font-medium text-[18px] leading-5 md:text-lg md:max-w-3xl lg:text-2xl lg:max-w-4xl">
            Streamline your medical practice with DardiBook, an innovative
            platform designed to simplify patient management and enhance the
            healthcare experience. Trusted by doctors worldwide, DardiBook
            empowers you to efficiently manage appointments, medical records,
            and patient history, all in one place.
          </p>
          <ShimmerButton className="inline-flex mt-4 text-base rounded-full px-4 py-[6px] font-semibold text-center bg-white">
            <span>GET STARTED</span>
            <ChevronRightIcon strokeWidth={3} size={16} className="ml-1" />
          </ShimmerButton>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
