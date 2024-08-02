import React from "react";
import logo from "../assets/logo3.png";
import { FaPhone } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="flex justify-between">
      <div>
        <img src={logo} alt="logo" className="w-48" />
      </div>
      <div>
        <li className="mr-8 mt-4"><FaPhone/></li>
      </div>
    </nav>
  );
};

export default Header;
