import React, { useState } from "react";
import Display from "./Display";

const Dashboard = () => {
  const [balls, setBalls] = useState(0);
  const [fouls, setFouls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  //Strike information
  const addStrikes = e => {
    e.preventDefault();
    setStrikes(strikes + 1);
  };

  if (strikes >= 3) {
    setStrikes(0);
    setBalls(0);
  }
  // End Strike Information

  //Ball Information
  const addBalls = e => {
    e.preventDefault();
    setBalls(balls + 1);
  };

  if (balls >= 4) {
    setStrikes(0);
    setBalls(0);
  }
  // End Ball Information

  // Hit Information

  const addHit = e => {
    e.preventDefault();
    setStrikes(0);
    setBalls(0);
  };

  //End Hit Information

  // BIG COMPLICATED FOUL INFORMATION ↓↓↓
  const foulBalls = e => {
    e.preventDefault();
    setFouls(fouls + 1);

    if (strikes === 0) {
      setFouls(1);
      setStrikes(1);
    } else if (strikes === 1) {
      setStrikes(2);
      setFouls(2);
    } else if (strikes === 2) setStrikes(2);
    setFouls(fouls + 1);
  };

  //END OF THIS MONSTROSITY ↑↑↑

  return (
    <div>
      <Display balls={balls} strikes={strikes} />
      <h2>GAME DASH</h2>
      <button onClick={addBalls} className="buttons">
        Add Balls
      </button>
      <button onClick={foulBalls} className="buttons">
        Fouls
      </button>
      <button onClick={addStrikes} className="buttons">
        Strikes
      </button>
      <button onClick={addHit} className="buttons">
        Hit
      </button>
    </div>
  );
};

export default Dashboard;
