import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLogoYoutube } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";

function Head() {
  return (
    <div className='grid grid-flow-col shadow-lg p-3 bg-[#1e1d1e] font-semibold'>
        {/* header left section which contain hamburger menue and youtube icon */}
        <div className='flex col-span-1 items-center text-[24px] justify-around'>
            <RxHamburgerMenu className='text-white' />
            <div className='flex items-center'>
                <IoLogoYoutube className='text-red-500' /><span className='text-white'>Youtube</span>
            </div>
        </div>
        {/* header mid section which contain search input */}
        <div className='flex col-span-10 items-center justify-center'>
           <div className='w-3/4 flex items-center px-6'>
                <input type='text' className='justify-center w-full p-1' style={{borderRadius:'15px 0px 0px 15px'}}/>
                <div className='p-1 bg-gray-700 w-14 justify-center flex' style={{borderRadius:'0px 15px 15px 0px'}}>
                    <GoSearch className='text-white text-[24px] cursor-pointer' /> 
                </div>
           </div>
        </div>
        {/* header right section which contain user */}
        <div className='col-span-1 flex items-center'>
            <FaUserCircle className='text-white text-[24px]' />
        </div>
    </div>
  )
}

export default Head