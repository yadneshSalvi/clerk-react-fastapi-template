from fastapi import APIRouter
from app.api.v1.endpoints import health

api_router = APIRouter()

# Include all endpoint routers
api_router.include_router(health.router, tags=["health"])
