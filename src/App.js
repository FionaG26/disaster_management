import React from "react";
import Header from "./components/Header";
import MapView from "./components/MapView";
import ReportIncidentForm from "./components/ReportIncidentForm";
import ResourceList from "./components/ResourceList";
import VolunteerList from "./components/VolunteerList";

function App() {
    return (
        <div>
            <Header />
            <MapView />
            <ReportIncidentForm />
            <ResourceList />
            <VolunteerList />
        </div>
    );
}

export default App;
