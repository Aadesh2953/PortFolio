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
    logo: <FaHtml5 />,
  },
  {
    skill: "CSS",
    logo: <FaCss3 />,
  },
  {
    skill: "JavaScript",
    logo: <IoLogoJavascript />,
  },
  {
    skill: "MongoDB",
    logo: <DiMongodb />,
  },
  {
    skill: "Express",
    logo: <SiDevexpress />,
  },
  {
    skill: "React",
    logo: <FaReact />,
  },
    {
    skill: "Node",
    logo: <FaNodeJs />,
  },
  {
    skill:"Java",
    logo:<FaJava/>
  },
    {
    skill:"Spring Boot",
    logo:<SiSpringboot/>
  }
];
function AllSkill() {
  return <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto ">
    {
      skills.map((skill,index)=>(
        <SingleSkill key={index} text={skill.skill} imgSvg={skill.logo}/>
      ))
    }
  </div>;
}

export default AllSkill;
