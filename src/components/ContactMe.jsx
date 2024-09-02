import React from 'react';
import contactImg from '../assets/contactImg.png';
import { MdPerson } from "react-icons/md";
import { IoIosAt } from "react-icons/io";
import { TbMessage } from "react-icons/tb";
import { FaPaperPlane } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className='text-white bg-slate-950 relative w-[99.99%] h-screen'>
        <h1 className="text-xl md:text-4xl rounded-lg bg-inherit relative m-auto px-5 py-4 border z-10 max-w-max mb-1 md:mb-16 ">
        Let's Connect
      </h1>

      <div className='flex m-auto max-w-7xl gap-12'>
      <div className='w-full'>
        <img className='relative rounded-3xl' src={contactImg} alt="contactImg" />
      </div>

      
<form class=" w-full ">
<label for="email-address-icon" class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"><MdPerson/>Name</label>
    <input type="text" placeholder='Enter Your Name' className=' border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-6 p-2.5 bg-gray-700' />
<label for="email-address-icon" class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"><IoIosAt/>Email</label>
    <input type="text" placeholder='Enter Your Name' className=' border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-6 p-2.5 bg-gray-700' />
<label for="email-address-icon" class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"><TbMessage/>Message</label>
    <textarea rows="4" cols="50" className='resize-none border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-6 p-2.5 bg-gray-700'/>
    <button className='border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-6 p-2.5 bg-blue-500'><FaPaperPlane/>Send Message</button>

  {/* <label for="email-address-icon" class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"><MdPerson/>Your Name</label>
  <div class="relative">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
      </svg>
    </div>
    <input type="text" id="email-address-icon" class="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name"/>
  </div>
  <div class="relative">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
      </svg>
    </div>
    <input type="text" id="email-address-icon" class="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"/>
  </div> */}
</form>
      </div>

    </div>
  )
}

export default ContactMe
