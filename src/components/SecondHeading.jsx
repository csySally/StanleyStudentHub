import React from "react";
import "../styles/secondHeading.css";
import vector from "../assets/images/vector.png";
import { Link } from "react-router-dom";

function SecondHeading({ title, backgroundColor, textColor, toMore, toLink }) {
  return (
    <div
      className="second-heading-container"
      style={{ backgroundColor, color: textColor }}
    >
      <div>
        <h2 className="second-heading">{title}</h2>
        <img src={vector} alt="vector" className="vector" />
      </div>
      <p style={{ display: toMore ? "block" : "none" }}>
        <Link to={toLink} style={{ color: textColor }} target="_blank">
          {">>> More"}
        </Link>
      </p>
    </div>
  );
}

export default SecondHeading;
