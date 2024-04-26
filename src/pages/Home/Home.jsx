import React from "react";
import AboutMe from "../../components/aboutme/aboutMe";
import Header from "../../components/navBar/Header";
import Services from "../../components/Services/Services";
const Home = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Services />
    </div>
  );
};

export default Home;
