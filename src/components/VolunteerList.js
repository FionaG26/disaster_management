import React, { useEffect, useState } from "react";
import axios from "axios";

function VolunteerList() {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        async function fetchVolunteers() {
            const response = await axios.get("/api/volunteers");
            setVolunteers(response.data);
        }
        fetchVolunteers();
    }, []);

    return (
        <div>
            <h2>Volunteer List</h2>
            <ul>
                {volunteers.map((volunteer) => (
                    <li key={volunteer.id}>{volunteer.name} - {volunteer.skills} at {volunteer.location}</li>
                ))}
            </ul>
        </div>
    );
}

export default VolunteerList;
