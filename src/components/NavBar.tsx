import React from 'react';
import '../styling/NavBar.css';
import GameUiControls from './GameUiControls';

interface Props {
    isLoggedIn: boolean;
    isGameStarted: boolean;
    isGameFinished: boolean;
}

const NavBar: React.FC<Props> = ({ isLoggedIn, isGameStarted, isGameFinished}) => {
    return (
        <div className="NavBar">
            {isGameStarted ? <GameUiControls isGameFinished={isGameFinished}/> : <></>}
        </div>
    );
}

export default NavBar;
