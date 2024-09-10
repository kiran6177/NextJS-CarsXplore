"use client"
import React from 'react'
import CustomButton from './CustomButton';
import Image from 'next/image';

const Hero = () => {
    const handleScroll = ()=>{

    }
  return (
    <div className='w-[100vw] p-16 min-h-[80vh] flex flex-col lg:flex-row'>
      <div className='flex flex-col gap-5 w-full '>
        <h1 className='font-bold text-4xl '>Find and search a car</h1>
        <p>Streamline you car exploration experience</p>
        <CustomButton title={"Explore Cars"} styles={'bg-blue-500 text-white px-5 py-2 rounded-full w-fit'} clickHandler={handleScroll} />
      </div>
      <div className='self-end w-[85%] lg:w-[70%] h-[60vh] relative'>
            <Image alt='hero image' src={'/hero.png'} fill className='object-contain'/>
        </div>
    </div>
  )
}

export default Hero
