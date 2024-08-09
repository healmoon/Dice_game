import React from 'react';
import "./Dice.css";

const Dice = ({ diceValue }) => {
  return <img src={`images/dice${diceValue}.png`}  />;
};

export default Dice;
