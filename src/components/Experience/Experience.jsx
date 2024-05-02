// Experience.jsx
import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
import Works from "./Works";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div className="experience mt-96" id="experience">
        <div className="achievement">
          {/* darkMode */}
          <div
            className="circle"
            style={{ color: darkMode ? "var(--orange)" : "" }}
          >
            8+
          </div>
          <span style={{ color: darkMode ? "white" : "" }}>years </span>
          <span>Experience</span>
        </div>
        <div className="achievement">
          <div
            className="circle"
            style={{ color: darkMode ? "var(--orange)" : "" }}
          >
            20+
          </div>
          <span style={{ color: darkMode ? "white" : "" }}>completed </span>
          <span>Projects</span>
        </div>
        <div className="achievement">
          <div
            className="circle"
            style={{ color: darkMode ? "var(--orange)" : "" }}
          >
            5+
          </div>
          <span style={{ color: darkMode ? "white" : "" }}>companies </span>
          <span>Work</span>
        </div>
      </div>
      <Works />
    </>
  );
};

export default Experience;
