import React from "react";
import "./Navigation.css";

function Navigation({ active }) {
  return (
    <div>
      <ul className="navlist">
        <li className="navitem">
          <a href="#about">About</a>
        </li>
        <li className="navitem">
          <a href="#skills">Skills</a>
        </li>
        <li className="navitem">
          <a href="#works">Works</a>
        </li>
        <li className="navitem">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
