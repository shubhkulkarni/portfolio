import React from "react";
import Navigation from "../../components/navigation/Navigation";
import logo from "../../assets/logo.svg";
import "./Landing.css";
import banner from "../../assets/banner.svg";
function Landing() {
  return (
    <div className="container" id="landing">
      <div className="logobox">
        <img src={logo} alt="logo" className="logo" />
      </div>
      {/* <div className="navigation">
        <Navigation />
      </div> */}
      <div className="content-container">
        <div className="content">
          <div className="image">
            <img
              src={banner}
              alt="banner"
              className="banner animate__animated animate__zoomIn"
            />
          </div>
          <div className="text">
            <div className="heading">
              <h1 className="primary animate__animated animate__bounceInRight">
                Hi, I am Shubham .
              </h1>
              <h3 className="secondary animate__animated animate__bounceInUp">
                A MERN stack developer and software development enthusiast.
              </h3>
            </div>
            <div className="button">
              <a href="#about" className="btn">
                More about me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
