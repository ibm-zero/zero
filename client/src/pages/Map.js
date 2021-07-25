import 'leaflet/dist/leaflet.css';
import '../styles/map.scss'

import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
// import axios from 'axios';

import mapPin from '../assets/images/pin.png';

const mapPinIcon = L.icon({
  iconUrl: mapPin,
  iconSize: [20, 20],
  iconAnchor: [0, 0],
  popupAnchor: [10, -5],
});

// posição que o mapa é inicializado
const initialPosition = { lat: -25.441105, lng: -49.276855 };

export function Map() {
  return (
    <div id='page-map'>
      <MapContainer
        center={initialPosition}
        zoom={13}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`}
        />
        <Marker icon={mapPinIcon} position={initialPosition}>
          <Popup>Hi</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
