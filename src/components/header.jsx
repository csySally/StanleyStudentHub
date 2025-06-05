import React from "react";
import "../styles/header.css";
import Logo from "../assets/images/logo.png";
import Show from "../assets/images/show.png";
import Search from "../assets/icons/Search.png";

function Header() {
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
            <a href="/">Home</a>
          </p>
          <img src={Show} alt="" className="nav-show-arrow" />
        </div>
        <img src={Search} alt="" className="nav-search-icon" />
      </div>
    </header>
  );
}

export default Header;
