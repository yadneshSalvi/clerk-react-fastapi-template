from typing import Any, Dict, Optional
from pydantic import BaseSettings


class Settings(BaseSettings):
    PROJECT_NAME: str = "AI Bhau Basic API"
    VERSION: str = "1.0.0"
    DESCRIPTION: str = "A basic FastAPI application for AI Bhau project"
    API_V1_STR: str = "/api/v1"
    
    # Database
    DATABASE_URL: Optional[str] = None
    
    # Security
    SECRET_KEY: str = "your-secret-key-here"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    # Environment
    ENVIRONMENT: str = "development"
    DEBUG: bool = True
    
    class Config:
        case_sensitive = True
        env_file = ".env"


settings = Settings()
