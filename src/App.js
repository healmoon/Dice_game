import React, { useState } from 'react';
import Dice from './components/Dice';


const App = () => {
  const [diceValue, setDiceValue] = useState(1);

  const rollDice = () => {
    const newValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(newValue);
  };

  return (
    <div className="app">
      <h1>Игра в Кубик</h1>
      <Dice diceValue={diceValue} />
      <button onClick={rollDice}>Тык!</button>
    </div>
  );
};

export default App;
