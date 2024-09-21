import logo from "../assets/viceroy-white-transparent.png";
import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <div className="sticky inset-x-0 top-0 w-full z-30 bg-black">
      <div className="flex items-center justify-between w-full lg:px-16 h-[100px]">
        <div className="flex-1 flex justify-start">
          <a
            className="hidden md:block bg-blue-600 px-4 py-2 rounded-md text-white cursor-pointer hover:bg-blue-800 transition-colors duration-200"
            href="#contactus"
          >
            Contact Us
          </a>
        </div>

        <div className="flex-1 flex justify-center">
          <a href="/">
            <img
              src={logo}
              alt="logo"
              className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32"
            />
          </a>
        </div>

        <div className="flex-1 flex justify-end">
          <nav className="hidden md:block">
            <ul className="flex flex-row space-x-8 p-4">
              <li>
                <a
                  href="#aboutus"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#works"
                  className="text-gray-300 capitalize hover:text-white transition-colors duration-200"
                >
                  Why you should work with us
                </a>
              </li>
              <li>
                <a
                  href="#ourteam"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Our Team
                </a>
              </li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
