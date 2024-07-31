"use client";
import React from "react";
import Lottie from "react-lottie";
import * as animationData from "@/lottieFiles/ScrollDown.json";

const FirstSection = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="flex relative bg-gray-300 w-full md:min-h-[calc(100vh-1rem)] min-h-[calc(100svh-1rem)] pt-6 items-center justify-center">
        <Lottie
          style={{
            position: "absolute",
            bottom: "0px",
            transform: "rotate(180deg)",
          }}
          options={defaultOptions}
          height={40}
          width={40}
        />
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
