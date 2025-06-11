import React from "react";
import "../styles/secondHeading.css";
import vector from "../assets/images/vector.png";
import { Link } from "react-router-dom";

function SecondHeading({
  title,
  backgroundColor,
  textColor,
  toMore,
  toLink,
  isLink,
  onMoreClick,
}) {
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
        {isLink ? (
          <Link to={toLink} style={{ color: textColor }} target="_blank">
            {">>> More"}
          </Link>
        ) : (
          <span
            style={{ color: textColor, cursor: "pointer" }}
            onClick={onMoreClick}
          >
            {">>> More"}
          </span>
        )}
      </p>
    </div>
  );
}

export default SecondHeading;
