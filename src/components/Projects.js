import React from "react";
import { FaGithub } from "react-icons/fa";
import project01 from "../Images/project-01.png";
import project02 from "../Images/project02.png";
import project03 from "../Images/tree.png"; // Add a third project image as needed
import NodeJs from "../Images/NodeJs.svg";
import react from "../Images/React.png";
import tailwind from "../Images/Tailwind.png";
import express from '../Images/Express.png'
import mongo from '../Images/MongoDB.svg'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CHATGPT-GUIDE",
      description:"Developed a comprehensive guide on utilizing ChatGPT for AI tool usage, emphasizing prompt engineering and blogging. Created a blog site using the MERN stack, focusing on informative topics. Implemented secure, authenticated APIs to manage blog access and enable blog uploads, ensuring robust data security and seamless user experience.",
      imgSrc: project01,
      techStack: [NodeJs, react, tailwind, express, mongo],
      githubLink: "https://github.com/yuvraj98/Chat-GPT",
    },
    {
      id: 2,
      title: "STUDYNOTION",
      description:"Developed a blog site using the MERN stack (MongoDB, Express.js, ReactJS, Node.js) for robust development. Utilized RESTful architecture with Node.js and Express.js for smooth front-end to back-end communication. Ensured secure user access with JWT and bcrypt for password hashing, providing enhanced security and reliability.",
      imgSrc: project02,
      techStack: [NodeJs, react, tailwind, express, mongo],
      githubLink: "https://github.com/yuvraj98/Study-Notion",
    },
    {
      id: 3,
      title: "BINARYTREE TOOLKIT",
      description:"Developed a versatile C++ toolkit for binary tree operations, implementing essential functionalities such as calculating tree height, diameter, and balance checking. Designed intuitive visualization options for various tree views, enhancing analysis capabilities. This toolkit provides robust data structure and algorithm solutions for tree operations.",
      imgSrc: project03,
      techStack: [NodeJs, react],
      githubLink: "https://github.com/yuvraj98/TreeProject",
    },
  ];

  return (
    <section
      className="bg-gradient-to-r from-gray-700 to-black mx-auto py-16 px-4 sm:px-8 flex flex-col items-center"
      id="my-project"
    >
      <h1 className=" font-extrabold mb-8 text-[#F1F2FF] font-mono opacity-70 text-6xl">
        My Projects
      </h1>
      <div className="grid grid-cols-1 w-[90%] gap-8 sm:gap-16 lg:gap-32">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`bg-white flex flex-col sm:flex-row items-center p-6 rounded-lg shadow-lg ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            <img
              src={project.imgSrc}
              alt=""
              className="w-3/4 mb-4 sm:mb-0 sm:w-1/2 rounded-lg max-w-full"
            />
            <div className="flex flex-col items-start sm:items-center sm:ml-8">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-900 mb-4">{project.description}</p>
              <div className="flex mb-4">
                {project.techStack.map((tech, techIndex) => (
                  <img
                    key={techIndex}
                    src={tech}
                    alt="tech icon"
                    className="w-8 h-8 mr-2"
                  />
                ))}
              </div>
              <a
                href={project.githubLink}
                className="text-blue-600 hover:underline flex items-center"
              >
                <FaGithub className="mr-2" /> View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
