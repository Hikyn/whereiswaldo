import '../styling/Map.css';
import map from '../images/egor-klyuchnyk-web-hd.jpg'
import React, { useState } from 'react';
import TargetBox from './TargetBox';
import TargetMenu from './TargetMenu';

interface Props {
    targets: {
        name: string,
        startX: number,
        startY: number,
        endX: number,
        endY: number
    }[]
}
const Map: React.FC<Props> = ({targets}) => {
    const [isClicked, setIsClicked] = useState(false);
    const [isMenuOnLeft, setIsMenuOnLeft] = useState(false);
    const [pageX, setPageX] = useState(0);
    const [pageY, setPageY] = useState(0);

    let handleClick: (event: React.MouseEvent<HTMLElement>) => void;
    handleClick = (event) => {
        //console.log(event);
        console.log(event.pageX, event.pageY);
        setPageX(event.pageX);
        setPageY(event.pageY);

        // If target box is present, we remove it. Otherwise, we draw it
        const existingTargetBox = document.querySelector('.target-box');
        const existingTargetMenu = document.querySelector('.target-menu');
        if (existingTargetBox && existingTargetMenu) {
            setIsClicked(false);
        } else {
            // Create target box at click center
            setIsClicked(true);
            if (event.pageX + 300 > window.screen.width) {
                // Render box on Left
                setIsMenuOnLeft(true);
            } else {
                setIsMenuOnLeft(false);
            }
        }
    }

    return (
    <div className="Map-container">
        <img className='map'src={map} alt='Giant poster with a lot of crossovers' onClick={handleClick}></img>
        <footer>
            <div className='card'>Made by <a href='https://github.com/Hikyn'>Hikyn</a></div>
            <div className='card'>Image by <a href='https://www.instagram.com/ad.2.222/'>Egor Klyvchnyk</a></div>
        </footer>
        { isClicked ? 
        <>
            <TargetBox isLeft={isMenuOnLeft} pageX={pageX} pageY={pageY}/> 
            <TargetMenu isLeft={isMenuOnLeft} pageX={pageX} pageY={pageY} targets={targets}/>
        </> : ''}
    </div>
  );
}

export default Map;
