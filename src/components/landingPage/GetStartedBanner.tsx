import React from "react";
import { ArrowRightIcon } from "lucide-react";
const GetStartedBanner = () => {
  return (
    <section className="pt-[4.33vw] pb-[2.33vw] flex w-full items-center justify-center bg-white">
      <div className="w-11/12 mx-auto mb-0 text-center flex items-center justify-center flex-col rounded-lg sm:rounded-lg bg-gray-300 py-4 md:py-7 px-4">
        <p className="text-xs md:text-base max-w-[510px]">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form. There are many
          variations of passages.
        </p>

        <button
          style={{
            boxShadow:
              "0px 0px 0px 1px #a0aec0, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          }}
          className="text-xs md:text-base mt-6 bg-white rounded-full flex flex-row items-center px-4 py-[6px] text-gray-600 duration-300 font-semibold"
        >
          <span>GET STARTED</span>
          <ArrowRightIcon className="ml-1 size-3" />
        </button>
      </div>
    </section>
  );
};

export default GetStartedBanner;
