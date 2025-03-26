import { Link } from "react-router-dom";
function Project() {
  return (
    <div className="project-section">
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
      <h1>Project</h1>
    </div>
  );
}

export default Project;
