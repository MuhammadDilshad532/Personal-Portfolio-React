import React from "react";
import Github from "../../assets/img/github.png";
import LinkedIn from "../../assets/img/linkedin.png";
import Instagram from "../../assets/img/instagram.png";
import Vector1 from "../../assets/img/Vector1.png";
import Vector2 from "../../assets/img/Vector2.png";
import boy from "../../assets/img/boy.png";
import crown from "../../assets/img/crown.png";
import thumbup from "../../assets/img/thumbup.png";

const AboutMe = () => {
  return (
    <div className="flex h-77vh mt-24 md:ml-2 xl:ml-11 ">
      {/* Left name side */}
      <div className="flex flex-col relative gap-8">
        <div className="flex flex-col gap-1">
          <span className="text-black font-bold text-6xl mt-28">Hy! I Am</span>

          <span className="text-orange-300 font-bold text-6xl">
            Muhammad Dilshad
          </span>
          <span className="font-hairline text-sm text-gray mt-4">
            React.js developer and Frontend Developer with a high level of
            experience in web designing and <br /> development, producing
            quality work.
          </span>
        </div>
        <button className="ml-6 w-28 h-10 rounded-2xl text-white bg-orange-300 hover:text-orange-300 border hover:border-orange-300 hover:bg-white shadow-2xl shadow-orange-300">
          Hire me
        </button>
        {/* Social icons */}
        <div className="i-icons mt-16 flex gap-10">
          <img src={Github} alt="Github" className="w-11 h-11" />
          <img src={LinkedIn} alt="LinkedIn" className="w-11 h-11" />
          <img src={Instagram} alt="Instagram" className="w-11 h-11" />
        </div>
      </div>

      {/* Right image side */}
      <div className="">
        <div className="flex-1  ">
          <img
            src={Vector1}
            className="transform scale-69 -left-15 -top-9 absolute -z-10 w-[470px] ml-16 mt-72 "
            alt="Vector1"
          />
          <img
            src={Vector2}
            className="top-[-4.6rem] transform scale-67 left-[-3rem] absolute -z-10 w-[510px] ml-[770px] mt-80"
            alt="Vector2"
          />
          <img
            src={boy}
            className="transform scale-140 left-[28%] absolute -z-10 w-96 ml-[400px]"
            alt="boy"
          />
          <div className="w-60 h-24  ml-[370px] rounded-lg bg-slate-50 flex items-center gap-9 shadow-2xl shadow-green-300">
            <img src={crown} alt="crown" className="w-16 ml-6 " />
            <span>
              web <br /> Devveloper
            </span>
          </div>
          <div className="w-60 h-24 rounded-lg flex bg-slate-50 items-center gap-9 shadow-2xl shadow-red-500 mt-96">
            <img src={thumbup} alt="thumb up" className="w-16 ml-6" />
            <span>
              Best Design
              <br /> Award
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
