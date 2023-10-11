import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlayBar from "./MenuOverlayBar";
import Navlist from "./Navlist";
const navLinks = [
  {
    title: "Overview",
    href: "#overview",
    style: "opacity-30",
  },
  {
    title: "Price",
    href: "#price",
  },
  {
    title: "Blog",
    href: "#blog",
  },
  {
    title: "Feedback",
    href: "#feedback",
  },
  {
    title: "Purchase",
    href: "#purchase",
    style: "bg-actionThird px-[20px] py-[7px] rounded-full",
  },
];

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  return (
    <nav className="mx-auto container max-w-screen-xl px-22 py-12">
      <div className="flex items-center justify-around font-sans text-white font-[500] text-[1.125rem] ">
        <a href={"/"} className="font-[700] text-[1.5rem]">
          Startup 3
        </a>
        <div className="mobile-menu block md:hidden">
          {!navBarOpen ? (
            <button onClick={() => setNavBarOpen(!navBarOpen)} className="">
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button onClick={() => setNavBarOpen(!navBarOpen)} className="">
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((item, index) => (
              <li key={index}>
                <Navlist
                  title={item.title}
                  href={item.href}
                  style={item.style}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navBarOpen && <MenuOverlayBar links={navLinks} />}
    </nav>
  );
};

export default NavBar;
