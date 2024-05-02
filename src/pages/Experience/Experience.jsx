import React from "react";
import ThemeProvider from "../../components/Experience/ThemeProvider";
import ExperiencePage from "../../components/Experience/Experience";

const Experience = () => {
  return (
    <ThemeProvider>
      <ExperiencePage />
    </ThemeProvider>
  );
};

export default Experience;
