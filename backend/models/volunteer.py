from pydantic import BaseModel

class Volunteer(BaseModel):
    name: str
    contact: str
    skills: str
    location: str
