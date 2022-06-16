import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Animate from "../Animated-Letters/animated";
import "./home.scss";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const name = ["u", "h", "y", "i", "d", "e", "e", "n"];
  const name2 = ["O", "l", "a", "y", "e", "m", "i"];
  const role = ["D", "e", "v", "e", "l", "o", "p", "e", "r"];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-2");
    }, 4500);
  }, []);

  return (
    <div className="page home">
      <div className="cont">
        <h1>
          <span className="logo-letter one">H</span>
          <Animate
            strArr={["i", ","]}
            letterClass={letterClass}
            index={11}
          />{" "}
          <Animate
            strArr={["I", "'", "m"]}
            letterClass={letterClass}
            index={13}
          />
          <br />
          <span className="logo-letter two">M</span>
          <Animate strArr={name} letterClass={letterClass} index={17} />{" "}
          <Animate strArr={name2} letterClass={letterClass} index={25} />
          <br />
          <span className="logo-letter three">W</span>
          <Animate
            strArr={["e", "b"]}
            letterClass={letterClass}
            index={33}
          />{" "}
          <Animate strArr={role} letterClass={letterClass} index={35} />
        </h1>
        <p>
          <span>Frontend Developer</span>
          <span>Content Writing</span>
          <span>Photographer</span>
        </p>
        <Link to="/contact" className="btn">
          Contact me
        </Link>
      </div>
      <div className="image">
        <img src="./tree.svg" alt="tree" />
      </div>
    </div>
  );
};

export default Home;
