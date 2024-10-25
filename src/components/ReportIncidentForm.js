import React, { useState } from "react";
import axios from "axios";

function ReportIncidentForm() {
    const [type, setType] = useState("");
    const [severity, setSeverity] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("/api/incidents", { type, severity, location });
        alert("Incident reported successfully");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Type" value={type} onChange={(e) => setType(e.target.value)} />
            <input type="text" placeholder="Severity" value={severity} onChange={(e) => setSeverity(e.target.value)} />
            <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
            <button type="submit">Report Incident</button>
        </form>
    );
}

export default ReportIncidentForm;
