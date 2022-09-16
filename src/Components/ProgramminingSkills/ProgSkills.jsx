import React from "react";
import "./ProgSkills.css";
const ProgSkills = () => {
  return (
    <div class="skill-bars">
      <div class="bar">
        <div class="info">
          <span>
            <div className="circle"></div>
            &nbsp;React
          </span>
        </div>
        <div class="progress-line react">
          <span></span>
        </div>
      </div>
      <div class="bar">
        <div class="info">
          <span>
            <div className="circle"></div>
            &nbsp;JavaScript
          </span>
        </div>
        <div class="progress-line JavaScript">
          <span></span>
        </div>
      </div>
      <div class="bar">
        <div class="info">
          <span>
            <div className="circle"></div>
            &nbsp;HTML
          </span>
        </div>
        <div class="progress-line HTML">
          <span></span>
        </div>
      </div>
      <div class="bar">
        <div class="info">
          <span>
            <div className="circle"></div>
            &nbsp;CSS
          </span>
        </div>
        <div class="progress-line css">
          <span></span>
        </div>
      </div>

      <div class="bar">
        <div class="info">
          <span>
            <div className="circle"></div>
            &nbsp;Java
          </span>
        </div>
        <div class="progress-line Java">
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default ProgSkills;
