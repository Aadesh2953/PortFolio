import React from "react";

function AboutMeText() {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center md:flex-start text-white hover:text-cyan">
      <h2 className="text-6xl text-cyan mb-10 ">About Me</h2>
      <p className="text-white">
        Hi, I’m Aadesh Shukla — a passionate software developer with a strong
        focus on building clean, responsive, and user-friendly web applications.
        I love solving real-world problems through code and continuously
        improving my skills to stay in sync with evolving tech trends. With
        hands-on experience in both frontend and backend development, I enjoy
        turning ideas into functional, scalable products. Whether it's crafting
        sleek interfaces or architecting APIs, I aim to deliver reliable and
        impactful solutions. Currently, I'm focused on leveling up my expertise
        in full-stack development and exploring new technologies to build better
        digital experiences.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer">
        My Projects
      </button>
    </div>
  );
}

export default AboutMeText;
