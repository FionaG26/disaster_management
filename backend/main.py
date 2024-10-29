from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Serve static files from the "frontend/public" directory
app.mount("/static", StaticFiles(directory="frontend/public"), name="static")

@app.get("/")
def read_root():
    return {"message": "Welcome to the Disaster Management System!"}

# Import your other routes
from app.routes import incidents, resources, volunteers
app.include_router(incidents.router)
app.include_router(resources.router)
app.include_router(volunteers.router)

