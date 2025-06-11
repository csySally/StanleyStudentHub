import React from "react";
import "../styles/stuffCard.css";

function StuffCard({ stuffCard, showAll }) {
  return (
    <div className={`stuffCard-container ${showAll ? "" : "hide"}`}>
      {stuffCard.map((stuff, index) => (
        <div key={index} className="stuffCard-container-item">
          <div className="stuffCard-item-img">
            <img src={stuff.image} alt="" />
          </div>
          <div className="stuffCard-item-content">
            <h3>{stuff.title}</h3>
            <h4>{stuff.name}</h4>
            <h5>{stuff.campus}</h5>
            <h5 style={{ display: stuff.email ? "block" : "none" }}>
              {stuff.email}
            </h5>
            <button
              style={{ display: stuff.button ? "block" : "none" }}
              onClick={() => window.open("#", "_blank")}
            >
              {stuff.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StuffCard;
