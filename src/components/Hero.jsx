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
        <a href="https://x.com/NamanKu39911889">
          <BsTwitterX className="hover:bg-[#8c52ff] border-black rounded-xl hover:scale-125 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/souamya/">
          <FaLinkedin className="hover:bg-[#8c52ff] border-black rounded-xl hover:scale-125 cursor-pointer" />
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox">
          <SiGmail className="hover:bg-[#8c52ff] border-black rounded-xl hover:scale-125 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/developer_naman/">
          <GrInstagram className="hover:bg-[#8c52ff] border-black rounded-xl hover:scale-125 cursor-pointer" />
        </a>
      </ul>
    </div>
  );
};

export default Hero;
