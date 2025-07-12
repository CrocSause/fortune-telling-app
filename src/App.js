import React, { useState } from "react";
import "./styles.css";
import BackgroundBlobs from "./components/backgroundBlobs";
import CrystalBall from "./components/CrystalBall";
import FortuneCard from "./components/FortuneCard";

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

    // Optional: clear after 5s
    setTimeout(() => setFortune(""), 5000);
  }

  return (
    <>
      <BackgroundBlobs />
      <CrystalBall />
      <FortuneCard fortune={fortune} onReveal={revealFortune} />
    </>
  );
}
