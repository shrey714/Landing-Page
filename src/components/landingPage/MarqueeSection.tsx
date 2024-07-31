/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicUiComponents/Marquee";

const reviews = [
  {
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/parteners/1.png",
  },
  {
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/parteners/2.png",
  },
  {
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/parteners/3.svg",
  },
  {
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/parteners/4.svg",
  },
  {
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/parteners/5.svg",
  },
  {
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/parteners/6.png",
  },
  {
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/parteners/7.svg",
  },
  {
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/parteners/8.svg",
  },
  {
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/parteners/9.png",
  },
];

const ReviewCard = ({ img, body }: { img: string; body: string }) => {
  return (
    <figure className={cn("relative w-40 sm:w-64 overflow-hidden pb-4 md:p-4")}>
      <div className="flex justify-center">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
      </div>
    </figure>
  );
};

export function MarqueeSection() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden pt-4 md:pt-12">
      <p className="text-sm text-gray-500 font-medium mb-5 tracking-wider">
        Trusted by Thousands of Doctors
      </p>
      <Marquee className="[--duration:20s]">
        {reviews.map((review, key) => (
          <ReviewCard key={key} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white"></div>
    </div>
  );
}
