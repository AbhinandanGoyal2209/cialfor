# AI-Based Intelligent Edge Computing Orchestrator

## Overview
With the rapid growth of IoT devices, processing data closer to the source (Edge Computing) has become essential to reduce latency and conserve bandwidth. However, dynamically allocating workloads across distributed Edge nodes and Cloud infrastructure requires intelligent routing. 

This simulated proof-of-concept demonstrates an **AI-driven orchestration system** that dynamically routing tasks to optimal processing nodes to balance latency, performance, energy consumption, and reliability.

![AI Edge Dashboard Demonstrating Orchestrator Log]
<img width="1761" height="876" alt="image" src="https://github.com/user-attachments/assets/388c0cff-9681-4dc5-adf6-475df40e4137" />


## Key Features
- **Intelligent Workload Routing:** Simulates heuristics to predict demand and allocate tasks dynamically based on complexity, current node CPU capacity, battery life, and network latency.
- **Dynamic Resource Monitoring:** Tracks simulated resources in real-time, penalizing CPU and battery usage incrementally to ensure load distribution across the edge mesh.
- **Hybrid Edge/Cloud Architecture:** Heavy and compute-intensive tasks are immediately offloaded to the Cloud, preserving critical edge battery and preventing local overload.
- **Glassmorphism Metrics Dashboard:** A premium, fully responsive React interface tracking system metrics, connection health, and real-time task allocations.

## Tech Stack
- **Backend:** Python + FastAPI + WebSockets (for simulation logic and real-time event streaming)
- **Frontend:** React + Vite + Vanilla CSS (for layout and Glassmorphism design system)

## Getting Started

### 1. Start the Python Backend Core
The backend hosts the Edge Simulator and AI Routing logic. Open a terminal and run:
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### 2. Start the React Frontend Dashboard
The frontend displays the live UI over WebSockets. Open a separate terminal and run:
```bash
cd frontend
npm install
npm run dev
```

For more detailed deployment notes, see the `INSTALL.md` file.
