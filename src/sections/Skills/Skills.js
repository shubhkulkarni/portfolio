import React from "react";
import "./Skills.css";
import ScrollAnimation from "react-animate-on-scroll";
function Skills() {
  return (
    <div className="skillsContainer" id="skills">
      <div className="fab">
        <a href="#works" className="fabBtn">
          Works <i class="fa fa-arrow-down" aria-hidden="true"></i>
        </a>
      </div>
      <div className="skillsHeading">
        <a className="skills" href="#skills">
          My skills
        </a>
      </div>
      <div className="cardContainer">
        <div className="cardsList">
          <ScrollAnimation
            animateIn="animate__animated animate__fadeInDown"
            delay={0}
          >
            <div className="card card1">
              <div className="cardImage">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png"
                  className="cardImg"
                />
              </div>
              <h3 className="skillname1">Javascript</h3>
              <br />
              <div className="cardContent">
                4+ years experience in Javascript. Working in ES6 and modern
                Javascript.
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="animate__animated animate__fadeInDown"
            delay={300}
          >
            <div className="card card2">
              {" "}
              <div className="cardImage">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
                  className="cardImg"
                />
              </div>
              <h3 className="skillname2">React</h3>
              <br />
              <div className="cardContent">
                3.5+ years experience in ReactJS. Working in Redux , umiJS,
                dvaJS alongwith React.
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__animated animate__fadeInDown"
            delay={600}
          >
            <div className="card card6">
              {" "}
              <div className="cardImage">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-512/redux-283024.png"
                  className="cardImg"
                />
              </div>
              <h3 className="skillname2">Redux</h3>
              <br />
              <div className="cardContent">
                3.5+ years experience in Redux state-management for ReactJS .
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__animated animate__fadeInDown"
            delay={900}
          >
            <div className="card card3">
              {" "}
              <div className="cardImage">
                <img
                  src="https://innovationyourself.com/wp-content/uploads/2020/08/nodejs-logo.png"
                  className="cardImg"
                />
              </div>
              <h3 className="skillname3">NodeJS & Express</h3>
              <br />
              <div className="cardContent">
                0.5yrs experience in building NodeJs backend APIs. Working on
                expressJS and MongoDB.
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__animated animate__fadeInDown"
            delay={1200}
          >
            <div className="card card4">
              {" "}
              <div className="cardImage">
                <img
                  src="https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png"
                  className="cardImg"
                />
              </div>
              <h3 className="skillname4">React Native</h3>
              <br />
              <div className="cardContent">
                Developing android apps using RN cli and expo platforms.
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__animated animate__fadeInDown"
            delay={1500}
          >
            <div className="card card5">
              {" "}
              <div className="cardImage">
                <img
                  src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_a0b9e371c09d15b9a0b48ed84b31ed35/mongodb-atlas.png"
                  className="cardImg"
                />
              </div>
              <h3 className="skillname5">MongoDb</h3>
              <br />
              <div className="cardContent">
                Creating and querying MongoDB databases in backend development
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default Skills;
