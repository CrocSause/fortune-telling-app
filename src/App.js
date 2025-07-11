import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [fortune, setFortune] = useState("");

  const fortunes = [
    "You will find what you seek, but at great cost.",
    "Someone from your past will reappear soon.",
    "The stars are uncertain — try again later.",
    "An unexpected windfall is in your future.",
    "Beware of shiny objects... and flattery.",
    "Love is closer than you think.",
    "Something lost will be returned to you.",
    "A great change is coming — prepare well.",
  ];

  function revealFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    setFortune(fortunes[randomIndex]);
    setTimeout(() => setFortune(""), 5000); // clears fortune after 10s
  }

  return (
    <div className="app">
      <h1>🔮 Fortune Teller</h1>
      <p>Ask your question and receive your fortune...</p>
      <button onClick={revealFortune}>Reveal My Fortune</button>
      {fortune && (
        <div className="fortune-box">
          <p className="fortune-text">{fortune}</p>
        </div>
      )}
    </div>
  );
}
