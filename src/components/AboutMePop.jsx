import React from "react";
import { RxCross2 } from "react-icons/rx";
import Skills from "./Skills";

const AboutMePop = ({state}) => {

  const skills = ["#javascript","#react.js","#redux","#node.js","#express.js","#mongoDB","#cloudinary","#html","#css","#tailwind"]

  return (
    <div className="flex w-[90%] h-[90%] bg-slate-900 rounded-lg text-white  absolute left-[5%] bottom-[5%]">
      <div className="flex flex-col w-1/2 ml-8 mt-5">
        <div className="">
          <h1 className="text-2xl p-12">ABOUT ME</h1>
          <p className="pl-10">
            I help business owners and busy web developers to design & develop
            creative websites that fits their vision and attracts the visitors
            to stay for ever. Technologies and tools that I use to create such
            awesome websites.
          </p>
          <div className="flex flex-wrap gap-2 pl-10  mt-8 ">
          {skills.map((s) => <Skills data={s}/>)}
          </div>
        </div>

        <div>
          <h1>Mern Stack</h1>
        </div>

      </div>
        <RxCross2 className="cursor-pointer size-7" onClick={() => state()}/>
    </div>
  );
};

export default AboutMePop;
