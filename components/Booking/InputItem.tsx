"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import cities from './cities.json';

type City = {
  name: string;
  latitude: number;
  longitude: number;
};

type InputItemProps = {
  toggleState: (cityName: string, latitude: number, longitude: number) => void;
};

function InputItem(props: InputItemProps) {
  const [inputValue, setInputValue] = useState("");
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<City | null>(null); // Added state for selected city
  const listRef = useRef<HTMLUListElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    const filtered = cities.filter((city) =>
      city.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCities(filtered);
  };

  const handleCitySelect = (city: City) => {
    setInputValue(city.name);
    setSelectedCity(city); // Set the selected city
    setFilteredCities([]);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (listRef.current && !listRef.current.contains(event.target as Node)) {
      setFilteredCities([]);
    }
  };

  const handleSearch = () => {
    if (selectedCity) {
      const { name, latitude, longitude } = selectedCity;
      props.toggleState(name, latitude, longitude); // Send the city name, latitude, and longitude to the parent component
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-slate-200 p-3 rounded-lg mt-3 flex item-center gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-search"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M21 21l-6 -6" />
      </svg>{" "}
      <input
        type="text"
        placeholder="Enter your city"
        className="bg-transparent w-full outline-none"
        value={inputValue}
        onChange={handleInputChange}
      />
      {filteredCities.length > 0 && (
        <ul
          ref={listRef}
          className="absolute bg-white mt-8 ml-10 p-2 rounded-lg shadow-md z-10"
        >
          {filteredCities.slice(0, 5).map((city) => (
            <li
              key={city.name}
              className="cursor-pointer"
              onClick={() => handleCitySelect(city)}
            >
              {city.name}
            </li>
          ))}
        </ul>
      )}
      <button className="bg-blue-500 text-white px-4  rounded-lg" onClick={handleSearch}>Enter</button>
    </div>
  );
}

export default InputItem;
