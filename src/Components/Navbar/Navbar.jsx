import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Santosh</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link spy={true} smooth to="home">
              Home
            </Link>
            <Link spy={true} smooth to="resume">
              Resume
            </Link>
            <Link spy={true} smooth to="services">
              Services
            </Link>
            <Link spy={true} smooth to="skills">
              Skills
            </Link>
            <Link spy={true} smooth to="portfolio">
              Portfolio
            </Link>
          </ul>
        </div>
        <Link spy={true} smooth to="contact">
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
