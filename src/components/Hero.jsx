import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import MainLogo from "../assets/MainLogo5.png";

const Hero = () => {
  return (
    <div className="flex items-center">
      <div className="max-w-screen-2xl w-full mx-auto text-white">
        <img className="absolute w-36 md:w-72 -translate-y-20 sm:-translate-y-20 translate-x-[70%] sm:translate-x-[240%] " src={MainLogo} alt="mainlogo"/>
        <div className="relative left-6 sm:left-20 w-1/2 ">
        <h1 className=" font-bold text-5xl sm:text-7xl md:text-[11rem] ">Sou<span className="text-[#8c52ff]">a</span>mya</h1>
        <p className="italic my-5 mb-9 text-xs sm:text-xl md:text-3xl " >MERN <span className="text-[#8c52ff]">Stack</span> Developer</p>
        <button className=" flex py-1 sm:py-4 px-4 sm:px-16 font-medium sm:font-bold rounded-md bg-gradient-to-l from-[#8c52ff] to-[#341671] hover:from-[#7641de] hover:scale-110 duration-150 group">About Me <FaArrowRightLong className=" ml-[5rem] lg:ml-32 absolute group-hover:-right-8 ease-in-out duration-150"/></button>
        </div>
        
      </div >
      <ul className="space-x-14 mr-0 sm:mr-8 relative">
        <a href="https://github.com/Namank65">
          <FaGithub className="hover:bg-[#8c52ff] ease-in-out duration-150 border-black rounded-2xl hover:scale-125 " />
        </a>
        <a href="https://x.com/NamanKu39911889">
          <BsTwitterX className="hover:bg-[#8c52ff] ease-in-out duration-150 border-black rounded-xl hover:scale-125 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/souamya/">
          <FaLinkedin className="hover:bg-[#8c52ff] ease-in-out duration-150 border-black rounded-xl hover:scale-125 cursor-pointer" />
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox">
          <SiGmail className="hover:bg-[#8c52ff] ease-in-out duration-150 border-black rounded-xl hover:scale-125 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/developer_naman/">
          <GrInstagram className="hover:bg-[#8c52ff] ease-in-out duration-150 border-black rounded-xl hover:scale-125 cursor-pointer" />
        </a>
      </ul>
    </div>
  );
};

export default Hero;
