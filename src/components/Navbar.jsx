import logo from "../assets/viceroy-transparent.png";
import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import MobileMenu from "./MobileMenu";
const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0 && !scrolled) {
      setScrolled(true);
    } else if (latest === 0 && scrolled) {
      setScrolled(false);
    }
  });

  const defaultClasses = "transition-all absolute inset-0 -z-1";
  let navBarClasses = scrolled
    ? `${defaultClasses} border-b border-black/10 bg-white/75 backdrop-blur-lg`
    : `${defaultClasses} bg-transparent`;
  return (
    <div className="sticky inset-x-0 top-0 w-full z-30 bg-black">
      <div className={navBarClasses}></div>
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 relative">
        <div className="flex items-center justify-between py-4">
          <div>
            <a href="/">
              <img src={logo} alt="logo" className="h-20 w-20" />{" "}
            </a>
          </div>
          <nav className="hidden md:block">
            <ul className="flex flex-row space-x-8 p-4">
              <li>
                <a
                  href="#aboutus"
                  className="text-gray-300 hover:text-white transition-colors duration-200 bg-white"
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
          <div className="hidden md:block">
            <a
              className="bg-blue-600 px-4 py-2 rounded-md text-black cursor-pointer hover:bg-blue-800 transition-colors duration-200"
              href="#contactus"
            >
              Contact Us
            </a>
          </div>
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
