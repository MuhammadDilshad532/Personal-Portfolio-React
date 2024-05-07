import React from "react";
import AboutMe from "../../components/aboutme/aboutMe";
import Services from "../../components/Services/Services";
import Experience from "../../pages/Experience/Experience";
import Protfolio from "../../pages/Protfolio/Protfolio";
import Testimonial from "../../pages/Testimonial/Testimonial";
import Contect from "../../components/contect/contect";
const Home = () => {
  return (
    <div>
      <AboutMe />
      <Services />
      <Experience />
      <Protfolio />
      <Testimonial />
      <Contect />
    </div>
  );
};

export default Home;
