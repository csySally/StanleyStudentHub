import React, { useState } from "react";
import "../../styles/qaitem.css";
import plus from "../../assets/icons/plus.png";
import minus from "../../assets/icons/minus.png";

function QAItem({ qa }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="qa-item">
      <div className="qa-item-header">
        <h3>{qa.question}</h3>
        <button onClick={handleClick}>
          <img src={isOpen ? minus : plus} alt="plus" />
        </button>
      </div>
      <div
        className="qa-item-content"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <p>{qa.answer}</p>
        <a href={qa.link} target="_blank">
          <button style={{ display: qa.button ? "block" : "none" }}>
            {qa.button}
          </button>
        </a>
      </div>
    </div>
  );
}

export default QAItem;
