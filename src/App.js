import './App.scss';
import {BrowserRouter} from "react-router-dom";
import {AppRoutes} from "./Routes";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Popup } from 'react-leaflet';
import { Marker } from 'react-leaflet';

function App() {

  return (
    <div className="App">
      <header className="app-navbar">
          <div className='navbar-left'>
            <a href="/">
              <b>Vet Clinic 🐶🐈</b>
            </a>
          </div>
        <div className='navbar-buttons'>
          <a href="/about">
            <button className='navbar-button'>About Us</button>
          </a>
          <a href="/services">
            <button className='navbar-button'>Services</button>
          </a>
        </div>
        <div className='navbar-right'>
          <p><b>24/7</b> emergency number: <a href="tel:847717717">847 717 717</a></p>
        </div>
      </header>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
      <div className='app-footer'>
        <div className='footer-left'>
          <p>
            <h2>Our location:</h2>
            al. Politechniki 7<br/>93-590 Lodz, Poland
          </p>
          <img src="/cat.png" alt="cat" className='cat-outline-small'/>
          </div>
          <div className='footer-map'>
            <MapContainer style={{height: '100%', width: '100%'}} center={[51.747401, 19.450299]} zoom={14} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[51.747401, 19.450299]}>
                <Popup>
                  Vet Clinic
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <img src="/catbig.png" alt="bigcat" className='cat-outline-big'/>
        <div className='footer-right'>
        <div className="opening-hours">
            <h1>Opening hours:</h1>
            <p><b>Mon-Fri</b> 06:00-20:00<br/><b>Fri-Sun</b> 10:00-16:00</p>
         </div>
         <div className='footer-contact'>
          <p><a href="mailto:vetclinic@gmail.com">📧 vetclinic@gmail.com </a></p>
          <p><a href="tel:847717717">🚨 847 717 717 </a></p>
          <p><a href="tel:846616616">📞 846 616 616 </a></p>
         </div>
        
        </div>
      </div>
    </div>
  );
}

export default App;
