import React from "react";

const Navlist = ({ href, title, style }) => {
  return (
    <a href={href} className={style}>
      {title}
    </a>
  );
};

export default Navlist;
