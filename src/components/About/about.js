import "./about.scss";
import Animate from "../Animated-Letters/animated";
import { useEffect, useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaGitAlt,
  FaJsSquare,
  FaNodeJs,
} from "react-icons/fa";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const about = ["b", "o", "u", "t"];
  const about2 = ["M", "e"];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-3");
    }, 1800);
  }, []);

  return (
    <div className="page about">
      <div className="abt">
        <h1>
          <span className="logo-letter">A</span>
          <Animate letterClass={letterClass} strArr={about} index={12} />{" "}
          <Animate letterClass={letterClass} strArr={about2} index={16} />
        </h1>
        <div className="para">
          <p>
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>I'm very open to learning new things everyday.</p>
        </div>
      </div>
      <div className="stage-cube">
        <div className="cube-spinner">
          <div className="face1">
            <FaHtml5 color="#f06529" />
          </div>
          <div className="face2">
            <FaCss3 color="#2a84d9" />
          </div>
          <div className="face3">
            <FaJsSquare color="#efd81d" />
          </div>
          <div className="face4">
            <FaReact color="#5ed4f4" />
          </div>
          <div className="face5">
            <FaGitAlt color="#ec4" />
          </div>
          <div className="face6">
            <FaNodeJs color="#05e405" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
