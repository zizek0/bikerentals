import React from 'react'
import InputItem from './InputItem'

function AutocompleteAddress() {
  return (
    <div className='p-2 md:p-6
    border-[2px] rounded-xl'>
      <p className='text-[20px] font-bold'>Find a ride</p>
      {/* <InputItem/> */}
      <button className='p-3 bg-black w-full mt-5 text-white rounded-lg'>Search</button>
    </div>
  )
}

export default AutocompleteAddress