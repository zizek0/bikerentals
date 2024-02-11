"use client";
import React, { useState, useEffect } from "react";
import InputItem from "../Booking/InputItem";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";
function Map() {
  const [selectedCity, setSelectedCity] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const handleCitySelect = (city: string, lat: number, lon: number) => {
    setSelectedCity(city);
    setLatitude(lat);
    setLongitude(lon);
  };

  useEffect(() => {
    // Re-render the map when latitude or longitude changes
    // You can add any additional logic here if needed
  }, [latitude, longitude]);

  return (
    <div
      className="p-4 md:p-5*
    border-[2px]"
    >
      <p className="text-[20px] font-bold">📍 Bikes around you</p>
      <InputItem toggleState={handleCitySelect} />
      <p>
        {selectedCity} {latitude} {longitude}
      </p>

      <MapContainer
        style={{
          height: "70vh",
        }}
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>{selectedCity}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
