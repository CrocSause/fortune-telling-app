import React from "react";
import "./TarotCard.css";

export default function TarotCard({ card, flipped }) {
  return (
    <div className={`tarot-card ${flipped ? "flipped" : ""}`}>
      <div className="tarot-inner">
        <div className="tarot-front">
          <img src={card.image} alt={card.name} />
        </div>
        <div className="tarot-back">
          <img src="/cards/back.png" alt="Card Back" />
        </div>
      </div>
    </div>
  );
}
