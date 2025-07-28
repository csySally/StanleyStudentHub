import React from "react";
import "../styles/outerlink.css";
import External from "../assets/icons/External.png";

function Outerlink({ outerLink }) {
  return (
    <div className="outerlink-container">
      {outerLink.map((link, index) => (
        <div key={index} className="outerlink-item">
          <div className="outerlink-item-content">
            <img src={link.logo} />
            <h3>{link.title}</h3>
          </div>
          <p>{link.description}</p>
          <a href={link.link} target="_blank">
            <img
              src={External}
              alt="External Link"
              className="external-link-icon"
            />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Outerlink;
