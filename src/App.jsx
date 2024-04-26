import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/navBar/Header";
import AboutMe from "./components/aboutme/aboutMe";
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <AboutMe />
      </Router>
    </div>
  );
};

export default App;
