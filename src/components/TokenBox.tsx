"use client";
import React, { useState } from "react";
import { Minus, Pause, Play, Plus, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

// Define sound files only in the browser environment
let audio: HTMLAudioElement | null = null;

if (typeof window !== "undefined") {
  audio = new Audio("/token_sound.mp3");
}
// Assuming sound files are available in the public folder
// const audio = new Audio("/token_sound.mp3");

const TokenBox = () => {
  const [isPaused, setisPaused] = useState(false);
  const [allowNotification, setallowNotification] = useState(true);
  const [tokenValue, settokenValue] = useState(0);
  const [animationDirection, setAnimationDirection] = useState<"up" | "down">(
    "up"
  );

  const playNotification = () => {
    audio?.play().catch((error) => {
      console.error("Error playing notification sound:", error);
    });
  };

  const handleIncrement = () => {
    if (!isPaused) {
      setAnimationDirection("up");
      settokenValue((prev) => prev + 1);
      allowNotification && playNotification();
    }
  };

  const handleDecrement = () => {
    if (!isPaused && tokenValue > 0) {
      setAnimationDirection("down");
      settokenValue((prev) => prev - 1);
      allowNotification && playNotification();
    }
  };

  return (
    <div className="flex flex-col p-4 w-[250px]">
      <div className="flex justify-center">
        {/* token play pause button */}
        <button
          onClick={() => {
            setisPaused(!isPaused);
          }}
          className={`flex flex-1 px-2 py-3 md:py-[6px] justify-center items-center rounded-none rounded-tl-lg ${
            isPaused ? "bg-gray-600" : "bg-transparent"
          } border-[3px] border-r-[1.5px] border-black`}
        >
          {isPaused ? (
            <Pause
              strokeWidth={0.5}
              fill="#ffffff"
              className="size-4 text-white animate-pulse"
            />
          ) : (
            <Play className="size-4 text-black" />
          )}
        </button>
        {/* sound on off button */}
        <button
          onClick={() => {
            setallowNotification(!allowNotification);
          }}
          className={`flex flex-1 px-2 py-3 md:py-[6px] justify-center items-center rounded-none rounded-tr-lg ${
            allowNotification ? "bg-transparent" : "bg-gray-600"
          } border-[3px] border-l-[1.5px] border-black`}
        >
          {allowNotification ? (
            <Volume2 className="size-4 text-black" />
          ) : (
            <VolumeX className="size-4 text-white animate-pulse" />
          )}
        </button>
      </div>

      <div className="border-0 relative w-full aspect-square flex flex-col items-center justify-center bg-black">
        <motion.h3
          key={tokenValue}
          initial={{ y: animationDirection === "up" ? 30 : -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: animationDirection === "up" ? -30 : 30, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="m-0 my-[10px] text-white font-bold text-5xl"
        >
          {isPaused ? (
            <Pause
              fill="#ffffff"
              strokeWidth={0.5}
              className="size-10 text-white"
            />
          ) : (
            tokenValue
          )}
        </motion.h3>
      </div>

      <div className="flex justify-center">
        {/* token decrease button */}
        <button
          onClick={handleDecrement}
          className={`text-black flex flex-1 px-2 py-3 md:py-[6px] items-center justify-center rounded-none rounded-bl-lg ${
            isPaused
              ? "bg-gray-300 border-gray-300"
              : "bg-red-500/50 border-[#FF3B3B] hover:bg-[#FF3B3B] hover:text-white"
          } border-[3px] border-r-[1.5px] border-black`}
          disabled={isPaused || tokenValue === 0}
        >
          <Minus className="size-4" />
        </button>
        {/* token increase button */}
        <button
          onClick={handleIncrement}
          className={`text-black flex flex-1 px-2 py-3 md:py-[6px] justify-center items-center rounded-none rounded-br-lg ${
            isPaused
              ? "bg-gray-300 border-gray-300"
              : "bg-blue-500/50 border-[#0063F7] hover:bg-[#0063F7]  hover:text-white"
          } border-[3px] border-l-[1.5px] border-black`}
          disabled={isPaused}
        >
          <Plus className="size-4" />
        </button>
      </div>
    </div>
  );
};

export default TokenBox;
