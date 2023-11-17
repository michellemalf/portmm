import React, { useEffect } from "react";
import "./About.css";
import mm from "../assets/MMphoto.jpg";
import bootStrapImg from "../assets/icons/bootstrap.png";
import Js from "../assets/icons/js5.png";
import reeact from "../assets/icons/react.png";
import css from "../assets/icons/css.png";
import csharp from "../assets/icons/csharp.png";
import chakras from "../assets/icons/chakra.png";
import html from "../assets/icons/html.png";
import { Image } from "react-bootstrap";

const About = () => {
  useEffect(() => {
    const aboutSection = document.getElementById("about");

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionPosition = aboutSection.offsetTop;

      if (scrollPosition > sectionPosition - window.innerHeight / 2) {
        aboutSection.classList.add("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="left-side">
        <p>
          I am a full-stack web developer who specializes in turning complex
          ideas into simple, elegant, and user-friendly apps that leave a smile
          on your face. Whether it's coding adventures or teaching others to
          code, I'm here to make the web a more exciting and accessible place.
        </p>
        <p></p>

        <Image src={Js} className="icons" alt="javascript" />
        <Image src={csharp} className="icons" alt="css" />
        <Image src={reeact} className="icons" alt="react" />
        <Image src={css} className="icons" alt="css" />
        <Image src={chakras} className="icons" alt="chakra" />
        <Image src={html} className="icons" alt="html" />
        <Image src={bootStrapImg} className="icons" alt="bootstrap" />

        <p className="resume">Download CV/Resume</p>
      </div>

      {/* Right side */}
      <div className="right-side">
        <img className="image-mm" src={mm} alt="Michelle" />
        <div className="image-placeholder"></div>
      </div>
    </section>
  );
};

export default About;
