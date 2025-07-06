Frontend: Vite + React + TailwindCSS
Backend: FastAPI + uv + SQLModel + SQLite + Alembic

Frontend:
- uses react-router-dom for routing
- basic components for header, footer, layout, home, about, contact, authentication
- uses clerk for authentication
- uses tailwindcss for styling

To run the frontend: (node version 24.3.0)
cd frontend
npm install
npm run dev

To run the backend: (python version 3.11)
uv sync (installs the dependencies if .lock file is present, faster) OR uv install
uv run alembic upgrade head
uv run uvicorn main:app --reload --host 0.0.0.0 --port 8000 OR uv run python main.py
OR first activate the virtual environment: uv venv, then run the above commands without uv run.