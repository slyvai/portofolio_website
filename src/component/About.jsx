import { Link } from "react-router-dom";
import "../styles/About.css";
import { Bar } from "react-chartjs-2"; 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"; 

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function About() {
  const chartData = {
    labels: ["JavaScript", "CSS", "HTML", "React"], 
    datasets: [
      {
        label: "Usage Percentage",
        data: [60.2, 99.1, 100, 80.5], 
        backgroundColor: ["#A9C46C", "#809D3C", "#5D8736"], 
      },
    ],
  };


  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Programming Languages",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Languages",
        },
      },
      y: {
        title: {
          display: true,
          text: "Percentage (%)",
        },
        beginAtZero: true,
      },
    },
  };

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
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
        </ul>
      </div>

      <div className="about-text">
        <div className="about-profile">
          <img src="" alt="" />
        </div>

        <h2>I'm Slyvia.</h2>
        <h1>
          I'm a <strong>Frontend Developer</strong> and a <strong>Web Designer</strong>
        </h1>
        <p>
          Passion for creating user-friendly and visually appealing web
          applications. <br /> With a strong foundation in HTML, CSS, and
          JavaScript. <br /> I specialize in building responsive and interactive
          interfaces that deliver exceptional user experiences. <br /> Outside
          of coding, I enjoy painting, drawing, and editing videos in my free time :)
        </p>
      </div>

      <div className="about-skills">
        <h1>Skills</h1>
        <Bar data={chartData} options={chartOptions} />
      </div>

      <div className="about-education">
        <div className="timeline">
          <h1>Education</h1>
          <div className="timeline-item">
            <div className="timeline-content">
              <p>2020-2024</p>
              <h2>Bachelor of Science in Computer Science</h2>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <p>2020-2024</p>
              <h2>Bachelor of Science in Computer Science</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;