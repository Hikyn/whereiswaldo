import React from 'react';
import '../styling/NavBar.css';
import GameUiControls from './GameUiControls';

function NavBar() {
    const isGameStarted: boolean = false;
    return (
        <div className="NavBar">
            {isGameStarted ? <GameUiControls/> : <>NO UI</>}
        </div>
    );
}

export default NavBar;
