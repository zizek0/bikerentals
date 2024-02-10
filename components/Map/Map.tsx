"use client";
import React, { useState } from 'react'
import InputItem from '../Booking/InputItem'

function Map() {
  const [selectedCity, setSelectedCity] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const handleCitySelect = (city: string, lat: number, lon: number) => {
    setSelectedCity(city);
    setLatitude(lat);
    setLongitude(lon);
  };

  return (
    <div className='p-4 md:p-5*
    border-[2px] rounded-xl' >

      <p className='text-[20px] font-bold'>Location</p>
        <InputItem
        toggleState={handleCitySelect}
        />
      <p>{selectedCity} {latitude} {longitude}</p>
    </div>
  )
}

export default Map