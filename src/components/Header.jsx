import React from "react";
import logo from "../assets/Logo4.png";
import { FaPhone } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="flex justify-between max-w-screen-2xl mx-auto w-[95%]">
      <div>
        <img src={logo} alt="logo" className="w-36 m-5" />
      </div>
      <div >
        <li className="mr-8 mt-4 ">
          <FaPhone className="hover:bg-[#8c52ff] hover:scale-125 border-black rounded-2xl cursor-pointer" />
        </li>
      </div>
    </nav>
  );
};

export default Header;
