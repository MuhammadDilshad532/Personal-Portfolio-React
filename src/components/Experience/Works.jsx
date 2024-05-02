import React, { useContext } from "react";

import Upwork from "../../assets/img/Upwork.png";
import Fiverr from "../../assets/img/fiverr.png";
import Amazon from "../../assets/img/amazon.png";
import Shopify from "../../assets/img/Shopify.png";
import Facebook from "../../assets/img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="px-12 flex h-90vh mt-16 items-center">
      {/* left side */}
      <div className="w-left">
        <div className="flex flex-col relative">
          {/* dark Mode */}
          <span
            className="text-black text-5xl font-bold"
            style={{ color: darkMode ? "white" : "" }}
          >
            Works for All these
          </span>
          <span className="text-orange-300 text-5xl font-bold">
            Brands & Clients
          </span>
          <spane className="text-gray-500 text-sm mt-4">
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </spane>
          <Link to="/Contact" smooth={true} spy={true}>
            <button className="w-32 h-8 mt-16">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="relative">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle absolute left-36 w-72 h-72 rounded-full shadow-sm top-8 bg-white z-10"
        >
          <div className="w-secCircle relative top-neg-12 left-24 w-24 h-24  rounded-full border-4 border-gray-300 flex items-center justify-center shadow-sm bg-white">
            <img src={Upwork} alt="" className="transform scale-60" />
          </div>
          <div className="w-secCircle relative left-neg-12 top-20 w-24 h-24  rounded-full border-4 border-gray-300 flex items-center justify-center shadow-sm bg-white">
            <img src={Fiverr} alt="" className="transform scale-60" />
          </div>
          <div className="w-secCircle relative left-24 -mt-20 w-24 h-24  rounded-full border-4 border-gray-300 flex items-center justify-center shadow-sm bg-white">
            <img src={Amazon} alt="" className="transform scale-60" />
          </div>{" "}
          <div className="w-secCircle relative left-24 mt-4 w-24 h-24  rounded-full border-4 border-gray-300 flex items-center justify-center shadow-sm bg-white">
            <img src={Shopify} alt="" className="transform scale-60" />
          </div>
          <div className="w-secCircle relative left-24 mt-4 w-24 h-24  rounded-full border-4 border-gray-300 flex items-center justify-center shadow-sm bg-white">
            <img src={Facebook} alt="" className="transform scale-10" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle , bg-blue-600 left-72 top-0 ,absolute h-52 w-52 rounded-full -z-10"></div>
        <div className="w-backCircle yellowCircle bg-yellow-400 left-72 top-32 absolute h-52 w-52 rounded-full -z-10"></div>
      </div>
    </div>
  );
};

export default Works;
