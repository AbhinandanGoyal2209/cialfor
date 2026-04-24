# Installation & Startup Guide

## Prerequisites
- **Node.js**: (v16+ recommended)
- **Python**: (v3.9+ recommended)

---

## 1. Starting the Python Backend

The backend simulates the edge nodes and runs the AI orchestration logic. 
Open a terminal and navigate to the `backend` directory:

```bash
cd backend
```

(Optional) Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

Install the required dependencies:
```bash
pip install -r requirements.txt
```

Launch the FastAPI application using Uvicorn:
```bash
uvicorn app.main:app --reload
```

The WebSockets server will start running on `ws://localhost:8000/ws`.

---

## 2. Starting the React Frontend

The frontend provides the 3D Glassmorphism dashboard to monitor real-time metrics.
Open a new terminal window and navigate to the `frontend` directory:

```bash
cd frontend
```

Install Node modules:
```bash
npm install
```

Start the Vite development server:
```bash
npm run dev
```

The application will start, usually accessible at [`http://localhost:5173`](http://localhost:5173). Open this link in your browser to see the real-time AI Orchestrator simulation in action!
