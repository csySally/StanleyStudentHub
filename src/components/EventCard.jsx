import React from "react";
import "../styles/eventCard.css";

function EventCard({ cards }) {
  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div key={index} className="card-item">
          <div className="card-item-image">
            <img src={card.image} alt={card.title} />
          </div>
          <div className="card-item-content">
            <div className="card-item-date">
              <h5>{card.date}</h5> <h5>{card.time}</h5>
            </div>
            <a href={card.link} target="_blank" rel="noopener noreferrer">
              <h3>{card.title}</h3>
            </a>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventCard;
