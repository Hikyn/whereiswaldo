import '../styling/Map.css';
import map from '../images/egor-klyuchnyk-web-hd.jpg'

function Map() {
    return (
    <div className="Map-container">
        <img className='map'src={map} alt='Giant poster with a lot of crossovers'></img>
        <footer>
            <div className='card'>Made by <a href='https://github.com/Hikyn'>Hikyn</a></div>
            <div className='card'>Image by <a href='https://www.instagram.com/ad.2.222/'>Egor Klyvchnyk</a></div>
        </footer>
    </div>
  );
}

export default Map;
