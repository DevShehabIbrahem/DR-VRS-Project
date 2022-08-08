import { useState } from "react";
import NightImage from "../../assest/NightSection/racePermit.gif";
import alpha from "../../assest/NightSection/countdown.png";
import { Words } from "../../common/words";
import "../../css/NightSection/Night.css";

const NightSection = () => {
  const [onhover, setOnhover] = useState(false);
  const [cc, setCC] = useState(false);

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
        <img src={NightImage} alt="NightImage" />
        <div className="night__feed_content">
          <h3>{nightLowertitle}</h3>
          <p>{nightP1}</p>
          <p>{nightP2}</p>
          <p>{nightP3}</p>
          <h6>{nightSpan}</h6>
          <button
            onMouseEnter={() => setOnhover(true)}
            onMouseLeave={() => setOnhover(false)}
          >
            {!onhover ? "Coming Soon" : nightbutton}
          </button>
        </div>
        {/* Alpha Section */}
      </div>
      <div className="night__alpha">
        <img src={alpha} alt="NightImage" />
        <a href="##">
          <span>MINT</span>
        </a>
      </div>
    </div>
  );
};

export default NightSection;
