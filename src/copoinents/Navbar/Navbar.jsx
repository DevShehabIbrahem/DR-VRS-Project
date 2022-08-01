import React from "react";
import Svg from "../../common/Svg";
import Conenct from "../../assest/connectWallet.svg";
import { Words } from "../../common/words";
import "./Navbar.scss";

const Navbar = () => {
  // Sub Coponent Return => NavLinks
  const NavLinks = () => (
    <ul>
      {Words.Navbar.map((li) => (
        <li>{li}</li>
      ))}
    </ul>
  );

  return (
    <nav>
      <div className="wrraper">
        <div className="leftSide">
          <Svg width={"200px"} />
          <NavLinks />
        </div>
        <img src={Conenct} alt="Conenct" />
      </div>
    </nav>
  );
};

export default Navbar;
