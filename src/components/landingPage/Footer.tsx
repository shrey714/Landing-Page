/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Footer = () => {
  const allPaths = [
    "about-us",
    "cancellation-policy",
    "contact-us",
    "pricing",
    "privacy-policy",
    "terms-conditions",
  ];

  return (
    <>
      <footer className="fixed bottom-0 footer gap-y-6 footer-center bg-white text-gray-800 font-medium h-4 px-4 z-40">
        <aside className="grid-flow-col items-center h-4 text-[0.5rem] sm:text-[0.65rem] flex justify-center">
          <p>© {new Date().getFullYear()} dardibook.com. All rights reserved</p>
        </aside>
      </footer>
      <footer className="footer gap-y-4 footer-center text-gray-800 font-medium p-4 pt-8 pb-10 flex flex-col">
        <aside className="grid-flow-col items-center">
          <img className="h-9 w-9" src="/Logo.svg" alt="LOGO" />
        </aside>
        <nav className="flex flex-row flex-wrap items-center justify-center justify-self-center gap-x-4 gap-y-0 bg-white">
          {allPaths.map((path, key) => {
            return (
              <Link
                key={key}
                href={`/documents/${path}`}
                className="link link-hover text-[0.7rem] sm:text-xs md:text-sm"
              >
                {path}
              </Link>
            );
          })}
        </nav>
      </footer>
    </>
  );
};

export default Footer;
