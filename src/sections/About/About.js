import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Navigation from "../../components/navigation/Navigation";
import avatar from "../../assets/avatar.jpg";
import "./About.css";
function About() {
  return (
    <div className="abtContainer" id="about">
      <div className="fab">
        <ScrollAnimation
          animateIn="animate__animated animate__fadeInTopLeft"
          animatePreScroll={false}
          animateOnce
        >
          <a href="#landing" className="fabBtn">
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
          </a>
        </ScrollAnimation>
      </div>

      <div className="abtheading">
        <a href="#about">About me</a>
      </div>
      <div className="content-container">
        <div className="abt-content">
          <div className="avatar">
            <ScrollAnimation animateIn="animate__animated animate__fadeInTopLeft">
              <img src={avatar} className="avatarImg" />
            </ScrollAnimation>
          </div>
          <div className="abt-text">
            <ScrollAnimation animateIn="animate__animated animate__flipInX">
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
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;