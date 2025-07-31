import React from 'react'

function SingleExperience({experience}) {
  return (
      <div className="w-full h-screen flex items-center justify-center  px-4">
      <div className="w-full max-w-[500px] border-2 border-orange border-dashed rounded-2xl p-6 flex flex-col ">
        <p className='text-2xl font-bold text-cyan'>{experience.job}</p>
        <p className='text-lg text-orange font-semibold'>{experience.company}</p>
        <p className='text-sm text-white mb-4'>{experience.date}</p>

        <ul className='list-disc list-inside text-white space-y-3 text-base leading-relaxed'>
          {experience.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </div>  
  )
}

export default SingleExperience