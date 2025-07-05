from fastapi import APIRouter
from datetime import datetime
from app.schemas.health import HealthCheck

router = APIRouter()


@router.get("/health", response_model=HealthCheck, tags=["health"])
async def health_check():
    """
    Health check endpoint to verify the API is running.
    """
    return HealthCheck(
        service="AI Bhau Basic API",
        status="healthy",
        timestamp=datetime.utcnow(),
        version="1.0.0"
    )
