import React from "react";

export default function FortuneCard({ fortune, onReveal }) {
  return (
    <div className="app">
      <h1>Fortune Teller</h1>
      <p>Ask your question and receive your fortune...</p>
      <button onClick={onReveal}>Reveal My Fortune</button>

      {fortune && (
        <>
          <div className="fortune-box">
            <p className="fortune-text">{fortune}</p>
          </div>
        </>
      )}
    </div>
  );
}
