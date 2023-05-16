import '../styling/Map.css';
import map from '../images/egor-klyuchnyk-web-hd.jpg'
import React from 'react';

interface Props {
    targets: {
        name: string,
        posX: number,
        posY: number
    }
}
const Map: React.FC<Props> = ({targets}) => {
    let handleClick: (event: React.MouseEvent<HTMLElement>) => void;

    handleClick = (event) => {
        console.log(event);
        //console.log(event.pageX, event.pageY);

        // If target box is present, we remove it. Otherwise, we draw it
        const existingTargetBox = document.querySelector('.target-box');
        const existingTargetMenu = document.querySelector('.target-menu');
        if (existingTargetBox && existingTargetMenu) {
            existingTargetBox.remove();
            existingTargetMenu.remove();
        } else {
            // Create target box at click center
            const mapContainer = document.querySelector('.Map-container');
            const box = document.createElement('div');
            box.classList.add('target-box');
            box.style.position = 'absolute';
            box.style.top = `calc(${event.pageY}px - calc(var(--target-box-size) / 2))`;
            box.style.left = `calc(${event.pageX}px - calc(var(--target-box-size) / 2))`;
            mapContainer?.appendChild(box);

            // Create menu on left or right side of cursor 
            // depending on proximity to border of map
            console.log(window.screen.width);
            const targetMenu = document.createElement('div');
            targetMenu.classList.add('target-menu');
            targetMenu.style.position = 'absolute';
            if (event.pageX + 300 > window.screen.width) {
                // Render on Left
                targetMenu.style.top = `calc(${event.pageY}px - calc(var(--target-box-size) / 2))`;
                targetMenu.style.left = `calc(calc(${event.pageX}px - var(--target-box-size)) - var(--target-box-size))`;
            } else {
                 // Render on right
                 targetMenu.style.top = `calc(${event.pageY}px - calc(var(--target-box-size) / 2))`;
                 targetMenu.style.left = `calc(calc(${event.pageX}px - var(--target-box-size)) + calc(var(--target-box-size) * 1.5))`;
            }
            
            mapContainer?.appendChild(targetMenu);
        }
    }

    return (
    <div className="Map-container">
        <img className='map'src={map} alt='Giant poster with a lot of crossovers' onClick={handleClick}></img>
        <footer>
            <div className='card'>Made by <a href='https://github.com/Hikyn'>Hikyn</a></div>
            <div className='card'>Image by <a href='https://www.instagram.com/ad.2.222/'>Egor Klyvchnyk</a></div>
        </footer>
    </div>
  );
}

export default Map;
