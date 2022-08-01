import { useEffect, useRef } from "react";
import Svg from "../../common/Svg";
import Conenct from "../../assest/connectWallet.svg";
import { Words } from "../../common/words";
import "./Navbar.scss";

const Navbar = () => {
  const Navelemnt = useRef();

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
  const NavLinks = () => (
    <ul>
      {Words.Navbar.map((li) => (
        <li>{li}</li>
      ))}
    </ul>
  );

  return (
    <nav ref={Navelemnt} className="ss">
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
