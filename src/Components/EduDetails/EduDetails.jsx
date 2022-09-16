import React from "react";
import "./EduDetails.css";
const EduDetails = () => {
  return (
    <div className="EduDetails">
      <div>
        <div className="ed-left">
          <span>
            <div className="circle"></div>
            &nbsp;&nbsp;&nbsp; SRKR Engineering College
          </span>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            INFORMATION TECHNOLOGY
          </span>
        </div>
        <div className="ed-right">
          <button className="button edu-btn">2018-2022</button>
        </div>
      </div>
      <div>
        <div className="ed-left">
          <span>
            <div className="circle"></div>
            &nbsp;&nbsp;&nbsp; Aditya Junior College
          </span>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; BOARD
            OF INTERMEDIATE
          </span>
        </div>
        <div className="ed-right">
          <button className="button edu-btn">2016-2018</button>
        </div>
      </div>
      <div>
        <div className="ed-left">
          <span>
            <div className="circle"></div>
            &nbsp;&nbsp;&nbsp; Montessori’s E M School
          </span>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SSC
          </span>
        </div>
        <div className="ed-right">
          <button className="button edu-btn">2015-2016</button>
        </div>
      </div>
    </div>
  );
};

export default EduDetails;
