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
  ];

  return (
    <div className="flex w-[90%] h-[90%] bg-slate-900 rounded-2xl text-white  absolute left-[5%] bottom-[5%] z-10">
      <div className="flex flex-col w-[40%] ml-8 mt-5">
        <div className="">
          <h1 className="text-2xl p-8 text-sky-600 font-bold">ABOUT ME</h1>
          <p className="pl-10">
            I help business owners and busy web developers to design & develop
            creative websites that fits their vision and attracts the visitors
            to stay for ever. Technologies and tools that I use to create such
            awesome websites.
          </p>
          <div className="flex flex-wrap gap-3 pl-10  mt-8 ">
            {skills.map((s, i) => (
              <Skills key={i} data={s} />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-2xl p-8 mb-4 text-sky-600 font-bold">
            MERN STACK
          </h1>
          <div className="flex gap-7 pl-8 mt-8">
            <div className="flex flex-col items-center text-green-500 cursor-default">
              <DiMongodb className="size-12 " />
              <p className="text-2xl mt-4 font-semibold">M</p>
            </div>
            <div className="flex flex-col items-center">
              <SiExpress className="size-12 " />
              <p className="text-2xl mt-4 font-semibold">E</p>
            </div>
            <div className="flex flex-col items-center text-blue-400">
              <FaReact className="size-12" />
              <p className="text-2xl mt-4 font-semibold">R</p>
            </div>
            <div className="flex flex-col items-center text-green-400">
              <FaNodeJs className="size-12" />
              <p className="text-2xl mt-4 font-semibold">N</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-end m-4 ">
          <RxCross2
            className="cursor-pointer size-7 bg-transparent border border-blue-900 rounded-full hover:rotate-45 transition-all "
            onClick={() => state()}
          />
        </div>
        <img
          className="w-[90%] rounded-2xl m-9 mt-0 shadow-xl shadow-slate-800"
          src={aboutMeImg}
          alt="aboutImg"
        />
      </div>
    </div>
  );
};

export default AboutMePop;
