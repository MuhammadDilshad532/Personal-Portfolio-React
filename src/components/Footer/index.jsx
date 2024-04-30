import React from "react";
import footer from "../../assets/img/footer.png";
import Github from "../../assets/img/github.png";
import LinkedIn from "../../assets/img/linkedin.png";
import Instagram from "../../assets/img/instagram.png";
const Footer = () => {
  return (
    <div class="">
      <div class=" flex   relative  ">
        <span className="mt-48 ml-[35%] text-white text-xl ">
          dilshadahamad532280@gmail.com
        </span>

        <img src={footer} alt="" className=" absolute flex  -z-10" />
        <div className="  text-white  flex  gap-10">
          <img src={Github} alt="Github" className="w-11 h-11 mt-80" />
          <img src={LinkedIn} alt="LinkedIn" className="w-11 h-11 mt-80" />
          <img src={Instagram} alt="Instagram" className="w-11 h-11 mt-80" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
