import React, { useEffect, useState } from "react";
import "../styling/GameUiControls.css";
interface Props {
  isGameFinished: boolean;
  setFinalTime: (seconds: number) => void;
}

const GameUiControls: React.FC<Props> = ({ isGameFinished, setFinalTime }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  useEffect(() => {
    if (isGameFinished) {
      setIsActive(false);
      console.log(
        `Final time: ${Math.floor(seconds / 60)}:${
          seconds % 60 < 10 ? "0" + (seconds % 60) : seconds % 60
        }`,
      );
      setFinalTime(seconds);
    }
  }, [seconds, isGameFinished, setFinalTime]);

  return (
    <div className="GameUiControls">
      <h2>
        Timer: {Math.floor(seconds / 60)}:
        {seconds % 60 < 10 ? "0" + (seconds % 60) : seconds % 60}
      </h2>
    </div>
  );
};

export default GameUiControls;
