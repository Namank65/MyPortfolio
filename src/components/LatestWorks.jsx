import React from 'react'
import { FaArrowDownLong } from 'react-icons/fa6'

const LatestWorks = () => {
  return (
    <div className="flex justify-center text-white h-24">
          <button className="py-1 absolute sm:py-2 px-2 sm:px-8 font-medium sm:font-bold rounded-md bg-gradient-to-l from-[#8c52ff] to-[#341671]  hover:scale-110 duration-150 group">
            Latest Works
            <FaArrowDownLong className=" text-white size-5  ml-9 sm:ml-[5rem] lg:ml-[2.35rem] absolute group-hover:-bottom-9 ease-in-out duration-150 mt-2 sm:mt-4" />
          </button>
        </div>
  )
}

export default LatestWorks
