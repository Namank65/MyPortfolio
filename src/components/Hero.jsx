import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import MainLogo from "../assets/MainLogo5.png";

const Hero = () => {
  return (
    <div className="flex items-center">
      <div className="max-w-screen-2xl w-full mx-auto">
        <h1>Souamya</h1>
        <img src={MainLogo} alt="mainlogo" />
      </div>
      <ul className="space-y-6 mr-8">
        <li className="hover:bg-[#8c52ff] border-black rounded-2xl hover:scale-125 cursor-pointer">
          <FaGithub />
        </li>
        <li className="hover:bg-[#8c52ff] border-black rounded-2xl hover:scale-125 cursor-pointer">
          <FaLinkedin />
        </li>
        <li className="hover:bg-[#8c52ff] border-black rounded-2xl hover:scale-125 cursor-pointer">
          <BsTwitterX />
        </li>
        <li className="hover:bg-[#8c52ff] border-black rounded-2xl hover:scale-125 cursor-pointer">
          <SiGmail />
        </li>
        <li className="hover:bg-[#8c52ff] border-black rounded-2xl hover:scale-125 cursor-pointer">
          <GrInstagram />
        </li>
      </ul>
    </div>
  );
};

export default Hero;
