import React from 'react';
import '../styling/NavBar.css';
import GameUiControls from './GameUiControls';
type Target = {
    name: string,
    startX: number,
    endX: number,
    startY: number,
    endY: number
  }


  type TargetList = Target[];
interface Props {
    targets: TargetList;
    isLoggedIn: boolean;
    isGameStarted: boolean;
    isGameFinished: boolean;
}

const NavBar: React.FC<Props> = ({ targets, isLoggedIn, isGameStarted, isGameFinished}) => {
    return (
        <div className="NavBar">
            {isGameStarted ? <GameUiControls isGameFinished={isGameFinished}/> : <></>}
            <div className='NavBar-targets'>
            {isGameStarted ? 
            targets.map((target) => {
                return (<>
                <div className='flexContainer'>
                    <img src={'images/' + target.name + '.png'} alt={'Image of ' + target.name}></img>
                    <div key={target.name}>{target.name}</div>
                </div>
                    <br></br>
                </>)
            }) : ''}
            </div>
        </div>
    );
}

export default NavBar;
