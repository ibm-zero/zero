import 'leaflet/dist/leaflet.css';
import '../styles/map.scss';

import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
// import axios from 'axios';

import { Icon, InlineIcon } from '@iconify/react';
import magnifyIcon from '@iconify/icons-mdi-light/magnify';
import arrowLeftCircle from '../assets/images/back-btn.png';
import mapPin from '../assets/images/pin.png';
import { useHistory } from 'react-router-dom';

const mapPinIcon = L.icon({
  iconUrl: mapPin,
  iconSize: [30, 30],
  iconAnchor: [0, 0],
  popupAnchor: [10, -5],
});

// posição que o mapa é inicializado
const initialPosition = { lat: -25.441105, lng: -49.236855 };

const markerArray = [
  { lat: -25.441105, lng: -49.216855 },
  { lat: -25.401105, lng: -49.225855 },
  { lat: -25.411105, lng: -49.242855 },
  { lat: -25.421105, lng: -49.236155 },
  { lat: -25.431105, lng: -49.256855 },
];

export function Map() {
  const history = useHistory();

  function handleBack() {
    history.push('/home');
  }

  return (
    <>
      <button className='back-btn' onClick={handleBack}>
        <img src={arrowLeftCircle} alt='back' />
      </button>
      <div id='page-map'>
        <MapContainer
          center={initialPosition}
          zoomControl={false}
          zoom={13}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`}
          />
          {markerArray.map((item) => (
            <Marker icon={mapPinIcon} position={item}>
              <Popup>Hi</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <form className='map-search'>
        <div>
          <input type='text' placeholder='Search goods' />
          <Icon icon={magnifyIcon} className='magnify' />
        </div>
        <button className='search-btn'>Go to catalog</button>
      </form>
    </>
  );
}
