import React from "react";
import "../styles/heading.css";

function Heading({ title, backgroundColor, textColor }) {
  return (
    <h1 className="heading" style={{ backgroundColor, color: textColor }}>
      {title}
    </h1>
  );
}

export default Heading;
