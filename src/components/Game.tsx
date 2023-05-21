import React, { useEffect, useState } from 'react';
import '../styling/Game.css';
import NavBar from './NavBar';
import Map from './Map';
import randomTargets from '../randomTargets';
import PopUpScreen from './PopUpScreen';
import Introduction from './Introduction';
import TargetIntroduction from './TargetIntroduction';
import LeaderBoard from './LeaderBoard';
import SubmitScreen from './SubmitScreen';

interface Props {
  writeScoreToDB: (name: string, score: number, usedSecretCode: string) => void;
}

const Game: React.FC<Props> = ({writeScoreToDB}) => {
  type Target = {
    name: string,
    startX: number,
    endX: number,
    startY: number,
    endY: number
  }

  type TargetList = Target[];
  // TO DO: Change boolean to True after starting game
  const [isGameStarted, setIsGameStarted] = useState(false);

  let startGame: () => void;
  startGame = () => {
    setIsGameStarted(true);
  }

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

  const [finalTime, setFinalTime] = useState(0);

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
      <NavBar targets={targets} isLoggedIn={isLoggedIn} isGameStarted={isGameStarted} isGameFinished={isGameFinished} setFinalTime={setFinalTime}/>
      <Map targets={targets} addToFoundTargets={addToFoundTargets} isGameFinished={isGameFinished} isGameStarted={isGameStarted}/>
      {isGameStarted ? '' : <PopUpScreen leftSide={<Introduction />} rightSide={<TargetIntroduction targets={targets} startGame={startGame}/>} />}
      {isGameFinished ? <PopUpScreen leftSide={<LeaderBoard />} rightSide={<SubmitScreen finalTime={finalTime} writeScoreToDB={writeScoreToDB}/>}/> : ''}
    </div>
  );
}

export default Game;
