import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";

const Map = () => {
  return (
    <MapContainer
      id="map"
      center={{ lat: 51.505, lng: -0.09 }}
      zoom={15}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;
