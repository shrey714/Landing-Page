"use client";
import React, { useMemo } from "react";
import Lottie from "react-lottie";
import * as animationData from "@/lottieFiles/ScrollDown.json";
import { ArrowRightIcon } from "lucide-react";
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
      <div className="flex relative bg-gray-300 w-full md:min-h-[calc(100vh-1rem)] min-h-[calc(100svh-1rem)] pt-6 items-center justify-center">
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
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-gray-700">
              Welcome to DardiBook
            </h1>
            <p className="py-6 text-gray-500">
              Discover our services and get started with ease. Learn how we can
              assist you with your needs and begin your journey with us today.
            </p>

            <ShimmerButton className="inline-flex mt-4 text-xs md:text-base bg-white rounded-full px-4 py-[6px] text-gray-600 font-semibold text-center">
              <span>GET STARTED</span>
              <ArrowRightIcon className="ml-1 size-3" />
            </ShimmerButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
