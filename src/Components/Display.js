import React from "react";

const Display = props => {
  return (
    <div>
      <h3>Game Info</h3>
      <p>Strikes: {props.strikes}</p>
      <p>Balls: {props.balls} </p>
    </div>
  );
};

export default Display;
