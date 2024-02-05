import { Link } from "react-router-dom";
import { MdPlayArrow } from "react-icons/md";

const NewDeliveryForm = () => {
  return (
    <form className="newdelivery-form container">
      <div className="top-form-part">
        <Link to="/">Logo</Link>
        <p className="top-form-part-2">Speed, Reliable and Secure</p>
      </div>
      <div className="delivery-part">
        <h3 className="delivery-header">Pickup Details</h3>
        <div className="delivery-form">
          <label className="delivery-label">
            <span className="delivery-form-icon">
              <MdPlayArrow />
            </span>
            <input
              type="text"
              className="delivery-input"
              placeholder="Full Name"
            />
          </label>
          <label className="delivery-label">
            <span className="delivery-form-icon">
              <MdPlayArrow />
            </span>
            <input
              type="text"
              className="delivery-input"
              placeholder="Address"
            />
          </label>
          <label className="delivery-label">
            <span className="delivery-form-icon">
              <MdPlayArrow />
            </span>
            <input
              type="text"
              className="delivery-input"
              placeholder="Landmark"
            />
          </label>
          <label className="delivery-label">
            <span className="delivery-form-icon">
              <MdPlayArrow />
            </span>
            <input
              type="tel"
              className="delivery-input"
              placeholder="Phone No."
            />
          </label>
          <label className="delivery-label">
            <span className="delivery-form-icon">
              <MdPlayArrow />
            </span>
            <input
              type="email"
              className="delivery-input"
              placeholder="Email"
            />
          </label>
        </div>
      </div>
      <div className="delivery-part">
        <h3 className="delivery-header">Delivery Point</h3>
        <div className="delivery-form">
          <label className="delivery-label">
            <span className="delivery-form-icon">
              <MdPlayArrow />
            </span>
            <input
              type="text"
              className="delivery-input"
              placeholder="Full Name"
            />
          </label>
          <label className="delivery-label">
            <span className="delivery-form-icon">
              <MdPlayArrow />
            </span>
            <input
              type="text"
              className="delivery-input"
              placeholder="Address"
            />
          </label>
          <label className="delivery-label">
            <span className="delivery-form-icon">
              <MdPlayArrow />
            </span>
            <input
              type="text"
              className="delivery-input"
              placeholder="Landmark"
            />
          </label>
          <label className="delivery-label">
            <span className="delivery-form-icon">
              <MdPlayArrow />
            </span>
            <input
              type="tel"
              className="delivery-input"
              placeholder="Phone No."
            />
          </label>
          <label className="delivery-label">
            <span className="delivery-form-icon">
              <MdPlayArrow />
            </span>
            <input
              type="email"
              className="delivery-input"
              placeholder="Email"
            />
          </label>
        </div>
      </div>

      <div className="delivery-info">
        <h3 className="delivery-info-header">Billing Information</h3>
        <p className="delivery-distance">
          <span className="delivery-distance-1">Distance</span>
          <span className="delivery-distance-2">20KM</span>
        </p>
        <p className="delivery-price">
          <span className="delivery-price-1">Price</span>
          <span className="delivery-price-2">$200.00</span>
        </p>
        <button className="payment-btn">Check Out</button>
      </div>
    </form>
  );
};

export default NewDeliveryForm;
