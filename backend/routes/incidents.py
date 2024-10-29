from fastapi import APIRouter, HTTPException
from app.models.incident import Incident
from app.services.cassandra_service import cassandra_session

router = APIRouter()

@router.post("/")
async def report_incident(incident: Incident):
    session = cassandra_session()
    query = """
        INSERT INTO incidents (id, type, severity, location, timestamp) 
        VALUES (uuid(), %s, %s, %s, toTimestamp(now()))
    """
    session.execute(query, (incident.type, incident.severity, incident.location))
    return {"message": "Incident reported successfully"}

@router.get("/")
async def get_all_incidents():
    session = cassandra_session()
    rows = session.execute("SELECT * FROM incidents")
    return [dict(row) for row in rows]
