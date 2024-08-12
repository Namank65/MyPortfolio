import React from "react";
import logo from "../assets/Logo4.png";
import { FaPhone } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="flex justify-between max-w-screen-2xl mx-auto w-[95%]">
      <div>
        <img src={logo} alt="logo" className=" w-20 sm:w-36 mt-8 sm:m-5 absolute" />
      </div>
      <div className="space-x-14 mt-11 mr-11 sm:mr-14 relative" >
        <a >
          <FaPhone className="hover:bg-[#8c52ff] hover:scale-125 ease-in-out duration-150 absolute border-black rounded-2xl cursor-pointer" />
        </a>
      </div>
    </nav>
  );
};

export default Header;
