import React from "react";
import Navigation from "../../components/navigation/Navigation";
import "./Landing.css";
import banner from "../../assets/banner.svg";
function Landing() {
  return (
    <div className="container">
      <Navigation />
      <div className="main">
        <div className="illustration animate__animated animate__pulse">
          <img src={banner} className="banner" />
        </div>
        <div className="text">
          <h1 className="name animate__animated animate__slideInRight">
            Hi , I'm Shubham !
          </h1>
          <h3 className="desc animate__animated animate__fadeIn">
            MERN stack developer and app development enthusiast.
          </h3>
          <a
            href="#about"
            className="btn animate__animated animate__bounceInUp"
          >
            More about me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
