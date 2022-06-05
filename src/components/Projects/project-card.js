import { BsArrowRight } from "react-icons/bs";

const ProjectCard = ({ pro }) => {
  const { name, img, tech, link } = pro;
  return (
    <div className="project-card">
      <div className="image">
        <img src={`/projects/${img}`} alt="" />

        <div className="tech">
          {tech.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="options">
            <BsArrowRight />
          </div>
        </a>
      </div>
      <div className="text">
        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default ProjectCard;
