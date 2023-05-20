import React from 'react';
import '../styling/StartingScreen.css';

type Target = {
    name: string,
    startX: number,
    endX: number,
    startY: number,
    endY: number
}

type TargetList = Target[];

interface Props {
    targets: TargetList,
    startGame: () => void;
}
const StartingScreen: React.FC<Props> = ({targets, startGame}) => {
    return (
        <div className="StartingScreen">
            <div className="introduction">
                <h1>How to play</h1>
                <div>1. Locate required character</div>
                <div>2. Click on him</div>
                <div>3. Select from new menu which character you think you found</div>
            </div>
            <div className='targets'>
                <h1>You need to find:</h1>
            {targets.map((target) => {
                return (<>
                <div className='flexContainer'>
                    <img src={'images/' + target.name + '.png'} alt={'Image of ' + target.name}></img>
                    <div key={target.name}>{target.name}</div>
                </div>
                    <br></br>
                </>)
            })}
            <button onClick={startGame}>Get started!</button>
            </div>
            
        </div>
    );
}

export default StartingScreen;
