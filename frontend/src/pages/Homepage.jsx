import CtaSectionOne from "../component/CtaSectionOne";
import CtaSectionThree from "../component/CtaSectionThree";
import CtaSectionTwo from "../component/CtaSectionTwo";
import FeaturePage from "../component/FeaturePage";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import NavBar from "../component/NavBar";

const Homepage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <FeaturePage />
      <CtaSectionOne />
      <CtaSectionTwo />
      <CtaSectionThree />
      <Footer />
    </>
  );
};

export default Homepage;
