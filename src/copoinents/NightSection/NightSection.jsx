import React from "react";
import NightImage from "../../assest/NightSection/racePermit.gif";
import { Words } from "../../common/words";
import "./Night.scss";

const NightSection = () => {
  const {
    NightSectiontitle,
    nightP1,
    nightP2,
    nightP3,
    nightHover,
    nightLowertitle,
    nightSpan,
    nightbutton,
  } = Words;
  return (
    <div className="night">
      <h1>{NightSectiontitle}</h1>
      <div className="night__feed">
        <img src={NightImage} alt="" />
        <div className="night__feed_content">
          <h3>{nightLowertitle}</h3>
          <p>{nightP1}</p>
          <p>{nightP2}</p>
          <p>{nightP3}</p>
          <h6>{nightSpan}</h6>
          <button>{nightbutton}</button>
        </div>
      </div>
    </div>
  );
};

export default NightSection;
