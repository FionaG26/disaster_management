import React, { useEffect } from "react";
import L from "leaflet";

function MapView() {
    useEffect(() => {
        const map = L.map("map").setView([-1.2921, 36.8219], 7);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
        }).addTo(map);

        // Fetch incidents and add markers (this can be updated with API data)
    }, []);

    return <div id="map" style={{ height: "400px", width: "100%" }}></div>;
}

export default MapView;
