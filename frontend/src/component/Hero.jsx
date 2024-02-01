import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GeneralButton from "./GeneralButton";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container container">
        <div className="hero-side-1">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="hero-side-1-heading-1"
          >
            Best In Town
          </motion.h3>
          <h1 className="hero-side-1-heading-2">Everything At</h1>
          <h1 className="hero-side-1-heading-2">
            Your <span>Doorstep</span>
          </h1>
          <p className="hero-side-1-text">
            Experience seamless courier services with our efficient network,
            ensuring reliable and timely delivery. Choose us for hassle-free
            shipping experience!
          </p>
          <GeneralButton btnText="Get Started" />
        </div>
        <div className="hero-side-2">
          <img src="./hero.svg" alt="hero-picture" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
