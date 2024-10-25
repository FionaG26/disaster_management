from fastapi import FastAPI
from app.routes import incidents, resources, volunteers

app = FastAPI()

# Include routers
app.include_router(incidents.router, prefix="/api/incidents")
app.include_router(resources.router, prefix="/api/resources")
app.include_router(volunteers.router, prefix="/api/volunteers")
