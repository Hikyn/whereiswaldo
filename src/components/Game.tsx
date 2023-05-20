import { useState } from 'react';
import '../styling/Game.css';
import NavBar from './NavBar';
import Map from './Map';

function Game() {
  // TO DO: Change boolean to True after starting game
  const [isGameStarted, setIsGameStarted] = useState(false);
  
  // TO DO: Change to true after implementing login system
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const [targets, setTargets] = useState([{
    name: 'Avatar',
    startX: 1950,
    endX: 2054,
    startY: 1473,
    endY: 1607
   }, {
    name: 'Raiden',
    startX: 356,
    endX: 451,
    startY: 3497,
    endY: 3752
   }, {
    name: 'Little Nightmare',
    startX: 999,
    endX: 1064,
    startY: 4129,
    endY: 4210
   }]);
  return (
    <div className="Game">
      <NavBar isLoggedIn={isLoggedIn} isGameStarted={isGameStarted}/>
      <Map targets={targets}/>
    </div>
  );
}

export default Game;
