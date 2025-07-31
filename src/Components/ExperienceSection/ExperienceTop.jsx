import React from 'react'
import ExperienceTopLeft from './ExperienceTopLeft'
import ExperienceTopRight from './ExperienceTopRight'
import ExperienceTopMiddle from './ExperienceTopMiddle'

function ExperienceTop() {
  return (
    <div className='flex lg:flex-row sm:flex-col  gap-4 items-center justify-center max-w-[1200px] mx-auto px-4'>
        <ExperienceTopLeft/>
        <ExperienceTopMiddle/>
        <ExperienceTopRight/>
     
    </div>
  )
}

export default ExperienceTop