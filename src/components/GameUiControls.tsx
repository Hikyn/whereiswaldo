import React, { useEffect, useState } from 'react';
import '../styling/GameUiControls.css';

function GameUiControls() {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | undefined;
        if (isActive) {
          interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
          }, 1000);
        } else if (!isActive && seconds !== 0) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [isActive, seconds]);

    return (
        <div className="GameUiControls">
            Timer: {Math.floor(seconds/60)}:{seconds%60 < 10 ? '0' + seconds%60 : seconds%60}
        </div>
    );
}

export default GameUiControls;
