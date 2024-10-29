from fastapi import FastAPI
from routes import incidents, resources, volunteers
from starlette.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os

app = FastAPI()

# Include routers
app.include_router(incidents.router, prefix="/incidents", tags=["incidents"])
app.include_router(resources.router, prefix="/resources", tags=["resources"])
app.include_router(volunteers.router, prefix="/volunteers", tags=["volunteers"])

# Set paths to the static directories
frontend_public_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '../frontend/public')
src_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '../src')

# Serve static files from frontend/public directory
app.mount("/public", StaticFiles(directory=frontend_public_path), name="public")

# Serve the main index.html file
@app.get("/")
async def read_index():
    return FileResponse(os.path.join(frontend_public_path, 'index.html'))

# Serve JavaScript files from the src directory
@app.get("/src/{file_name:path}")
async def get_js(file_name: str):
    return FileResponse(os.path.join(src_path, file_name))

