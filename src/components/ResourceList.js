import React, { useEffect, useState } from "react";
import axios from "axios";

function ResourceList() {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        async function fetchResources() {
            const response = await axios.get("/api/resources");
            setResources(response.data);
        }
        fetchResources();
    }, []);

    return (
        <div>
            <h2>Available Resources</h2>
            <ul>
                {resources.map((resource) => (
                    <li key={resource.id}>{resource.type} - {resource.quantity} at {resource.location}</li>
                ))}
            </ul>
        </div>
    );
}

export default ResourceList;
