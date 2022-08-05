import { useLayoutEffect, useEffect } from "react";
import { leftside, phase, rightside } from "../../common/Words/Roadmap";
import "./Roadmap.scss";
const Roadmap = () => {
  const { textTow, textone, textthree } = leftside;
  const { text1, text2, text3, title } = rightside;
  return (
    <div className="roadmap">
      <h2>{title}</h2>
      <div className="roadmap__innercontent">
        <div className="roadmap__left">
          <p>{textone}</p>
          <p>{textTow}</p>
          <p>{textthree}</p>
        </div>

        <div className="roadmap__right">
          <div>
            <h3>{text1}</h3>
          </div>
          <div>
            <h3>{text2}</h3>
          </div>
          <div>
            <h3>{text3}</h3>
          </div>
        </div>
      </div>
      <div className="roadmap__phase">
        <div>
          <h3> {phase.textp1}</h3>
          <p>{phase.PHASE1}</p>
        </div>
        <div>
          <h3> {phase.textp2}</h3>
          <p>{phase.PHASe2}</p>
        </div>
        <div>
          <h3>{phase.textp3}</h3>
          <p>{phase.PHASE3}</p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
