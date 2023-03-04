import React from "react";
import HeroSection from "./HeroSection";
import "../../../App.css";
import AboutUs from "./AboutUs";
import Blog from "./Blog";
const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <AboutUs />
      <Blog />
    </div>
  );
};

export default Home;
