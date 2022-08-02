import HeroSection from "./HeroSEction/HeroSection";
import Navbar from "./Navbar/Navbar";
import NightSection from "./NightSection/NightSection";

const Home = () => {
  return (
    <>
      <div className="noisebg"></div>
      <Navbar />
      <HeroSection />
      <NightSection />
    </>
  );
};

export default Home;
