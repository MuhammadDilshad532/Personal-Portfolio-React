import React, { useContext } from "react";
import { themeContext } from "../../Context";
import Works from "./Works";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <Works />
      <div className="experience mt-80 flex items-center justify-center gap-20 h-30vh mb-32 text-black">
        <div className="achievement flex flex-col items-center">
          <div class="bg-gradient-to-b from-blue-300 to-yellow-300 w-24  h-24 -mt-2  rounded-full -z-10  absolute"></div>
          <div
            className={` shadow-2xl  w-20 h-20 bg-white rounded-full  flex items-center justify-center text-xl font-bold mb-8 ${
              darkMode ? "text-orange-500" : ""
            }`}
          >
            8+
          </div>
          <span className={darkMode ? "text-white" : ""}>years </span>
          <span className="text-orange-300">Experience</span>
        </div>
        <div className="achievement flex flex-col items-center">
          <div class="bg-gradient-to-b from-blue-300 to-yellow-300 w-24  h-24 -mt-2  rounded-full -z-10  absolute"></div>
          <div
            className={`circle shadow-2xl  w-20 h-20 bg-white rounded-full  flex items-center justify-center text-xl font-bold mb-8 ${
              darkMode ? "text-orange-500" : ""
            }`}
          >
            20+
          </div>
          <span className={darkMode ? "text-white" : ""}>completed </span>
          <span className="text-orange-300">Projects</span>
        </div>
        <div className="achievement relative  flex flex-col items-center">
          <div class="bg-gradient-to-b from-blue-300 to-yellow-300 w-24  h-24 -mt-2  rounded-full -z-10  absolute"></div>
          <div
            className={`circle shadow-2xl  w-20 h-20 bg-white rounded-full  flex items-center justify-center text-xl font-bold mb-8   ${
              darkMode ? "text-orange-500" : ""
            }`}
          >
            5+
          </div>
          <span className={darkMode ? "text-white" : ""}>companies </span>
          <span className="text-orange-300">Work</span>
        </div>
      </div>
    </>
  );
};

export default Experience;
