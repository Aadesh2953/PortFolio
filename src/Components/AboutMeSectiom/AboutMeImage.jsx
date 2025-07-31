import React from 'react';

function AboutMeImage() {
  return (
    <div className='h-[500px] w-[300px] relative'>
      <div className='h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden'>
        <img
          src='../../public/Images/about-me.jpg'
          alt='aboutMeImage'
          className='h-full w-auto object-cover'
        />
      </div>
    <div className='h-[500px] w-[250px] bg-orange-200 absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-tl-[20px]'></div>
    </div>
  );
}

export default AboutMeImage;
