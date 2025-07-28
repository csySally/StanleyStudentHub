import React from "react";
import { Link } from "react-router-dom";
import "../styles/menu.css";

export default function Menu({ showMenu }) {
  const menuShow = {
    display: showMenu ? "block" : "none",
  };
  return (
    <div>
      <ul className="menu-container" style={menuShow}>
        <li>
          <Link to="/student-support" className="menu-item">
            Student Support
          </Link>
        </li>
        <li>
          <Link to="/wbt-support" className="menu-item">
            Employment Support
          </Link>
        </li>
        <li>
          <Link to="/accessibility-support" className="menu-item">
            Acceessibility Support
          </Link>
        </li>
        <li>
          <Link to="/events-and-activities" className="menu-item">
            Events & Activities
          </Link>
        </li>
        <li>
          <Link to="/important-contacts" className="menu-item">
            Important Contacts
          </Link>
        </li>
        <li>
          <Link to="/requests-and-feedbacks" className="menu-item">
            Requests & Feedbacks
          </Link>
        </li>
      </ul>
    </div>
  );
}
