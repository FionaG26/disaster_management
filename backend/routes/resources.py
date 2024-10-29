from fastapi import APIRouter
from models.resource import Resource
from services.cassandra_service import cassandra_session

router = APIRouter()

@router.get("/")
async def get_resources():
    session = cassandra_session()
    rows = session.execute("SELECT * FROM resources")
    return [dict(row) for row in rows]
