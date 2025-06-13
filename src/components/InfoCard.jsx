import React from "react";
import "../styles/infoCard.css";

function InfoCard({ cardData }) {
  return (
    <div className="info-card">
      {cardData.map((card, index) => (
        <div key={index} className="info-card-item">
          <img src={card.logo} alt={card.title} />
          <h4>{card.title}</h4>
          <p
            className="info-card-item-description"
            style={{ fontSize: "1rem" }}
          >
            {card.description}
          </p>
          <p>
            <span
              style={{
                fontWeight: "bold",
                display: card.phone ? "block" : "none",
              }}
            >
              Email:
            </span>{" "}
            {card.email}
          </p>
          <p style={{ display: card.phone ? "block" : "none" }}>
            <span style={{ fontWeight: "bold" }}>Phone:</span> {card.phone}
          </p>
        </div>
      ))}
    </div>
  );
}

export default InfoCard;
