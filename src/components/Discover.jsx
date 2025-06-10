import React from "react";
import { Link } from "react-router-dom";
import "../styles/discover.css";
import oval1 from "../assets/images/oval1.png";
import oval2 from "../assets/images/oval2.png";

function Discover({ cards }) {
  return (
    <div className="discover">
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
      <img src={oval1} alt="" className="oval1" />
      <img src={oval2} alt="" className="oval2" />
    </div>
  );
}

export default Discover;
