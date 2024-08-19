import React from "react";
import logo from "../assets/Logo5.png";
import { PiReadCvLogo } from "react-icons/pi";

const Header = () => {
  return (
    <nav className="flex justify-between max-w-screen-2xl mx-auto w-[99%] sm:w-[80%]">
      <div>
        <img src={logo} alt="logo" className=" opacity-80 w-12 sm:w-20 mt-8 sm:m-5 absolute ml-4" />
      </div>
      <div className="space-x-14 mt-8 mr-11 sm:mr-14 relative" >
        <a >
          <PiReadCvLogo className="hover:text-[#8c52ff] size-5 sm:size-7 text-white hover:scale-125 ease-in-out duration-100 absolute border-black rounded-2xl cursor-pointer" />
        </a>
      </div>
    </nav>
  );
};

export default Header;
