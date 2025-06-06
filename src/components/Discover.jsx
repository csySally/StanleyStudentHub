import React from "react";
import { Link } from "react-router-dom";
import "../styles/discover.css";

function Discover({ cards }) {
  return (
    <div className="discover-container">
      {cards.map((card, index) => (
        <div key={index} className="discover-card-item">
          <div
            style={{ backgroundImage: `url(${card.image})` }}
            className="discover-card-item-image"
          >
            <div className="discover-card-item-image-mask"></div>
            <Link to={card.url}>{card.title}</Link>
          </div>
          <div className="discover-card-item-content"></div>
        </div>
      ))}
    </div>
  );
}

export default Discover;
