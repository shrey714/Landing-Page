import React from 'react'
import Image from 'next/image'
function NavbarComponent() {
  return (
    <nav className="navbar bg-gray-300 rounded-md font-semibold">
          <div className="navbar-start w-1/2 md:w-1/5">
            <div className="dropdown">
              <div
                tabindex="0"
                role="button"
                className="btn btn-ghost md:hidden hover:bg-blue-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabindex="0"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-44 p-2 shadow text-md"
              >
                <li>
                  <a className="hover:bg-blue-300">About Us</a>
                </li>
                <li>
                  <a className="hover:bg-blue-300">Contact Us</a>
                </li>
                <li>
                  <a className="hover:bg-blue-300">Pricing</a>
                </li>
                <li>
                  <a className="hover:bg-blue-300">Privacy Policy</a>
                </li>
                <li>
                  <a className="hover:bg-blue-300">Canellation Policy</a>
                </li>
              </ul>
            </div>
            <Image
              src="/Logo.svg"
              width={20}
              height={20}
              alt="Picture of the author"
            />
            <span className="font-bold text-xl ml-2">DardiBook</span>
          </div>
          <div className="navbar-center hidden md:flex md:w-3/5">
            <ul className="menu menu-horizontal px-1 text-md md:text-md w-full">
              <li className="w-1/5 justify-center">
                <a className="hover:bg-blue-300">About Us</a>
              </li>
              <li className="w-1/5 justify-center">
                <a className="hover:bg-blue-300">Contact Us</a>
              </li>
              <li className="w-1/5 justify-center">
                <a className="hover:bg-blue-300">Pricing</a>
              </li>
              <li className="w-1/5 justify-center">
                <a className="hover:bg-blue-300">Privacy Policy</a>
              </li>
              <li className="w-1/5 justify-center">
                <a className="hover:bg-blue-300">Canellation Policy</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end w-1/2 md:w-1/5">
            <a className="btn hover:bg-blue-300 text-lg">Go To Dashboard</a>
          </div>
        </nav>
  )
}

export default NavbarComponent
