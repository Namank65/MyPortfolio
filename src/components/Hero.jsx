import React, { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import MainLogo from "../assets/MainLogo5.png";
import AboutMePop from "./AboutMePop";
import LatestWorks from "./LatestWorks";

const Hero = () => {
  const [aboutMe, setAboutMe] = useState(false);

  const aboutStateManupulation = () => setAboutMe(false);
  return (
    <div className="flex items-center">
      <div className="max-w-screen-2xl w-[70%] mx-auto text-white">
        <div>
          <img
            className="opacity-55 absolute w-36 md:w-72 left-[26%] sm:left-[50%] -translate-y-20"
            src={MainLogo}
            alt="mainlogo"
          />
        </div>
        <div className="relative left-6 sm:left-20 w-1/2 ">
          <h1 className=" font-bold text-5xl sm:text-7xl md:text-9xl ">
            Sou<span className="text-[#8c52ff]">a</span>mya
          </h1>
          <p className="italic my-5 mb-9 text-xs sm:text-xl md:text-2xl ">
            MERN <span className="text-[#8c52ff]">Stack</span> Developer
          </p>
          <button
            onClick={() => setAboutMe(!aboutMe)}
            className=" translate-y-12 sm:translate-y-0 flex py-1 sm:py-2 px-2 sm:px-11 font-medium sm:font-bold rounded-md bg-gradient-to-l from-[#8c52ff] to-[#341671] hover:scale-110 duration-150 group"
          >
            About Me
            <FaArrowRightLong className=" text-white size-6 ml-[5rem] lg:ml-28 absolute group-hover:-right-6 ease-in-out duration-150 " />
          </button>
        </div>
        {aboutMe && <AboutMePop state={aboutStateManupulation} />}
      </div>
      {aboutMe ? (
        <> </>
      ) : (
        <ul className="space-x-9 mr-0 sm:mr-8 relative">
          <a href="https://github.com/Namank65">
            <FaGithub className="hover:text-[#8c52ff] size-5 sm:size-7 text-white ease-in-out duration-150  hover:scale-125 " />
          </a>
          <a href="https://x.com/NamanKu39911889">
            <BsTwitterX className="hover:text-[#8c52ff] size-5 sm:size-7 text-white ease-in-out duration-150  hover:scale-125 cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/souamya/">
            <FaLinkedin className="hover:text-[#8c52ff] size-5 sm:size-7 text-white ease-in-out duration-150  hover:scale-125 cursor-pointer" />
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox">
            <SiGmail className="hover:text-[#8c52ff] size-5 sm:size-7 text-white ease-in-out duration-150 hover:scale-125 cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/developer_naman/">
            <GrInstagram className="hover:text-[#8c52ff] size-5 sm:size-7 text-white ease-in-out duration-150  hover:scale-125 cursor-pointer" />
          </a>
        </ul>
      )}
    </div>
  );
};

export default Hero;
