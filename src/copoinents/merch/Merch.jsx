import React from "react";
import Tv from "../../assest/tv-ez5.gif";
import "./merch.scss";
import { Words } from "../../common/words";

const Merch = () => {
  const { merch } = Words;
  return (
    <div className="merch">
      <div className="merch__leftside">
        <div className="merch__runtext">
          <div className="scroll-text">
            <h5>NEWS DR/VRS</h5>
            <h5>NEWS DR/VRS</h5>
            <h5>NEWS DR/VRS</h5>
          </div>
        </div>
        <div className="merch__tv"></div>
      </div>
      <div className="merch__right">
        <h3>{merch}</h3>
      </div>
    </div>
  );
};

export default Merch;
