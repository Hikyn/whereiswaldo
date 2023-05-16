import React from 'react';
import '../styling/NavBar.css';
import GameUiControls from './GameUiControls';

interface Props {
    isLoggedIn: boolean;
    isGameStarted: boolean;
}

const NavBar: React.FC<Props> = ({ isLoggedIn, isGameStarted}) => {
    return (
        <div className="NavBar">
            {isGameStarted ? <GameUiControls/> : <>NO UI</>}
        </div>
    );
}

export default NavBar;
