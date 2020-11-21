import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Navigation from "../../components/navigation/Navigation";
import avatar from "../../assets/avatar.jpg";
import "./About.css";
function About() {
  return (
    <div className="abtContainer" id="about">
      <div className="fab">
        <a href="#skills" className="fabBtn">
          Skills <i class="fa fa-arrow-down" aria-hidden="true"></i>
        </a>
      </div>

      <div className="abtheading">
        <a href="#about">About me</a>
      </div>
      <div className="content-container">
        <div className="abt-content">
          <div className="avatar">
            <ScrollAnimation animateIn="animate__animated animate__zoomIn">
              <img src={avatar} className="avatarImg" />
            </ScrollAnimation>
          </div>
          <div className="abt-text">
            <ScrollAnimation animateIn="animate__animated animate__fadeIn animate__zoomIn">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              dolore facilis, optio assumenda repellat facere esse. Debitis aut
              alias, ducimus ex ipsam modi nesciunt perferendis vel! Accusamus
              quo at quidem ab dolorem ea, numquam repudiandae voluptatem
              tenetur culpa optio reiciendis eligendi aut aperiam, maiores nisi
              error neque recusandae dolores temporibus nam ducimus corrupti
              aliquam corporis.
              <br></br>
              <br></br>
              sint consectetur aperiam voluptatem provident doloremque eos
              dolores ex molestiae blanditiis dolorum quam quidem necessitatibus
              amet quas quod veritatis.
              <br /> <br /> <br />
              <div className="myname">
                <div className="myname__main">Shubham Kulkarni</div>
                <div className="myname__sub">React & Node Developer</div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
