import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Ensure you import the Leaflet CSS

const MapView = () => {
    useEffect(() => {
        // Initialize the map
        const map = L.map('map-container').setView([-1.286389, 36.817223], 6); // Center on Nairobi

        // Add OpenStreetMap tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Add a marker for demonstration
        L.marker([-1.286389, 36.817223]).addTo(map).bindPopup('Nairobi').openPopup();
    }, []);

    return <div id="map-container" style={{ height: '400px' }}></div>; // Set a height for the map
};

export default MapView;
