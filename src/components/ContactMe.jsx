import React from "react";
import contactImg from "../assets/contactImg.png";
import { MdPerson } from "react-icons/md";
import { IoIosAt } from "react-icons/io";
import { TbMessage } from "react-icons/tb";
import { FaPaperPlane } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className="text-white bg-slate-950 relative w-[99.99%] h-screen ">
      <h1 className="text-xl md:text-4xl rounded-lg bg-inherit relative m-auto px-5 py-4 border z-10 max-w-max mb-9 md:mb-16 ">
        Let's Connect
      </h1>

      <div className="md:flex m-auto max-w-xs items-center md:max-w-7xl gap-12">
        <div className="w-full">
          <img
            className="relative rounded-3xl md:inline-block hidden"
            src={contactImg}
            alt="contactImg"
          />
        </div>

        <form name="Contact Me" class="w-full space-y-5">
          <div>
            <label
              for="email-address-icon"
              class="flex items-center gap-1 mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              <MdPerson className="size-6" />
              Name
            </label>
            <input
              required
              name="Name- "
              type="text"
              placeholder="Enter Your Name"
              className="border-none border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2 p-2.5 bg-gray-700 "
            />
          </div>

          <div>
            <label
              for="email-address-icon"
              class="flex items-center gap-1 mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              <IoIosAt className="size-6" />
              Email
            </label>
            <input
              required
              name="Email- "
              type="email"
              placeholder="Enter Your Name"
              className="border-none border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2 p-2.5 bg-gray-700 "
            />
          </div>

          <div>
            <label
              for="email-address-icon"
              class="flex items-center gap-1 mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              <TbMessage className="size-6" />
              Message
            </label>
            <textarea
              required
              name="Message- "
              placeholder="Message"
              rows="4"
              cols="50"
              className="resize-none border-none border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2 p-2.5 bg-gray-700 "
            />
          </div>

          <button className="outline-none border-none text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ps-2 p-4 bg-blue-500 hover:bg-blue-400 font-bold flex justify-center gap-2">
            <FaPaperPlane className="size-6" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
