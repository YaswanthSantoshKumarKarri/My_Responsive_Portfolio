import React, { useContext } from "react";
import "./Intro.css";
import Linkedin from "../../img/linkedin.png";
import Github from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Glassimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="Intro" id="home">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Santosh Kumar</span>
          <span>
            I am a self-motivated and passionate individual who loves to code,
            build and collaborate in creating software products that creates
            impact.
          </span>
          <Link smooth to="contact">
            <button className="button i-button">Hire Me</button>
          </Link>

          <div className="i-icons">
            <a
              href="https://github.com/YaswanthSantoshKumarKarri"
              target="_blank"
            >
              <img src={Github} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/yaswanth-karri-411196211/"
              target="_blank"
            >
              <img src={Linkedin} alt="" />
            </a>
            <a
              href="https://www.instagram.com/_yaswanth_karri_/"
              target="_blank"
            >
              <img src={Instagram} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <div className="floating-div" style={{ top: "-5%", left: "58%" }}>
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </div>
        <div className="floating-div" style={{ top: "18rem", left: "-5rem" }}>
          <FloatingDiv image={Thumbup} txt1="Web" txt2="Designer" />
        </div>
        <div className="glassimoji" style={{ top: "0%", left: "-12%" }}>
          <img
            initial={{ left: "-36%" }}
            whileInView={{ left: "-24%" }}
            transition={transition}
            src={Glassimoji}
            width="122px"
            height="112px"
          />
        </div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "15rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
