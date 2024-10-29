// src/components/ReportIncidentForm.js
import React, { useState } from "react";
import axios from "axios";
import { getCurrentLocation } from "../services/geolocation";

function ReportIncidentForm() {
    const [type, setType] = useState("");
    const [severity, setSeverity] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("/api/incidents", { type, severity, location });
        alert("Incident reported successfully");
    };

    const handleGetCurrentLocation = async () => {
        try {
            const { latitude, longitude } = await getCurrentLocation();
            setLocation(`${latitude},${longitude}`); // Set the location state to latitude and longitude
        } catch (error) {
            alert(error.message); // Show an alert if there's an error
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Type"
                value={type}
                onChange={(e) => setType(e.target.value)}
            />
            <input
                type="text"
                placeholder="Severity"
                value={severity}
                onChange={(e) => setSeverity(e.target.value)}
            />
            <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button type="button" onClick={handleGetCurrentLocation}>
                Use My Location
            </button>
            <button type="submit">Report Incident</button>
        </form>
    );
}

export default ReportIncidentForm;
