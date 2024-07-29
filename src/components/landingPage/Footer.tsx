/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="fixed bottom-0 footer gap-y-6 footer-center bg-white text-gray-800 font-medium h-6  z-40">
        <nav className="grid grid-flow-col gap-4 w-[90%] md:w-96 bg-white">
          <a className="link link-hover text-xs md:text-sm">About us</a>
          <a className="link link-hover text-xs md:text-sm">Contact</a>
          <a className="link link-hover text-xs md:text-sm">Jobs</a>
          <a className="link link-hover text-xs md:text-sm">Press kit</a>
        </nav>
      </footer>
      <footer className="footer gap-y-6 footer-center bg-white text-gray-800 font-medium p-4 pb-10 flex flex-col">
        <aside className="grid-flow-col items-center">
        <img className="h-9 w-9" src="/Logo.svg" alt="LOGO" />
          <p>© {new Date().getFullYear()} dardibook.com. All rights reserved</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
