import '../styling/Map.css';
import map from '../images/egor-klyuchnyk-web-hd.jpg'
import { useEffect } from 'react';

function Map() {
    let handleClick: (event: React.MouseEvent<HTMLElement>) => void;

    handleClick = (event) => {
        console.log(event);
        console.log(event.pageX, event.pageY);
        const mapContainer = document.querySelector('.Map-container');
        const map = document.querySelector('.map');
        const box = document.createElement('div');
        box.classList.add('target-box');
        box.style.position = 'absolute';
        box.style.top = `calc(${event.pageY}px - calc(var(--target-box-size) / 2))`;
        box.style.left = `calc(${event.pageX}px - calc(var(--target-box-size) / 2))`;
        mapContainer?.appendChild(box);
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
