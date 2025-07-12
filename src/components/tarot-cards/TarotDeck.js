import React, { useState } from "react";
import majorArcana from "./data/majorArcana.js";
import TarotCard from "./TarotCard";

export default function TarotDeck() {
  const [drawnCard, setDrawnCard] = useState(null);
  const [flipped, setFlipped] = useState(false);

  const drawCard = () => {
    const randomCard =
      majorArcana[Math.floor(Math.random() * majorArcana.length)];
    setDrawnCard(randomCard);
    setFlipped(false);
    setTimeout(() => setFlipped(true), 500); // delay flip
  };

  return (
    <div className="tarot-deck">
      {!drawnCard && (
        <button className="draw-button" onClick={drawCard}>
          Draw a Tarot Card
        </button>
      )}
      {drawnCard && (
        <div className="tarot-reading">
          <TarotCard card={drawnCard} flipped={flipped} />
          {flipped && (
            <div className="meaning">
              <h2>{drawnCard.name}</h2>
              <p>{drawnCard.meaning}</p>
              <button onClick={() => setDrawnCard(null)}>Draw Another</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
