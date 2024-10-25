import L from 'leaflet';

// Sample data for disaster incidents
const incidents = [
    { type: 'Flood', coordinates: [-1.286389, 36.817223], description: 'Severe flooding reported in Nairobi' },
    { type: 'Fire', coordinates: [-1.2921, 36.8219], description: 'Forest fire in Karura' },
    { type: 'Drought', coordinates: [-0.024, 36.9092], description: 'Drought conditions in Garissa' }
];

// Sample data for resources
const resources = [
    { type: 'Medical Supplies', quantity: 200, location: 'Nairobi' },
    { type: 'Food Supplies', quantity: 500, location: 'Mombasa' },
    { type: 'Water Bottles', quantity: 300, location: 'Kisumu' }
];

// Sample data for volunteers
const volunteers = [
    { name: 'John Doe', location: 'Nairobi', skills: 'Medical Assistance' },
    { name: 'Jane Smith', location: 'Mombasa', skills: 'Logistics Coordination' },
    { name: 'Samuel Karanja', location: 'Kisumu', skills: 'Search and Rescue' }
];

// Initialize the map
const map = L.map('map-container').setView([-1.286389, 36.817223], 6); // Set to Nairobi's coordinates

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add markers for incidents
incidents.forEach(incident => {
    L.marker(incident.coordinates)
        .addTo(map)
        .bindPopup(`<strong>${incident.type}</strong><br>${incident.description}`);
});

// Populate the resource list
const resourceList = document.getElementById('resource-list');
resources.forEach(resource => {
    const resourceItem = document.createElement('div');
    resourceItem.className = 'resource-item';
    resourceItem.innerHTML = `
        <h3>${resource.type}</h3>
        <p>Quantity: ${resource.quantity}</p>
        <p>Location: ${resource.location}</p>
    `;
    resourceList.appendChild(resourceItem);
});

// Populate the volunteer list
const volunteerList = document.getElementById('volunteer-list');
volunteers.forEach(volunteer => {
    const volunteerItem = document.createElement('div');
    volunteerItem.className = 'volunteer-item';
    volunteerItem.innerHTML = `
        <h3>${volunteer.name}</h3>
        <p>Location: ${volunteer.location}</p>
        <p>Skills: ${volunteer.skills}</p>
    `;
    volunteerList.appendChild(volunteerItem);
});

// Handle incident report form submission
const incidentForm = document.getElementById('incident-form');
incidentForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form values
    const type = document.getElementById('incident-type').value;
    const location = document.getElementById('incident-location').value;
    const description = document.getElementById('incident-description').value;

    // Add new incident to the incidents array
    const newIncident = {
        type: type,
        coordinates: [parseFloat(location.split(',')[0]), parseFloat(location.split(',')[1])], // Expecting "latitude,longitude"
        description: description
    };
    incidents.push(newIncident);

    // Add marker for the new incident
    L.marker(newIncident.coordinates)
        .addTo(map)
        .bindPopup(`<strong>${newIncident.type}</strong><br>${newIncident.description}`);

    // Clear the form
    incidentForm.reset();
});
