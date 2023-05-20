import { useEffect, useState } from 'react';
import '../styling/Game.css';
import NavBar from './NavBar';
import Map from './Map';
import randomTargets from '../randomTargets';

function Game() {
  type Target = {
    name: string,
    startX: number,
    endX: number,
    startY: number,
    endY: number
  }

  type TargetList = Target[];
  // TO DO: Change boolean to True after starting game
  const [isGameStarted, setIsGameStarted] = useState(true);
  const [isGameFinished, setIsGameFinished] = useState(false);
  
  // TO DO: Change to true after implementing login system
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const [foundTargets, setFoundTargets] = useState<TargetList>([]);
  
  let addToFoundTargets: (target: Target) => void;

  addToFoundTargets = (target: Target) => {
    if (foundTargets.includes(target)) {
      return
    } else {
      setFoundTargets([...foundTargets, target]);
      let copyTargets = [...targets];
      let i = 0;
      targets.forEach((stateTarget) => {
        if (stateTarget === target) {
          copyTargets.splice(i, 1);
        }
        i += 1;
      })
      setTargets(copyTargets);
    }
  }

  const [targets, setTargets] = useState<TargetList>([]);

  useEffect(() => {
    let randomedTargets: TargetList = randomTargets();
    setTargets(randomedTargets);
  }, []);

  useEffect(() => {
    if (foundTargets.length === 3) {
      setIsGameFinished(true);
    }
  }, [foundTargets]);

  useEffect(() => {
    console.log(`NEW TARGET FOUND. Found targets:`);
    console.log(foundTargets);
  }, [foundTargets]);
  return (
    <div className="Game">
      <NavBar isLoggedIn={isLoggedIn} isGameStarted={isGameStarted} isGameFinished={isGameFinished}/>
      <Map targets={targets} addToFoundTargets={addToFoundTargets}/>
    </div>
  );
}

export default Game;
