import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa6";

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuActive((s) => !s);

  return (
    <section id="menubar">
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src="/images/Run2.jpeg" alt="Logo" />
          </Link>
        </div>

        <div className="menu-icon" id="menuIcon" onClick={toggleMenu}>
          &#9776;
        </div>

        <ul className={`nav-links ${menuActive ? "active" : ""}`} id="navLinks">
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
              onClick={() => setMenuActive(false)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
              onClick={() => setMenuActive(false)}
            >
              About Me
            </Link>
          </li>

          <li>
            <Link
              to="/projects"
              className={location.pathname === "/projects" ? "active" : ""}
              onClick={() => setMenuActive(false)}
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
              onClick={() => setMenuActive(false)}
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hire-me-link"
              onClick={() => setMenuActive(false)}
            >
              <FaBriefcase style={{ marginRight: "6px" }} />
              Hire Me
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
