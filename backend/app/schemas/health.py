from pydantic import BaseModel
from datetime import datetime


class HealthCheck(BaseModel):
    service: str
    status: str
    timestamp: datetime
    version: str
    
    class Config:
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }
