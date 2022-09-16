import React from "react";
import "../EduDetails/EduDetails";
import "./intrests.css";
import ColorLensIcon from "@mui/icons-material/ColorLens";
const intrests = () => {
  return (
    <div className="EduDetails" style={{ padding: "0" }}>
      <div>
        <div className="ed-left">
          <span>
            <div className="circle"></div>
            &nbsp;&nbsp;&nbsp;Trying Art
          </span>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I am
            trying to put my imagination on paper to make it look beautiful.
          </span>
        </div>
      </div>

      <div>
        <div className="ed-left">
          <span>
            <div className="circle"></div>
            &nbsp;&nbsp;&nbsp;PhotoShop
          </span>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I would
            like to be more creative and imaginative via photo-shop.
          </span>
        </div>
      </div>
      <div>
        <div className="ed-left">
          <span>
            <div className="circle"></div>
            &nbsp;&nbsp;&nbsp; Listening to music
          </span>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Skimming through Spotify's pop charts is at the best stress
            reliever.
          </span>
        </div>
      </div>
      <div>
        <div className="ed-left">
          <span>
            <div className="circle"></div>
            &nbsp;&nbsp;&nbsp; Playing Shuttle or Excercise
          </span>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I like
            to challenge my reflexes a lot while competing in shuttle.
          </span>
        </div>
      </div>
    </div>
  );
};

export default intrests;
