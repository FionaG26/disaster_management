import L from 'leaflet';

// Initialize the map centered on Kenya
const map = L.map('map-container').setView([-0.5, 37.0], 6); // Set to the approximate center of Kenya

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Sample data for disaster incidents
const incidents = [
    { type: 'Flood', coordinates: [-1.286389, 36.817223], description: 'Severe flooding reported in Nairobi' },
    { type: 'Fire', coordinates: [-1.2921, 36.8219], description: 'Forest fire in Karura' },
    { type: 'Drought', coordinates: [-0.024, 36.9092], description: 'Drought conditions in Garissa' }
];

// Add markers for incidents
incidents.forEach(incident => {
    L.marker(incident.coordinates)
        .addTo(map)
        .bindPopup(`<strong>${incident.type}</strong><br>${incident.description}`);
});

// Handle incident report form submission
const incidentForm = document.getElementById('incident-form');
incidentForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form values
    const type = document.getElementById('incident-type').value;
    const location = document.getElementById('incident-location').value.split(',').map(Number); // Expecting "latitude,longitude"
    const description = document.getElementById('incident-description').value;

    // Validate coordinates
    if (location.length !== 2 || isNaN(location[0]) || isNaN(location[1])) {
        alert('Please enter a valid location in "latitude,longitude" format.');
        return;
    }

    // Create new incident object
    const newIncident = {
        type: type,
        coordinates: location,
        description: description
    };

    // Send data to backend
    try {
        const response = await fetch("http://localhost:5000/api/incidents/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newIncident),
        });

        if (response.ok) {
            // Add marker for the new incident on the map
            L.marker(newIncident.coordinates)
                .addTo(map)
                .bindPopup(`<strong>${newIncident.type}</strong><br>${newIncident.description}`);
            
            // Clear the form
            incidentForm.reset();
            alert('Incident reported successfully!');
        } else {
            alert('Error reporting incident.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while reporting the incident.');
    }
});

// Optionally, add a click event on the map to get coordinates
map.on('click', function(e) {
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;
    document.getElementById('incident-location').value = `${lat},${lng}`; // Automatically fill in the coordinates
});
