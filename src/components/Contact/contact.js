import "./contact.scss";
import Animate from "../Animated-Letters/animated";
import { useEffect, useState } from "react";
import { ImLocation2 } from "react-icons/im";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const about = ["o", "n", "t", "a", "c", "t"];
  const about2 = ["M", "e"];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-3");
    }, 1800);
  }, []);

  return (
    <div className="page contact">
      <div className="cont">
        <h1>
          <span className="logo-letter">C</span>
          <Animate letterClass={letterClass} strArr={about} index={12} />{" "}
          <Animate letterClass={letterClass} strArr={about2} index={18} />
        </h1>
        <p>
          I am interested in freelance opportunities - especially ambitious or
          large projects. Feel free to contact me below.
        </p>
        <form>
          <div>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
          </div>
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message"></textarea>
          <button className="btn">Send</button>
        </form>
      </div>
      <div className="map">
        <iframe
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Osogbo%20Olaiya&t=&z=13&ie=UTF8&iwloc=&output=embed"
          scrolling="no"
          title="gmap"
        ></iframe>
      </div>
      <div className="location">
        <ImLocation2 /> <br />
        Osogbo, Osun State <br />
        Nigeria <br />
        09069010318 <br />{" "}
        <a href="mailto:Sanusi5110@gmail.com">Sanusi5110@gmail.com</a>
      </div>
    </div>
  );
};

export default Contact;
