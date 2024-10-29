from pydantic import BaseModel

class Resource(BaseModel):
    type: str
    quantity: int
    location: str
