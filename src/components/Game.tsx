import { useState } from 'react';
import '../styling/Game.css';
import NavBar from './NavBar';
import Map from './Map';

function Game() {
  // TO DO: Change boolean to True after starting game
  const [isGameStarted, setIsGameStarted] = useState(false);
  
  // TO DO: Change to true after implementing login system
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="Game">
      <NavBar isLoggedIn={isLoggedIn} isGameStarted={isGameStarted}/>
      <Map />
    </div>
  );
}

export default Game;
