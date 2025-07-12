import React from "react";
import TarotDeck from "./TarotDeck";

export default function TarotReading() {
  return (
    <div className="tarot-reading-container">
      <h1>Tarot Reading</h1>
      <p>What will the cards reveal...</p>
      <TarotDeck />
    </div>
  );
}
