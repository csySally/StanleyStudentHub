import React from "react";
import "../styles/heading.css";
import { Link } from "react-router-dom";

function Heading({ title, backgroundColor, textColor, toMore, toLink }) {
  return (
    <div
      className="heading-container"
      style={{ backgroundColor, color: textColor }}
    >
      <h1 className="heading">{title}</h1>
      <p style={{ display: toMore ? "block" : "none" }}>
        <Link to={toLink} style={{ color: textColor }}>
          {">>> More"}
        </Link>
      </p>
    </div>
  );
}

export default Heading;
