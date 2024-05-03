import React from "react";
import footer from "../../assets/img/footer.png";
import Github from "../../assets/img/github.png";
import LinkedIn from "../../assets/img/linkedin.png";
import Instagram from "../../assets/img/instagram.png";

const Footer = () => {
  return (
    <div className="flex flex-col items-center relative mt-44">
      <span className="text-white text-xl mt-48">
        dilshadahamad532280@gmail.com
      </span>
      <img src={footer} alt="" className="absolute mt-1 -z-10" />
      <div className="text-white flex gap-10 mt-24">
        <img src={Github} alt="Github" className="w-11 h-11" />
        <img src={LinkedIn} alt="LinkedIn" className="w-11 h-11" />
        <img src={Instagram} alt="Instagram" className="w-11 h-11" />
      </div>
    </div>
  );
};

export default Footer;
