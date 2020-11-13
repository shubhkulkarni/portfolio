import React from "react";
import "./About.css";
import Navigation from "./../../components/navigation/Navigation";
import avatar from "../../assets/avatar.jpg";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <div className="abtContainer" id="about">
      <Navigation />
      <div className="main">
        <ScrollAnimation animateIn="animate__animated animate__fadeInTopLeft">
          <div className="avatar">
            <img src={avatar} className="avt" />
          </div>
        </ScrollAnimation>

        <div className="about">
          <ScrollAnimation
            animateIn="animate__animated animate__fadeInUp  animate__pulse"
            // animateOut="animate__animated animate__slideOutRight animate__zoomOut"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            unde aliquid temporibus. Dolores tenetur sequi quod! Libero ab harum
            laudantium modi debitis, provident ut fugit dolorum quis ducimus
            tempore atque excepturi quaerat quibusdam ea unde, culpa odit
            perspiciatis sequi deleniti vitae voluptatibus nisi beatae! Nam
            sequi beatae distinctio delectus, quisquam, quasi unde, voluptates
            fugit non a quam facilis id iste iusto veniam aperiam. Quod
            laudantium labore velit et, dolores repellendus tempore nulla. Quod
            facilis nostrum illo dolorum optio delectus iure blanditiis
            dignissimos inventore tenetur sit, odit fugiat repellat
            reprehenderit rem assumenda pariatur voluptatibus excepturi numquam
            cumque at ipsum quasi. Perferendis!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            unde aliquid temporibus. Dolores tenetur sequi quod! Libero ab harum
            laudantium modi debitis, provident ut fugit dolorum quis ducimus
            tempore atque excepturi quaerat quibusdam ea unde, culpa odit
            perspiciatis sequi deleniti vitae voluptatibus nisi beatae!
            <br />
            <br />
            Nam sequi beatae distinctio delectus, quisquam, quasi unde,
            voluptates fugit non a quam facilis id iste iusto veniam aperiam.
            Quod laudantium labore velit et, dolores repellendus tempore nulla.
            Quod facilis nostrum illo dolorum optio delectus iure blanditiis
            dignissimos inventore tenetur sit, odit fugiat repellat
            reprehenderit rem assumenda pariatur voluptatibus excepturi numquam
            cumque at ipsum quasi. Perferendis!
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default About;
