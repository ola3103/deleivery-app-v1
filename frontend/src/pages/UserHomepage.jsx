import NewDeliveryForm from "../component/NewDeliveryForm";
import Map from "../component/Map";

const UserHomepage = () => {
  return (
    <section className="user-homepage-section container">
      <div className="new-delivery-form-box">
        <NewDeliveryForm />
      </div>
      <div className="map-box">
        <Map />
      </div>
    </section>
  );
};

export default UserHomepage;
