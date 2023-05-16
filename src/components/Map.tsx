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
    let createTargetBox: (event: React.MouseEvent<HTMLElement>, isLeft: boolean) => HTMLElement;
    let createMenu: (event: React.MouseEvent<HTMLElement>, isLeft: boolean) => HTMLElement;

    createTargetBox = (event, isLeft) => {
        const box = document.createElement('div');

        box.classList.add('target-box');
        box.style.position = 'absolute';
        box.style.top = `calc(${event.pageY}px - calc(var(--target-box-size) / 2))`;
        box.style.left = `calc(${event.pageX}px - calc(var(--target-box-size) / 2))`;

        if (isLeft) {
            box.style.borderRadius = '0% 20% 20% 0%';
        } else {
            box.style.borderRadius = '20% 0% 0% 20%';
        }
        return box;
    }

    createMenu = (event, isLeft) => {
        const targetMenu = document.createElement('div');
        targetMenu.classList.add('target-menu');
        targetMenu.style.position = 'absolute';

        if (isLeft) {
            targetMenu.style.top = `calc(${event.pageY}px - calc(var(--target-box-size) / 2))`;
            targetMenu.style.left = `calc((calc(${event.pageX}px - calc(var(--target-box-size) * 2)) - 30px)`;
            // eventPageX - (target-box-size * 2) + 30px
            //     ^                 ^                ^
            // click pos             ^                 ^
            //             menu starts at end of box    \
            //                                          gap
            targetMenu.style.borderRadius = '20% 0% 0% 20%';
        } else {
            targetMenu.style.top = `calc(${event.pageY}px - calc(var(--target-box-size) / 2))`;
            targetMenu.style.left = `calc((calc(${event.pageX}px + calc(var(--target-box-size) * 0.5))) + 30px)`;
            // eventPageY + (target-box-size * 0.5) + 30px
            //     ^               ^                    ^
            // click pos           ^                    ^
            //               menu starts at end of box   \
            //                                           gap
            targetMenu.style.borderRadius = '0% 20% 20% 0%';
        }
        return targetMenu;
    }
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

            // Create menu on right if cursor is not close to right border
            let isLeft: boolean;
            if (event.pageX + 300 > window.screen.width) {
                // Render box on Left
                isLeft = true;
            } else {
                isLeft = false;
            }

            const targetBox = createTargetBox(event, isLeft)
            const targetMenu = createMenu(event, isLeft)

            // Append targets to menu
            targets.forEach((target) => {
                const character = document.createElement('div');
                character.textContent = target['name'];
                targetMenu.appendChild(character);
            })
            
            mapContainer?.appendChild(targetBox);
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
