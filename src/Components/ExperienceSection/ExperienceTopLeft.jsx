import React from 'react'
import ExperienceInfo from './ExperienceInfo'

function ExperienceTopLeft() {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
        <p className="text-orange text-3xl font-bold uppercase font-special text-center ">Since 2024</p>
        <div className='flex items-center gap-4     '>
            <ExperienceInfo number={1.5} text="Years"/>
        </div>
        <p className='text-center text-white '>With 1.5 Years of Experience building dynamic and user-freindly web app</p>
    </div>
  )
}

export default ExperienceTopLeft