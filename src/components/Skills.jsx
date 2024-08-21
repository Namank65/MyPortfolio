import React from 'react'

const Skills = ({data}) => {
    
  return (
    <div className='rounded-2xl bg-transparent border border-blue-900 shadow-md shadow-slate-500 cursor-default'>
      <p className=' px-3 py-1 text-xs md:text-sm'>{data}</p>
    </div>
  )
}

export default Skills;
