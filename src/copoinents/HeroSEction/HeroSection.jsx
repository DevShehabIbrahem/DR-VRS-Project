import { useEffect } from "react";
import gangSmall from "../../assest/Header/gangSmall.png";
import VId from "../../assest/Header/1.mp4";
import useParallax from "../../hooks/useParallax";
import "./HeroSection.scss";
import Svg from "../../common/Svg";
const HeroSection = () => {
  const Parallax = useParallax();
  useEffect(() => {
    document.addEventListener("mousemove", Parallax);
  }, []);

  return (
    <>
      <div className="vid-container">
        <video width="100%" autoPlay muted loop>
          <source src={VId} type="video/mp4" />
        </video>

        <div className="herosection">
          <Svg layer={"layer"} />
          <img src={gangSmall} alt="" className="layer" data-speed="1" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
