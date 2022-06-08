import "./contact.scss";
import Animate from "../Animated-Letters/animated";
import { useEffect, useRef, useState } from "react";
import { ImLocation2 } from "react-icons/im";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const locationRef = useRef();

  const showLoc = () => {
    locationRef.current.classList.toggle("fade");
  };

  const clearForm = () => {
    form.current.name.value = "";
    form.current.email.value = "";
    form.current.message.value = "";
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_djqf1cv",
        "template_yhk7o6o",
        form.current,
        "UI3QRB61PAUMjMx-1"
      )
      .then(
        () => {
          alert("Email sent succesfully");
          clearForm();
        },
        () => {
          alert("Error!!, Email is not sent");
          clearForm();
        }
      );
  };

  const [letterClass, setLetterClass] = useState("text-animate");
  const about = ["o", "n", "t", "a", "c", "t"];
  const about2 = ["M", "e"];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-3");
    }, 1800);
  }, []);

  return (
    <div className="page contact" ref={locationRef}>
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
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email" name="email" />

          <textarea placeholder="Message" name="message"></textarea>
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
        <a href="mailto:Sanusi5110@gmail.com">Muhyideen5110@gmail.com</a>
      </div>
      <ImLocation2 className="loc-btn" onClick={showLoc} />
    </div>
  );
};

export default Contact;
