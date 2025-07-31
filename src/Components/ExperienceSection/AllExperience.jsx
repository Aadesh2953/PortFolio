import React from "react";
import SingleExperience from "./SingleExperience";

function AllExperience() {
  const experiences = [
    {
      job: "Associate Software Engineer",
      company: "FTX Infotech",
      date: "April 2024- Present",
      responsibilities: [
        "Developing responsive web applications using React,Vue js.",
        "Collaborating with designers to implement UI/UX designs.",
        "Optimizing applications for maximum speed and scalability.",
        "Translated business requirements into technical specifications to deliver feature-rich applications.",
      ],
    },
  ];
  return (
    <>
      <div className="flex md:flex-row sm:flex-col items-center justify-center min-h-screen w-full">
        {experiences.map((experience, index) => {
          return <SingleExperience key={index} experience={experience} />;
        })}
      </div>
      <div className="w-full h-1 mt-4  bg-lightBrown lg:block sm:hidden"></div>
    </>
  );
}

export default AllExperience;
