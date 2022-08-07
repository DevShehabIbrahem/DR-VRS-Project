import Faq from "./FAQ/Faq";
import Footer from "./Footer/Footer";
import HeroSection from "./HeroSEction/HeroSection";
import Merch from "./merch/Merch";
import Navbar from "./Navbar/Navbar";
import NextSection from "./NextSection/NextSection";
import NightSection from "./NightSection/NightSection";
import Roadmap from "./RoadMap/Roadmap";
import Team from "./Team/Team";

const Home = () => {
  return (
    <>
      <div className="noisebg"></div>
      <Navbar />
      <HeroSection />
      <NightSection />
      <NextSection />
      <Roadmap />
      <Merch />
      <Team />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
