from pydantic import BaseModel

class Incident(BaseModel):
    type: str
    severity: str
    location: str
