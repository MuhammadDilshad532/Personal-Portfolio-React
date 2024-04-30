import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Toggle from "../ToggleButton/Toggle";

const Header = () => {
  let data = [
    { name: "Home", path: "/" },
    { name: "Service", path: "/Services" },
    { name: "Experience", path: "/Experience" },
    { name: "Protfolio", path: "/Protfolio" },
    { name: "Testimonial", path: "/Testimonial" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className=" ">
      <div className="md:flex items-center justify-between  py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-10">
          <span>Muhammad Dilshad</span>
          <Toggle />
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* link items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static h-12 rounded-2xl bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {data.map((link, index) => (
            <li key={index} className="md:ml-8 md:my-0 my-7 font-semibold">
              {/* Use Link instead of anchor */}
              <Link
                to={link.path}
                className="text-gray-800 hover:text-orange-300 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          {/* Use Link for the contact button as well */}
          <li className="md:ml-8 md:my-0 my-7 font-semibold">
            <button className="ml-6 w-24 h-9 rounded-2xl text-white bg-orange-300 hover:text-orange-300 border hover:border-orange-300 hover:bg-white shadow-2xl shadow-orange-300">
              contect
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
