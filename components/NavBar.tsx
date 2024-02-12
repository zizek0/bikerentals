"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

function NavBar() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(window.location.pathname === "/");
  }, []);

  return (
    <div className='flex justify-between p-3 px-10 py-3 border-b-[1px] shadow-sm'>
        <div className='flex gap-10 items-center'>
          <Link href={"/"}>
            <Image src="/logo.png"
            alt="logo"
            width={240}
            height={120}
            />
          </Link>
        </div>
            <div className='hidden md:flex gap-6'>
                <h2 className={`hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all ${isActive ? 'bg-gray-100' : ''}`}>Home</h2>
                <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>Our Bikes</h2>
                <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>Location List</h2>
                <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>Your Orders</h2>
                <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>Help▼</h2>
                <UserButton afterSignOutUrl='/'/>
            </div>
    </div>
  )
}

export default NavBar