import { Link, useLocation } from "react-router-dom";
import "../styles/navigation.css";

export default function Navigation() {
  // const currentPage = useLocation().pathname;

  return (
    // <nav className="container-fluid justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-end navbar">
    <ul className="container nav nav-tabs justify-content-sm-center justify-content-md-center justify-content-lg-end">
      <li className="nav-item">
        <Link
          to="/AboutMe"
          className={
            currentPage === "/AboutMe" ? "nav-link active" : "nav-link"
          }
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={
            currentPage === "/Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={
            currentPage === "/Contact" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </Link>
      </li>
    </ul>
    // </nav>
  );
}
