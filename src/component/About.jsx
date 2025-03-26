import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import "../styles/About.css";

function About() {
  const skillContainerRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      ".about-profile, .about-text, .about-skills, .about-education",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      ".skill-container",
      {
        xPercent: -100,
        ease: "none",
        duration: 10,
        repeat: -1,
      },
      {
        xPercent: 100,
        ease: "none",
        duration: 10,
        repeat: -1,
      }
    );
  }, []);

  return (
    <div className="about-section">
      <div className="nav-section">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              01. About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link">
              02. Projects
            </Link>
          </li>
        </ul>
      </div>

      <div className="about-content">
        <div className="about-profile">
          <div className="border-profile"></div>
          <img src="https://github.com/alysia.png" alt="" />
        </div>
        <div className="about-text">
          <h2>I'm Slyvia.</h2>
          <h1>
            I'm a <strong>Frontend Developer</strong> and a{" "}
            <strong>Web Designer</strong>
          </h1>
          <p>
            Creating user-friendly and visually appealing web applications. With
            a strong foundation <br /> in HTML, CSS, and JavaScript. I'm
            passionate about building responsive <br /> and interactive
            interfaces that deliver exceptional user experiences. <br /> Outside
            of coding, I enjoy painting, drawing, and <br /> editing videos :P
          </p>
        </div>
      </div>

      <div className="about-skills">
        <h1>Skills</h1>
        <div className="skill-wrapper">
          <div className="skill-container" ref={skillContainerRef}>
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>
            <div className="skill">JavaScript</div>
            <div className="skill">React</div>
          </div>
        </div>
      </div>

      <div className="about-education">
        <div className="timeline">
          <h1>Education</h1>
          <div className="timeline-item">
            <div className="timeline-content">
              <p>2014-2020</p>
              <h2>Widuri Indah SD</h2>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <p>2020-2023</p>
              <h2>Permata Bunda SMP</h2>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <p>2024 - Present</p>
              <h2>Tri Ratna School SMK</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
