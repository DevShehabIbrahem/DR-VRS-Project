import React from "react";
import { Svg } from "../../assest/Svg";
import { Words } from "../../common/words";
import "./NextSection.scss";
import VId from "../../assest/NightSection/FINAL.mp4";

const NextSection = () => {
  const { next__span, next, next__DRIVE, next__FOUNDERS, next__last } = Words;
  return (
    <>
      {/* Next Step Section */}
      <div className="next">
        <div className="next__feed">
          <div className="next__video">
            <video width="100%" autoPlay muted loop>
              <source src={VId} type="video/mp4" />
            </video>
          </div>

          <div className="next__info">
            <div>
              {next.map((item, i) => (
                <p>{item}</p>
              ))}
            </div>
            <div>
              <p>{next__DRIVE}</p>
              <p>{next__FOUNDERS}</p>
            </div>
            <div>
              <p>{next__last}</p>
            </div>
            <span>{next__span}</span>
          </div>
        </div>
        <div className="next__right">
          {Svg.map((svgitem) => (
            <div className="next__svg">{svgitem}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NextSection;
