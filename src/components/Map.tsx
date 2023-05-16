import '../styling/Map.css';
import map from '../images/egor-klyuchnyk-web-hd.jpg'
import React from 'react';

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
    let handleClick: (event: React.MouseEvent<HTMLElement>) => void;

    handleClick = (event) => {
        //console.log(event);
        console.log(event.pageX, event.pageY);

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

            // Create menu on left or right side of cursor 
            // depending on proximity to border of map
            const targetMenu = document.createElement('div');
            targetMenu.classList.add('target-menu');
            targetMenu.style.position = 'absolute';
            if (event.pageX + 300 > window.screen.width) {
                // Render on Left
                targetMenu.style.top = `calc(${event.pageY}px - calc(var(--target-box-size) / 2))`;
                targetMenu.style.left = `calc((calc(${event.pageX}px - calc(var(--target-box-size) * 2)) - 30px)`;
                // eventPageX - (target-box-size * 2) + 30px
                //     ^                 ^                ^
                // click pos             ^                 ^
                //             menu starts at end of box    \
                //                                          gap
                box.style.borderRadius = '0% 20% 20% 0%';
                targetMenu.style.borderRadius = '20% 0% 0% 20%';
            } else {
                 // Render on right
                targetMenu.style.top = `calc(${event.pageY}px - calc(var(--target-box-size) / 2))`;
                // eventPageY + (target-box-size * 0.5) + 30px
                //     ^               ^                    ^
                // click pos           ^                    ^
                //               menu starts at end of box   \
                //                                           gap
                targetMenu.style.left = `calc((calc(${event.pageX}px + calc(var(--target-box-size) * 0.5))) + 30px)`;
                targetMenu.style.borderRadius = '0% 20% 20% 0%';
                box.style.borderRadius = '20% 0% 0% 20%';
            }

            // Append targets to menu
            targets.forEach((target) => {
                const character = document.createElement('div');
                character.textContent = target['name'];
                targetMenu.appendChild(character);
            })
            
            mapContainer?.appendChild(box);
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
