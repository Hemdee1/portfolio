import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Animate from "../Animated-Letters/animated";
import { gsap } from "gsap-trial";
import "./home.scss";
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const name = ["u", "h", "y", "i", "d", "e", "e", "n"];
  const name2 = ["O", "l", "a", "y", "e", "m", "i"];
  const role = ["D", "e", "v", "e", "l", "o", "p", "e", "r"];
  const imgRef = useRef();
  const svgRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-2");
    }, 4500);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    // gsap.from(svgRef.current, {
    //   drawSVG: 0,
    //   duration: 20,
    // });
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
          <span>| Frontend Developer</span>
          <span>| Content Writing</span>
          <span>| Photographer</span>
        </p>
        <Link to="/contact" className="btn">
          Contact me
        </Link>
      </div>
      <div className="image" ref={imgRef}>
        <img src="./tree.svg" alt="" ref={svgRef} />
        {/* <svg
          style={{ fontSize: "20rem" }}
          stroke="black"
          fill="none"
          stroke-width="10"
          viewBox="0 0 576 512"
          color="black"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={svgRef}
            d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"
          ></path>
        </svg> */}
      </div>
    </div>
  );
};

export default Home;
