import React from "react";
import { FaWorm } from "react-icons/fa6";

const NavBar = () => {
  return (
    <div className="p-4 relative z-20">
      <h1 className=" 2xl flex font-bold text-sky-600">
        <FaWorm /> BookWorm
      </h1>
    </div>
  );
};

export default NavBar;
