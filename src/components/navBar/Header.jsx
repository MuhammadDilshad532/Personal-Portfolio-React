import React, { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
// es main  jo icons estmale ho rahay hain wo  hero icons say hain  jis ki comand ye hai npm install @heroicons/react

const Header = () => {
  let data = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/Service" },
    { name: "Experience", link: "/Experience" },
    { name: "Protfolio", link: "/Protfolio" },
    { name: "Testimonial", link: "/Testimonial" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className=" w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <span>Muhammad Dilshad</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {data.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold">
              <a
                href={link.link}
                className="text-gray-800 hover:text-orange-300 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button className=" ml-6 w-24 h-9 rounded-2xl text-white bg-orange-300 hover:text-orange-300 border hover:border-orange-300 hover:bg-white shadow-2xl shadow-orange-300  ">
            Contact
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
