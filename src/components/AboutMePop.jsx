import React from "react";
import { RxCross2 } from "react-icons/rx";
import Skills from "./Skills";
import aboutMeImg from "../assets/AboutMe.gif";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";

const AboutMePop = ({ state }) => {
  const skills = [
    "#javascript",
    "#react.js",
    "#redux",
    "#node.js",
    "#express.js",
    "#mongoDB",
    "#cloudinary",
    "#html",
    "#css",
    "#tailwind",
    "#github",
    "#Jwt",
  ];

  return (
    <div className="flex w-[90%] h-[90%] bg-slate-900 rounded-2xl text-white  absolute left-[5%] bottom-[5%] z-10 ">
      <div className="flex flex-col w-[40%] ml-8 mt-5">
        <div className="cursor-default">
          <h1 className="  text-sky-600 font-bold text-xl p-2 md:p-8 md:text-2xl">ABOUT ME</h1>
          <p className=" text-xs pl-2 md:pl-10 md:text-sm ">
            I help business owners and busy web developers to design & develop
            creative websites that fits their vision and attracts the visitors
            to stay for ever. Technologies and tools that I use to create such
            awesome websites.
          </p>
          <div className="flex flex-wrap gap-1 pl-2 mt-8 md:pl-10 md:gap-3 mb-4 md:mb-0">
            {skills.map((s, i) => (
              <Skills key={i} data={s} />
            ))}
          </div>
        </div>

        <div>
          <h1 className=" mb-4 text-sky-600 font-bold cursor-default text-xl p-2 md:p-10 md:text-2xl">
            MERN STACK
          </h1>
          <div className="flex gap-3 mt-8 font-semibold">
            <div className="flex flex-col items-center text-green-500 group">
              <DiMongodb className="size-12 z-20" />
              <span className="text-2xl mt-4">M</span>
              <p className="relative shadow-xl shadow-green-400 opacity-0 group-hover:opacity-100 group-hover:-top-36 -top-28 hover:transition-all duration-200 ease-in-out px-2 py-1 bg-green-400 text-black rounded-full after:content-[''] after:bg-green-400 after:w-4 after:h-4 after:absolute after:rotate-45 after:left-[50%] after:-bottom-2 after:-translate-x-2">
                <span className="relative z-10">MongoDB</span>
              </p>
            </div>
            <div className="flex flex-col items-center group">
              <SiExpress className="size-12 z-20" />
              <span className="text-2xl mt-4 font-semibold">E</span>
              <p className="relative shadow-xl shadow-white opacity-0 group-hover:opacity-100 group-hover:-top-36 -top-28 hover:transition-all duration-200 ease-in-out px-2 py-1 bg-white text-black rounded-full after:content-[''] after:bg-white after:w-4 after:h-4 after:absolute after:rotate-45 after:left-[50%] after:-bottom-2 after:-translate-x-2">
                <span className="relative z-10">Express.JS</span>
              </p>
            </div>
            <div className="flex flex-col items-center text-blue-400 group ">
              <FaReact className="size-12 z-20" />
              <span className="text-2xl mt-4 font-semibold">R</span>
              <p className="relative shadow-xl shadow-blue-400 opacity-0 group-hover:opacity-100 group-hover:-top-36 -top-28 hover:transition-all duration-200 ease-in-out px-3 py-1 bg-blue-400 text-black rounded-full after:content-[''] after:bg-blue-400 after:w-4 after:h-4 after:absolute after:rotate-45 after:left-[50%] after:-bottom-2 after:-translate-x-2">
                <span className="relative z-10">React.JS</span>
              </p>
            </div>
            <div className="flex flex-col items-center text-green-400 group">
              <FaNodeJs className="size-12 z-20"/>
              <span className="text-2xl mt-4 font-semibold">N</span>
              <p className="relative shadow-xl shadow-green-400 opacity-0 group-hover:opacity-100 group-hover:-top-36 -top-28 hover:transition-all duration-200 ease-in-out px-3 py-1 bg-green-400 text-black rounded-full after:content-[''] after:bg-green-400 after:w-4 after:h-4 after:absolute after:rotate-45 after:left-[50%] after:-bottom-2 after:-translate-x-2 ">
                <span className="relative z-10">Node.JS</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex m-4 w-8 h-8 absolute right-0 top-0">
          <RxCross2
            className="cursor-pointer size-7 bg-transparent border border-blue-900 rounded-full hover:rotate-45 transition-all "
            onClick={() => state()}
          />
        </div>
        <img
          className="w-[90%] rounded-2xl m-4 ml-5 shadow-xl shadow-slate-800"
          src={aboutMeImg}
          alt="aboutImg"
        />
      </div>
    </div>
  );
};

export default AboutMePop;
