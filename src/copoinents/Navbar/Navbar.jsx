import { useState, useEffect, useRef } from "react";
import Svg from "../../common/Svg";
import Conenct from "../../assest/connectWallet.svg";
import "../../css/Navbar/Navbar.css";
import MobileMenu from "../mobileMenu/MobileMenu";
import NavLinks from "../../common/NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const Navelemnt = useRef();
  const [menu, setMenu] = useState(false);
  const HanldleMobile = () => {
    setMenu(true);
  };

  // display Navbar in Scroll
  useEffect(() => {
    const scrollNav = () => {
      if (window.scrollY > Navelemnt.current?.offsetHeight) {
        Navelemnt.current.classList.add("Scrolled");
      } else {
        Navelemnt.current.classList.remove("Scrolled");
      }
    };

    window.addEventListener("scroll", scrollNav);
  }, []);

  // Sub Coponent Return => NavLinks

  return (
    <>
      <nav ref={Navelemnt}>
        <div className="wrraper">
          <div className="leftSide">
            <Svg width={"200px"} />
            <NavLinks />
          </div>

          <img src={Conenct} alt="Conenct" />

          <GiHamburgerMenu onClick={HanldleMobile} className=" hide " />
        </div>
      </nav>

      {/* MobileMenu */}
      {menu && (
        <>
          <MobileMenu setMenu={setMenu} />
        </>
      )}
    </>
  );
};

export default Navbar;
