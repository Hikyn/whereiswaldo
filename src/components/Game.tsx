import { useState } from 'react';
import '../styling/Game.css';
import NavBar from './NavBar';
import Map from './Map';

function Game() {
  // TO DO: Change boolean to True after starting game
  const [isGameStarted, setIsGameStarted] = useState(false);
  
  // TO DO: Change to true after implementing login system
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const [targets, setTargets] = useState({
    name: 'Avatar',
    posX: 2018,
    posY: 1519
   });

  return (
    <div className="Game">
      <NavBar isLoggedIn={isLoggedIn} isGameStarted={isGameStarted}/>
      <Map targets={targets}/>
    </div>
  );
}

export default Game;
