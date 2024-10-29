from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import os

app = FastAPI()

# Set the path to the frontend/public directory
frontend_public_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '../frontend/public')

# Serve static files from the "frontend/public" directory
app.mount("/static", StaticFiles(directory=frontend_public_path), name="static")

@app.get("/")
def read_root():
    return {"message": "Welcome to the Disaster Management System!"}

# Import and include the routers
from routes import incidents, resources, volunteers
app.include_router(incidents.router, prefix="/incidents", tags=["Incidents"])
app.include_router(resources.router, prefix="/resources", tags=["Resources"])
app.include_router(volunteers.router, prefix="/volunteers", tags=["Volunteers"])
