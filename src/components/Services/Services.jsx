import React, { useContext } from "react";
import Card from "./Cords";
import HeartEmoji from "../../assets/img/heartemoji.png";
import Glasses from "../../assets/img/glasses.png";
import Humble from "../../assets/img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import ReactjsDeveloper from "./ReactjsDeveloper.pdf";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme && theme.state && theme.state.darkMode;

  // Transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="px-12 flex h-96 mb-32 mt-36 pt-12" id="services">
      <div className="flex flex-col relative gap-7 ml-4">
        <span
          className={`text-5xl font-bold ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          My Awesome
        </span>
        <span className="text-5xl font-bold text-orange-300">Services</span>
        <span className="text-sm text-gray-500">
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </span>
        <a href={ReactjsDeveloper} download>
          <button className="w-36 h-10 rounded-2xl text-white bg-orange-300 hover:text-orange-300 border hover:border-orange-300 hover:bg-white shadow-2xl shadow-orange-300">
            Download CV
          </button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="relative">
        <motion.div
          className="absolute"
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe xd"}
          />
        </motion.div>

        <motion.div
          className="absolute"
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </motion.div>

        <motion.div
          className="absolute"
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
