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
        <h1 className="text-white font-bold text-6xl font-['Sparten']">Souamya</h1>
        <img src={MainLogo} alt="mainlogo" />
      </div>
      <ul className="space-x-14 mr-8">
        <a href="https://github.com/Namank65">
          <FaGithub className="hover:bg-[#8c52ff] border-black rounded-2xl hover:scale-125 " />
        </a>
        <a href="https://github.com/Namank65">
          <BsTwitterX className="hover:bg-[#8c52ff] border-black rounded-xl hover:scale-125 cursor-pointer" />
        </a>
        <a href="https://github.com/Namank65">
          <FaLinkedin className="hover:bg-[#8c52ff] border-black rounded-xl hover:scale-125 cursor-pointer" />
        </a>
        <a href="https://github.com/Namank65">
          <SiGmail className="hover:bg-[#8c52ff] border-black rounded-xl hover:scale-125 cursor-pointer" />
        </a>
        <a href="https://github.com/Namank65">
          <GrInstagram className="hover:bg-[#8c52ff] border-black rounded-xl hover:scale-125 cursor-pointer" />
        </a>
      </ul>
    </div>
  );
};

export default Hero;
