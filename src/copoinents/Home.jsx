import HeroSection from "./HeroSEction/HeroSection";
import Navbar from "./Navbar/Navbar";
import NextSection from "./NextSection/NextSection";
import NightSection from "./NightSection/NightSection";
import Roadmap from "./RoadMap/Roadmap";

const Home = () => {
  return (
    <>
      <div className="noisebg"></div>
      <Navbar />
      <HeroSection />
      <NightSection />
      <NextSection />
      <Roadmap />
    </>
  );
};

export default Home;
