import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiDevexpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import SingleSkill from "./SingleSkill";

const skills = [
  {
    skill: "HTML",
    logo: <FaHtml5 className="text-7xl text-orange" />,
  },
  {
    skill: "CSS",
    logo: <FaCss3 className="text-7xl text-orange" />,
  },
  {
    skill: "JavaScript",
    logo: <IoLogoJavascript className="text-7xl text-orange" />,
  },
  {
    skill: "MongoDB",
    logo: <DiMongodb className="text-7xl text-orange" />,
  },
  {
    skill: "Express",
    logo: <SiDevexpress className="text-7xl text-orange" />,
  },
  {
    skill: "React",
    logo: <FaReact className="text-7xl text-orange" />,
  },
  {
    skill: "Node",
    logo: <FaNodeJs className="text-7xl text-orange" />,
  },
  {
    skill: "Java",
    logo: <FaJava className="text-7xl text-orange" />,
  },
  {
    skill: "Spring Boot",
    logo: <SiSpringboot className="text-7xl text-orange" />,
  },
];
function AllSkillSm() {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((skill, index) => (
        <div key={index}>
          <div className="flex flex-col items-center">
            {skill.logo}
            <p className="text-center mt-4 text-white">{skill.skill}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllSkillSm;
