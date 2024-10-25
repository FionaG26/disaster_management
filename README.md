# Disaster Management System

## Overview
The Disaster Management System is a web application designed to help citizens in Kenya report disaster incidents in real-time and coordinate rescue and relief efforts. It provides features for reporting incidents, viewing disaster zones, tracking resources, and managing volunteers.

## Features
- **Incident Reporting**: Citizens can report incidents such as droughts, floods, fires, terrorism, technological accidents, and diseases through a user-friendly form.
- **Map Visualization**: Interactive map displaying reported disaster locations with markers indicating type and severity.
- **Resource Coordination**: A dashboard to track available resources and their locations for rescue teams.
- **Real-time Updates**: WebSockets are used for real-time data updates on incident reports and resource allocation.
- **Volunteer Management**: Manage volunteer details, including their skills and locations, to effectively match them with needs in disaster-affected areas.
- **Authorization and Authentication**: JWT or OAuth can be implemented to restrict access to authorized users.

## Tech Stack
- **Backend**: Python with FastAPI or Flask
- **Database**: Cassandra
- **Frontend**: React
- **Map Visualization**: Leaflet or Google Maps API
- **Real-time Communication**: WebSockets

## File Structure
```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py
│   ├── config.py
│   ├── routes/
│   │   ├── __init__.py
│   │   ├── incidents.py
│   │   ├── resources.py
│   │   └── volunteers.py
│   ├── models/
│   │   ├── __init__.py
│   │   ├── incident.py
│   │   ├── resource.py
│   │   └── volunteer.py
│   ├── services/
│   │   ├── __init__.py
│   │   ├── cassandra_service.py
│   │   └── data_processing.py
├── tests/
│   ├── test_incidents.py
│   ├── test_resources.py
│   └── test_volunteers.py
└── requirements.txt
frontend/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── assets/
│       └── logo.png
├── src/
│   ├── App.js
│   ├── index.js
│   ├── components/
│   │   ├── Header.js
│   │   ├── MapView.js
│   │   ├── ReportIncidentForm.js
│   │   ├── ResourceList.js
│   │   └── VolunteerList.js
│   └── services/
│       ├── api.js
│       └── geolocation.js
├── package.json
└── webpack.config.js
cassandra/
├── schema.cql
└── seed_data.cql
README.md
```

## Installation
### Prerequisites
- Python 3.x
- Node.js (with npm)
- Cassandra

### Backend Setup
1. **Clone the repository**: 
   ```bash
   git clone <repository-url>
   cd disaster-management-system/backend
   ```
2. **Create a virtual environment**: 
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
3. **Install dependencies**: 
   ```bash
   pip install -r requirements.txt
   ```
4. **Set up Cassandra**: 
   - Create a keyspace for the application. 
   - Run the following commands in your Cassandra shell:
     ```cql
     CREATE KEYSPACE disaster_management WITH REPLICATION = { 'class': 'SimpleStrategy', 'replication_factor': 1 };
     USE disaster_management;
     SOURCE 'schema.cql';
     SOURCE 'seed_data.cql';
     ```
5. **Run the backend**: 
   ```bash
   uvicorn app.main:app --host 0.0.0.0 --port 5000 --reload
   ```

### Frontend Setup
1. **Navigate to the frontend directory**: 
   ```bash
   cd ../frontend
   ```
2. **Install dependencies**: 
   ```bash
   npm install
   ```
3. **Run the frontend**: 
   ```bash
   npm start
   ```

## Usage
1. **Access the application**: 
   Open your browser and go to `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend API.
2. **Report an Incident**: 
   Use the form on the frontend to report a new disaster incident.
3. **View Resources and Volunteers**: 
   Navigate to the relevant sections to view available resources and volunteer information.

## Testing
- Unit tests are provided in the `tests/` directory. Run them using: 
  ```bash
  pytest tests/
  ```

## Deployment
- For production deployment, consider using Docker for containerization and orchestration tools like Kubernetes for scaling.
- Ensure proper configurations for security, including authentication and authorization.

## Additional Notes
- Consider implementing a notification system to alert users about disasters and updates.
- Explore offline capabilities for users to report incidents when internet connectivity is lost.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
