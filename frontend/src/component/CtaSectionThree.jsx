import { Link } from "react-router-dom";
import GeneralButton from "./GeneralButton";

const CtaSectionThree = () => {
  return (
    <section className="cta-section-3">
      <div className="container cta-section-3-container">
        <div className="cta-section-3-text-box">
          <h1 className="cta-section-3-header">Timely Delivery</h1>
          <p className="cta-section-3-text">
            We prioritize punctuality without compromising reliability. Trust us
            for swift and dependable shipping, ensuring your parcels reach its
            destination on time, everytime
          </p>
          <GeneralButton btnText="Try Faxt Link Now!!" />
        </div>
        <img
          src="./feature-2.png"
          alt="cta-section-3-image"
          className="cta-section-3-image"
        />
      </div>
    </section>
  );
};

export default CtaSectionThree;
