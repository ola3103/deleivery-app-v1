import { Link } from "react-router-dom";
import GeneralButton from "./GeneralButton";

const CtaSectionOne = () => {
  return (
    <section className="cta-section-1">
      <div className="container ">
        <div className="cta-section-1-container">
          <img
            src="./cta-1.svg"
            alt="cta-image"
            className="cta-section-1-image"
          />
          <div className="cta-section-1-text-box">
            <h1 className="cta-section-1-header">Deliver your stuff</h1>
            <h1 className="cta-section-1-header-2">Hassle free</h1>
            <p className="cta-section-1-text">
              Get your products delivered on time with ease. We allow you to
              schedule and manage your pick ups and drops with a single tap
            </p>
            <GeneralButton btnText="Get Started" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSectionOne;
