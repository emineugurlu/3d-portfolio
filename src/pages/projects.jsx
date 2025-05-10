import React from "react";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Hi, I'm Emine Uğurlu — a frontend developer passionate about crafting
          intuitive and visually engaging user interfaces. On this page, you'll
          find a collection of projects that reflect my journey of continuous
          learning and creativity. I love building responsive, functional, and
          clean web experiences using modern tools like React.js. Each project
          represents a step forward in my growth and dedication to frontend
          development. Let's explore what I've been working on!
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project, index) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`}>
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    alt={project.name || "Project Icon"}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-col">
            <h4>
              {project.name}
            </h4>
            <p>
              {project.description}
            </p>
            <div>
              <Link 
              to={project.link}
              target="_blank"
              >
                
              </Link>
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
