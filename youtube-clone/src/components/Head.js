import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLogoYoutube } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";

function Head() {
  return (
    <div>
        {/* header left section which contain hamburger menue and youtube icon */}
        <div>
            <RxHamburgerMenu />
            <IoLogoYoutube className='text-red-500' />
        </div>
        {/* header mid section which contain search input */}
        <div>
           <input type='text' />
           <GoSearch /> 
        </div>
        {/* header right section which contain user */}
        <div>
            <FaUserCircle />
        </div>
    </div>
  )
}

export default Head