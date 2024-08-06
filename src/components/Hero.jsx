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
      <div className="max-w-screen-2xl w-full mx-auto text-white">
        <img className="absolute w-72 -translate-y-20 translate-x-[240%] " src={MainLogo} alt="mainlogo"/>
        <div className="relative left-20 w-1/2">
        <h1 className=" font-bold text-[11rem] ">Sou<span className="text-[#8c52ff]">a</span>mya</h1>
        <p className="italic my-5 mb-9 text-3xl " >MERN <span className="text-[#8c52ff]">Stack</span> Developer</p>
        <button className="py-4 px-16 font-extrabold rounded-md bg-gradient-to-l from-[#8c52ff] to-[#341671] hover:from-[#7641de] to-[#331273]">About Me</button>
        </div>
        
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
