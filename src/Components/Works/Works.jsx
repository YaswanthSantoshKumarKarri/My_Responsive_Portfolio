import React from "react";
import "./Works.css";
import Upwork from "../../img/html.png";
import Fiverr from "../../img/react.png";
import Amazon from "../../img/git (2).png";
import Shopify from "../../img/css.png";
import Facebook from "../../img/js.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works" id="skills">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Worked With All These
        </span>
        <span>Technologies</span>
        <span>
          I am having Solid understanding of the core concepts and Proficient in
          JavaScript,
          <br /> ReactJS, PHP, HTML, CSS and basic knowledge in Python. I am
          therefore currently
          <br /> looking for a front-end developer role in a company where I can
          upskill myself.
        </span>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
