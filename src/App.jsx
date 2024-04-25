import React from "react";
import Header from "./components/navBar/Header";
import AboutMe from "./components/aboutme/aboutMe";
const App = () => {
  return (
    <div>
      <Header />
      <div className="mt-32">
        <AboutMe />
      </div>
    </div>
  );
};

export default App;
