import React from "react";
import logo from "../assets/logo3.png";
import { FaPhone } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="flex justify-between max-w-screen-2xl mx-auto w-full">
      <div>
        <img src={logo} alt="logo" className="w-48" />
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
