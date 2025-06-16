import React from "react";

import "../styles/quickLinks.css";
import outerLink from "../assets/icons/External Link.svg";

export default function QuickLinks({ quickLinks }) {
  return (
    <div className="quickLink-container">
      {quickLinks.map((item, index) => (
        <div className="quickLink-item" key={index}>
          <p className="quickLink-header">{item.name}</p>
          <a href={item.link} target="_blank">
            <img src={outerLink} alt="external link" />
          </a>
        </div>
      ))}
    </div>
  );
}
