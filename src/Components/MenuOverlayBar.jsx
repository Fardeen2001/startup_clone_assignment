import React from "react";
import Navlist from "./Navlist";

const MenuOverlayBar = ({ links }) => {
  return (
    <ul className="flex flex-col items-center text-white">
      {links.map((link, index) => (
        <li key={index} className="mt-2">
          <Navlist href={link.href} title={link.title} style={link.style} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlayBar;
