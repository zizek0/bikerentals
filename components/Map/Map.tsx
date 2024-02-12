"use client";
import React, { useState, useEffect, useRef } from "react";
import InputItem from "../Booking/InputItem";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";
type MapContainer = any
function Map() {
  const [selectedCity, setSelectedCity] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const mapRef = useRef<MapContainer>(null);
  
  const handleCitySelect = (city: string, lat: number, lon: number) => {
    setSelectedCity(city);
    setLatitude(lat);
    setLongitude(lon);
  };

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.flyTo([latitude, longitude], 14);
    }
  }, [latitude, longitude]);

  return (
    <div className="p-4 md:p-5 border-[2px]">
      <p className="text-[20px] font-bold">📍 Bikes around you</p>
      <InputItem toggleState={handleCitySelect} />
      

      <MapContainer
        ref={mapRef}
        style={{
          height: "70vh",
          position: "relative",
          margin: "0.8rem 0 0 0",
          zIndex: "0"
        }}
        center={[15.2993265, 74.123996]}
        zoom={10}
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
