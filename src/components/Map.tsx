import '../styling/Map.css';
import map from '../images/egor-klyuchnyk-web-hd.jpg'
import React, { useEffect, useState } from 'react';
import TargetBox from './TargetBox';
import TargetMenu from './TargetMenu';

type Target = {
    name: string,
    startX: number,
    endX: number,
    startY: number,
    endY: number
  }

interface Props {
    targets: {
        name: string,
        startX: number,
        startY: number,
        endX: number,
        endY: number
    }[],
    addToFoundTargets: (target: Target) => void;
}
const Map: React.FC<Props> = ({targets, addToFoundTargets}) => {
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

    let handleScroll: () => void;
    handleScroll = () => {
        console.log('Scrolling')
        setIsClicked(false);
    }

    let validateAnswer: (name: string, posX: number, posY: number) => void;
    validateAnswer = (name, posX, posY) => {
        const existingMap = document.querySelector('.map');
        const boundingBox = existingMap?.getBoundingClientRect()!;
        //console.log(boundingBox)
        // 2400 is display width on which i wrote target coordinates initially
        posX = (posX / boundingBox.width) * 2400;
        // 4822 is display height on which i wrote target coordinates initially
        posY = (posY / boundingBox.height) * 4822;
        //console.log(`Adjusted target: ${posX}, ${posY}`)
        // Distance from target in pixels still counts
        const allowedInaccuracy = 15;
        targets.forEach((target) => {
            if (posX > (target['endX'] + allowedInaccuracy) 
                || 
                posX < (target['startX'] - allowedInaccuracy)) 
            {
                return
            }

            if (posY > (target['endY'] + allowedInaccuracy) 
                || 
                posY < (target['startY'] - allowedInaccuracy)) {
                return
            }

            if(target['name'] === name) {
                addToFoundTargets(target);
                console.log('Correct!');
            }
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
    <div className="Map-container" onScroll={handleScroll}>
        <img className='map'src={map} alt='Giant poster with a lot of crossovers' onClick={handleClick}></img>
        <footer>
            <div className='card'>Made by <a href='https://github.com/Hikyn'>Hikyn</a></div>
            <div className='card'>Image by <a href='https://www.instagram.com/ad.2.222/'>Egor Klyvchnyk</a></div>
        </footer>
        { isClicked ? 
        <>
            <TargetBox isLeft={isMenuOnLeft} pageX={pageX} pageY={pageY}/> 
            <TargetMenu isLeft={isMenuOnLeft} pageX={pageX} pageY={pageY} targets={targets} validateAnswer={validateAnswer}/>
        </> : ''}
    </div>
  );
}

export default Map;
