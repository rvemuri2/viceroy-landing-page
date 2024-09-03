import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    title: "About Us",
    url: "/",
  },
  {
    title: "Work With Us",
    url: "/",
  },
  {
    title: "Our Team",
    url: "/",
  },
  {
    title: "Contact Us",
    url: "/",
  },
];

const MobileMenu = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="block md:hidden">
      {!navOpen ? (
        <button onClick={() => setNavOpen(true)}>
          <Menu size={32} />
        </button>
      ) : (
        <>
          <button onClick={() => setNavOpen(false)}>
            <X size={32} />
          </button>
          <div className="absolute left-0 w-full top-20 bg-black/60 backdrop-blur-lg border-b border-t">
            <ul className="flex flex-col py-1 items-center">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    key={index}
                    href={item.url}
                    className="block text-gray-600 p-4"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileMenu;
