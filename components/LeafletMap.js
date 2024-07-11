// components/LeafletMap.js
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState } from 'react';
import { MdLayers } from 'react-icons/md';

// Fix for the default icon not being found
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});


const LeafletMap = ({
    mapType
}) => {
    const position = [-3.248193271406992, 109.74736394785312]
    const mapUrlType = [
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        "http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}"
    ]

    return (
        <div>
            <MapContainer center={position} zoom={5}  style={{ height: '100vh', width: '100%' }}>
                <TileLayer
                    url={mapUrlType[mapType]}
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default LeafletMap;