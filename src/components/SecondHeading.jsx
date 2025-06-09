import React from "react";
import "../styles/secondHeading.css";
import vector from "../assets/images/vector.png";

function SecondHeading({ title, backgroundColor, textColor }) {
  return (
    <div
      className="second-heading-container"
      style={{ backgroundColor, color: textColor }}
    >
      <h2 className="second-heading">{title}</h2>
      <img src={vector} alt="vector" className="vector" />
    </div>
  );
}

export default SecondHeading;
