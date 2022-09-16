import React, { useState } from "react";
import "./Resume.css";
import PaletteIcon from "@mui/icons-material/Palette";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import EngineeringSharpIcon from "@mui/icons-material/EngineeringSharp";
import { getElementError } from "@testing-library/react";
import { Details, Interests } from "@mui/icons-material";
import EduDetails from "../EduDetails/EduDetails";
import ProgSkills from "../ProgramminingSkills/ProgSkills";
import Intersts from "../Intrests/intrests";
const Resume = () => {
  const [active, setActive] = useState("education");
  return (
    <div className="resume">
      <div className="headersResume">
        <span
          className="portfoliospan1"
          //   style={{ color: darkMode ? "white" : "" }}
        >
          Resume
        </span>
        <span>My formal Bio Details</span>
      </div>

      <div className="divider">
        <div></div>
        <div></div>
      </div>
      <div className="details">
        <div className="d-left">
          <SchoolSharpIcon />
          <EngineeringSharpIcon />
          <PaletteIcon />
        </div>
        <div className="d-middle">
          <div onClick={() => setActive("education")}>Education</div>
          <div onClick={() => setActive("progSkills")}>Programming Skills</div>
          <div onClick={() => setActive("interests")}>Intrests</div>
        </div>

        <div className="d-right">
          {active === "education" && <EduDetails />}
          {active === "progSkills" && <ProgSkills />}
          {active === "interests" && <Intersts />}
        </div>
      </div>
    </div>
  );
};

export default Resume;
