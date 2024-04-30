import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/navBar/Header"; // Corrected import path
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Experience from "./pages/Experience/Experience";
import Protfolio from "./pages/Protfolio/Protfolio";
import Testimonial from "./pages/Testimonial/Testimonial";
import Contect from "./pages/contect/contect";
import Footer from "./components/Footer/index";
const AppRoutes = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Protfolio" element={<Protfolio />} />
        <Route path="/Testimonial" element={<Testimonial />} />
        <Route path="/Contect" element={<Contect />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRoutes;
