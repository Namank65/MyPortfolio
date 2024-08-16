import React from "react";
import { RxCross2 } from "react-icons/rx";

const AboutMePop = ({state}) => {
  return (
    <div className="flex w-[90%] h-[90%] bg-slate-900 rounded-lg text-white  absolute left-[5%] bottom-[5%]">
      <div className="flex flex-col">
        <div className="w-48 bg-red-600 h-80">
          <h1>About Me</h1>
          <p>
            I help business owners and busy web developers to design & develop
            creative websites that fits their vision and attracts the visitors
            to stay for ever. Technologies and tools that I use to create such
            awesome websites.
          </p>
        </div>

        <div>
          <h1>Mern Stack</h1>
        </div>

        <RxCross2 className="cursor-pointer" onClick={() => state()}/>
      </div>
    </div>
  );
};

export default AboutMePop;
