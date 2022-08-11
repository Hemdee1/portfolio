import { NavLink } from "react-router-dom";
import "./sidebar.scss";
import {
  FaHome,
  FaUser,
  FaAddressCard,
  FaCodepen,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="logo">
        <h1 className="logo-letter">H</h1>
        <h2>Hemdee</h2>
      </div>
      <div className="links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          <FaHome />
        </NavLink>
        <NavLink to="/about">
          <FaUser />
        </NavLink>
        <NavLink to="/projects">
          <FaCodepen />
        </NavLink>
        <NavLink to="/contact">
          <FaAddressCard />
        </NavLink>
      </div>
      <div className="social">
        <li>
          <a
            href="https://twitter.com/SanusiMuhyideen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/hem__dee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Hemdee1?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sanusi-muhyideen-77208b200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
      </div>
    </nav>
  );
};

export default Sidebar;
