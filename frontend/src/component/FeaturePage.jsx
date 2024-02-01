const FeaturePage = () => {
  return (
    <section className="feature-section">
      <div className="container">
        <h1 className="feature-section-header">Why Choose Our Service</h1>
        <div className="feature-box">
          <div className="single-feature">
            <img
              src="./feature-1.png"
              alt="feature-image"
              className="single-feature-image"
            />
            <div className="single-feature-text-box">
              <h2 className="single-feature-header">24/7 Support</h2>
              <p className="single-feature-text">
                Our dedicated team is always already to assist, ensuring you
                receive prompt and reliable assistance around the clock. Your
                satisfaction is our priority
              </p>
            </div>
          </div>
          <div className="single-feature">
            <div className="single-feature-text-box">
              <h2 className="single-feature-header">Live Tracking</h2>
              <p className="single-feature-text">
                Stayed informed in real-time, monitoring your shippment journey
                with precision. Transperency and control at your finger tips, no
                need for worries.
              </p>
            </div>
            <img
              src="./feature-3.png"
              alt="feature-image"
              className="single-feature-image"
            />
          </div>
          <div className="single-feature">
            <img
              src="./feature-4.png"
              alt="feature-image"
              className="single-feature-image"
            />
            <div className="single-feature-text-box">
              <h2 className="single-feature-header">Fast Shipping</h2>
              <p className="single-feature-text">
                Experience rapid deliveries with our fast shipping feature. Your
                parcels are in safe hands, ensuring swift and secure
                transportation to meet your urgent delivery needs.
              </p>
            </div>
          </div>
          <div className="single-feature">
            <div className="single-feature-text-box">
              <h2 className="single-feature-header">Parcel Pickup </h2>
              <p className="single-feature-text">
                Enjoy the convinience of having your parcels collected from your
                doorstep, providing a hassle-free and efficient way to send your
                items securely to their destination.
              </p>
            </div>
            <img
              src="./feature-5.png"
              alt="feature-image"
              className="single-feature-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturePage;
