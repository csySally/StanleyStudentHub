import React, { useState } from "react";
import "../styles/header.css";
import Menu from "./Menu";
import Logo from "../assets/images/logo.png";
import Show from "../assets/images/show.png";
import { Link } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo-area">
          <img src={Logo} alt="Logo" className="logo-img" />
        </div>
        <p className="hub-text">Student Hub</p>
      </div>
      <div className="nav-container">
        <div className="nav-text-container">
          <p className="nav-text">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </p>
          <img
            src={Show}
            alt=""
            className={`nav-show-arrow ${showMenu ? "rotated" : ""}`}
            onClick={() => setShowMenu(!showMenu)}
          />
          <div className="menu-wrap">
            <Menu showMenu={showMenu} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
