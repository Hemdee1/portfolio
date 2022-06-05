import "./projects.scss";
import { projects } from "../../data";
import { useEffect, useState } from "react";
import Animate from "../Animated-Letters/animated";
import ProjectCard from "./project-card";

const Projects = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const project = ["r", "o", "j", "e", "c", "t", "s"];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-3");
    }, 1800);
  }, []);

  return (
    <div className="page projects">
      <h1>
        <span className="logo-letter">P</span>
        <Animate letterClass={letterClass} strArr={project} index={12} />
      </h1>

      <div className="project-cont">
        {projects.map((pro, index) => (
          <ProjectCard pro={pro} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
