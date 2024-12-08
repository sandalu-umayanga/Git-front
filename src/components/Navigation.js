import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navigation.css";

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="nav-container">
      <span className="nav-logo">&#1017;&#76;</span>
      <button className="nav-toggle" onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className={`nav-list ${isDropdownOpen ? "show" : ""}`}>
        <div className="nav-list-part1">
          <li>
            <Link to="/" onClick={toggleDropdown}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleDropdown}>About</Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleDropdown}>Contact</Link>
          </li>
        </div>
        <div className="nav-list-part2">
          <li>
            <Link to="/login" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faUser} /> Staff Login
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
