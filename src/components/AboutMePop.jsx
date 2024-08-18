import React from "react";
import { RxCross2 } from "react-icons/rx";
import Skills from "./Skills";
import aboutMeImg from "../assets/AboutMe.gif";
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
    <div className="flex w-[90%] h-[90%] bg-slate-900 rounded-2xl text-white  absolute left-[5%] bottom-[5%]">
      <div className="flex flex-col w-[40%] ml-8 mt-5">
        <div className="">
          <h1 className="text-2xl p-12 text-sky-600 font-bold">ABOUT ME</h1>
          <p className="pl-10">
            I help business owners and busy web developers to design & develop
            creative websites that fits their vision and attracts the visitors
            to stay for ever. Technologies and tools that I use to create such
            awesome websites.
          </p>
          <div className="flex flex-wrap gap-3 pl-10  mt-8 ">
            {skills.map((s,i) => (
              <Skills key={i} data={s} />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-2xl p-12 text-sky-600 font-bold">Mern Stack</h1>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-end m-4 ">
          <RxCross2
            className="cursor-pointer size-7 bg-transparent border border-blue-900 rounded-full hover:rotate-45 transition-all "
            onClick={() => state()}
          />
        </div>
        <img className="w-[90%] rounded-2xl m-9 mt-0 shadow-xl shadow-slate-800" src={aboutMeImg} alt="aboutImg" />
      </div>
    </div>
  );
};

export default AboutMePop;
