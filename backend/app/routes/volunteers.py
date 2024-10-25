from fastapi import APIRouter
from app.models.volunteer import Volunteer
from app.services.cassandra_service import cassandra_session

router = APIRouter()

@router.get("/")
async def get_volunteers():
    session = cassandra_session()
    rows = session.execute("SELECT * FROM volunteers")
    return [dict(row) for row in rows]
