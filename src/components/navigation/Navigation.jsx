import React from "react";
import "./Navigation.css";

function Navigation({ active }) {
  return (
    <div>
      <ul className="navlist">
        <li className="navitem">Intro</li>
        <li className="navitem">
          <a href="#about">About</a>
        </li>
        <li className="navitem">Skills</li>
        <li className="navitem">Works</li>
        <li className="navitem">Contact me</li>
      </ul>
    </div>
  );
}

export default Navigation;
