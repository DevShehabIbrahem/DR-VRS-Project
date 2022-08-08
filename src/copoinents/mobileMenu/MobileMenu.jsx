import React from "react";
import NavLinks from "../../common/NavLinks";
import "../../css/mobileMenu/MobileMenu.css";
import { AiOutlineClose } from "react-icons/ai";

const MobileMenu = ({ setMenu }) => {
  return (
    <div className="mobilemenu">
      <AiOutlineClose
        className="mobilemenu__close"
        onClick={() => setMenu(false)}
      />
      <NavLinks />
    </div>
  );
};

export default MobileMenu;
