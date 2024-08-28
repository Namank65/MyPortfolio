import React from "react";
import projectImg from "../assets/Portfolio.webp";
import Skills from "./Skills";

const LatestWorksPage = () => {

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
    <div className="mt-8 text-white bg-slate-950 relative w-[99.99%] h-[1000px]">
      <h1 className="text-4xl bg-inherit relative m-auto px-4 py-2 md:border z-10 rounded-md max-w-max mb-16 md:border-t-0">
        Latest Works
      </h1>

      <div className="flex md:flex-row flex-col gap-20 items-center mb-12 m-auto w-[90%] max-w-7xl">
        <div className="w-full">
          <div className="flex items-start md:justify-normal justify-center ">
          <a href="#" className="group">
            <img
              src={projectImg}
              alt="ProjectImg"
              className="max-w-[400px] w-full hover:scale-110 hover:transition-all duration-200 ease-in-out flex justify-center"
            />
            <p className="relative ease-jump w-40 shadow-xl shadow-green-400 opacity-0 group-hover:opacity-100 group-hover:-top-80 -top-56 hover:transition-all duration-200 px-2 py-1 bg-green-400 text-black rounded-md after:content-[''] after:bg-green-400 after:w-4 after:h-4 after:absolute after:rotate-45 after:left-[50%] after:-bottom-2 after:-translate-x-2 text-center left-1/2 -translate-x-1/2">
                <span className="relative z-10">Somthing</span>
              </p>
          </a>
          </div>
          
        </div>

        <div className="flex flex-col items-start w-full">
          <h3 className="text-4xl mb-1">Somthing</h3>
          <span className="text-xl py-4">(SomeOne)</span>
          <p className="text-justify">HariGurus is a one-stop-shop for all Hindu religious, customs and traditional requirements. Built the complete site from scratch.</p>
          <div className="flex flex-wrap w-11/12 gap-4 mt-4 md:gap-3 mb-0">
            {skills.map((s, i) => (
              <Skills key={i} data={s} />
            ))}
          </div>

        </div>
      </div>
      <div className="w-1 absolute rounded-xl bg-red-500 top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
    </div>
  );
};

export default LatestWorksPage;
