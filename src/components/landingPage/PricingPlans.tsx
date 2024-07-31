import React from "react";

const PricingPlans = () => {
  const IconReq = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      data-slot="icon"
      className="text-[#4f46e5] flex-none w-5 h-6"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className="bg-gray-800 overflow-hidden isolate">
      <div className="lg:px-8 sm:pt-0 text-center pt-4 pb-96 px-6 max-w-[80rem] mx-auto">
        <div className="max-w-[56rem] mx-auto">
          <p className=" text-2xl mt-2 md:text-3xl text-gray-300 font-bold">
            The right price for you,{" "}
            <br className="hidden sm:inline lg:hidden" />
            whoever you are
          </p>
        </div>
        <div className="mt-4 relative">
          <p className="text-sm max-w-[510px] mx-auto text-gray-400 font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            numquam eligendi quos odit doloribus molestiae voluptatum.
          </p>
          <svg
            viewBox="0 0 1208 1024"
            className="absolute block align-middle -top-10 lg:-top-12 md:-top-20 sm:-top-20 h-[64rem] -z-10 left-1/2"
            style={{
              maskImage: "radial-gradient(closest-side, white, transparent)",
              WebkitMaskImage:"radial-gradient(closest-side, white, transparent)",
              transform:
                "translate(-50%, 0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1)",
            }}
          >
            <ellipse
              cx="604"
              cy="512"
              rx="604"
              ry="512"
              fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
            ></ellipse>
            <defs>
              <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                <stop stopColor="#4a00ff"></stop>
                <stop offset="1" stopColor="#4a00ff"></stop>
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="pb-6 md:pb-4 bg-white flow-root">
        <div className="-mt-[20rem]">
          <div className="max-w-[80rem] mx-auto px-6 lg:px-8">
            <div className="grid-cols-1 max-w-[20rem] grid mx-auto md:max-w-[35rem] lg:max-w-[56rem]">
              {/*  */}
              <div
                className="p-8 rounded-md sm:rounded-lg justify-between flex flex-col sm:p-10 
bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg"
                style={{
                  boxShadow:
                    "0px 0px 0px 1px #a0aec0, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
              >
                <div>
                  <h3
                    id="tier-hobby"
                    className="text-[#4f46e5] leading-7 font-semibold text-base"
                  >
                    Hobby
                  </h3>
                  <div className="gap-y-2 items-baseline flex mt-4">
                    <span className="text-[#111827] tracking-tight font-bold text-5xl ">
                      $49
                    </span>
                    <span className="text-[#4b5563] leading-7 font-semibold text-base">
                      /month
                    </span>
                  </div>
                  <p className="text-[#4b5563] leading-7 mt-6 text-base">
                    Modi dolorem expedita deleniti. Corporis iste qui inventore
                    pariatur adipisci vitae.
                  </p>
                  <ul
                    role="list"
                    className="text-[#4b5563] leading-6 text-sm mt-10"
                  >
                    <li className="flex gap-x-3">
                      <IconReq />5 products
                    </li>
                    <li className="flex gap-x-3">
                      <IconReq />
                      Up to 1,000 subscribers
                    </li>
                    <li className="flex gap-x-3">
                      <IconReq />
                      Basic analytics
                    </li>
                    <li className="flex gap-x-3">
                      <IconReq />
                      48-hour support response time
                    </li>
                  </ul>
                </div>
                <a
                  href="#"
                  aria-describedby="tier-hobby"
                  className="text-white leading-6 font-semibold text-sm text-center py-2 px-3 bg-[#4f46e5] rounded-md block mt-8"
                >
                  Get started today
                </a>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
