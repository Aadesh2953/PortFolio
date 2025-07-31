import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import { m, motion } from "framer-motion";
import { fadeIn } from "../Motion/variants";
const projects = [
  {
    name: "TourQuest",
    description:
      "A full-stack tour booking platform with user authentication, dynamic tour listings, and secure payment integration. Includes complete booking flow, admin dashboard, and tour management features.",
    align: "right",
    image: "/Images/TourQuest.png",
    link: "",
  },
  {
    name: "EdTech Platform",
    description:
      "A complete EdTech Web Application built with a full-stack architecture. This platform allows admins to manage courses and users, while learners can browse, enroll, and track progress. Designed for scalability, security, and performance, the app offers role-based access, secure authentication, and interactive learning features.",
    align: "left",
    image: "/Images/EduVerse.png",
    link: "",
  },
  {
    name: "Mini Ecommerce Website",
    description:
      "A responsive and user-friendly eCommerce web application that allows users to browse products, view detailed information, and add items to a shopping cart. Built with a focus on seamless UI and clean state management, this project showcases the core features of modern eCommerce experiences.",
    align: "right",
    image: "/Images/Ecommerce.png",
    link: "",
  },
  {
    name: "Blog Website",
    description:
      "This is a fully functional Blog Website built using Appwrite as the backend-as-a-service (BaaS) platform, enabling features like user authentication, blog post management, and secure data storage. It provides a smooth and clean user experience, allowing users to sign up, log in, write, edit, and read blog posts.",
    align: "left",
    image: "/Images/BlogWebsite.png",
    link: "",
  },
  {
    name: "News App",
    description:
      "A modern News Application built using React.js, which fetches and displays the latest news articles using a fixed third-party API. It delivers a clean and responsive UI to let users browse current news headlines categorized by type, region, or popularity.",
    align: "right",
    image: "/Images/NewsApp.png",
    link: "",
  },
  {
    name: "Password Generator",
    description:
      "A secure and customizable Password Generator Web App built using React.js. It allows users to generate strong, random passwords based on selected criteria like length, character types (uppercase, lowercase, numbers, symbols), and copy functionality.",
    align: "left",
    image: "/Images/PasswordGenerator.png",
    link: "",
  },
  {
    name: "Snake Game",
    description:
      "A classic Snake Game built using HTML, CSS, and Vanilla JavaScript, designed to offer smooth gameplay, responsive controls, and an engaging UI. This browser-based game challenges players to control a snake, collect food, and grow without hitting the walls or itself",
    align: "right",
    image: "/Images/SnakeGame.png",
    link: "",
  },

  {
    name: "Tic Tac Toe Game",
    description:
      "A classic Tic Tac Toe game built using HTML, CSS, and JavaScript, featuring smooth user interaction, instant win detection, and an intuitive interface. This browser-based 2-player game allows users to play turn-by-turn and detects the winner or a draw in real-time.",
    align: "left",
    image: "/Images/TicTacToeGame.png",
    link: "",
  },
];
function ProjectMain() {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          console.log("Items", item);
          return (
            <SingleProject
              key={index}
              name={item.name}
              description={item.description}
              align={item.align}
              image={item.image}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectMain;
