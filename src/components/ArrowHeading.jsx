import React from "react";
import "../styles/arrowHeading.css";
import arrow from "../assets/icons/arrow.svg";

function ArrowHeading({ arrowHeadings }) {
  return (
    <>
      <div className="arrowheading-container">
        <img src={arrowHeadings.firstImg} />
        <p>{arrowHeadings.firstCont}</p>
        <img src={arrow} />
        <p>{arrowHeadings.secondCont}</p>
      </div>
    </>
  );
}

export default ArrowHeading;
