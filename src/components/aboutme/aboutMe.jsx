import React from "react";
import Github from "../../assets/img/github.png";
import LinkedIn from "../../assets/img/linkedin.png";
import Instagram from "../../assets/img/instagram.png";
import Vector1 from "../../assets/img/Vector1.png";
import Vector2 from "../../assets/img/Vector2.png";
import boy from "../../assets/img/boy.png";
import glassesimoji from "../../assets/img/glassesimoji.png";
import crown from "../../assets/img/crown.png";
import thumbup from "../../assets/img/thumbup.png";

const AboutMe = () => {
  return (
    <div className="flex h-77vh mt-24">
      {/* Left name side */}
      <div className="flex flex-col relative gap-8">
        <div className="flex flex-col gap-1">
          <span className="text-black font-bold text-3xl">Hi! I Am</span>
          <span className="text-orange-300 font-bold text-3xl">
            Muhammad Dilshad
          </span>
          <span className="font-hairline text-sm text-gray mt-4">
            React.js developer and Frontend Developer with a high level of
            experience in web designing and <br /> development, producing
            quality work.
          </span>
        </div>

        {/* Social icons */}
        <div className="i-icons mt-12 flex gap-4">
          <img src={Github} alt="Github" />
          <img src={LinkedIn} alt="LinkedIn" />
          <img src={Instagram} alt="Instagram" />
        </div>
        <button className="ml-6 w-24 h-9 rounded-2xl text-white bg-orange-300 hover:text-orange-300 border hover:border-orange-300 hover:bg-white shadow-2xl shadow-orange-300">
          Hire me
        </button>
      </div>

      {/* Right image side */}
      <div className="">
        <div className="flex-1  ">
          <img
            src={Vector1}
            className="transform scale-69 -left-15 -top-9 absolute z-10 w-96 ml-52 mt-72 "
            alt="Vector1"
          />
          <img
            src={Vector2}
            className="top-[-4.6rem] transform scale-67 left-[-3rem] absolute z-10 w-96 ml-[700px] mt-72"
            alt="Vector2"
          />
          <img
            src={boy}
            className="transform scale-140 left-[28%] absolute z-10 w-80 ml-80"
            alt="boy"
          />
          {/* <img
            src={glassesimoji}
            className="transform scale-62 -top-19 -left-24 rounded-full p-0"
            alt="glasses emoji"
          /> */}
          {/* <img src={crown} alt="crown" />
          <img src={thumbup} alt="thumb up" /> */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
