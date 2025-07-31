import React from 'react'

function ExperienceInfo({number,text}) {
  return (
    <div>
        <p className='font-bold text-6xl text-cyan mb-4 text-center'>{number} </p>
        <p className='font-bold text-xl text-lightGrey uppercase -mt-4 '>{text} Experience</p>
    </div>
  )
}

export default ExperienceInfo