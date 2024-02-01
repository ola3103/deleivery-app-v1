import { Link } from "react-router-dom";
import GeneralButton from "./GeneralButton";

const CtaSectionTwo = () => {
  return (
    <section className="cta-section-2">
      <div className="container ">
        <div className="cta-section-2-container">
          <h1 className="cta-section-2-header">Bringing Growth Through</h1>
          <h1 className="cta-section-2-header">On Time Delivery</h1>
          <p className="cta-section-2-text">
            A new perspective of business delivery. We are as fast as air and as
            trustworthy as your heart
          </p>
          <img
            src="./cta-2.svg"
            alt="cta-image"
            className="cta-section-2-image"
          />
          <GeneralButton btnText="Get Started" />
        </div>
      </div>
    </section>
  );
};

export default CtaSectionTwo;
