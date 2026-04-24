import asyncio
import json
from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from app.simulator import simulator
from app.orchestrator import orchestrator

app = FastAPI(title="AI Edge Orchestrator API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "AI Edge Orchestrator Running"}

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    import random
    try:
        while True:
            # Send multiple tasks per interval for more visual effect
            tasks_to_process = random.randint(1, 4)
            
            logs = []
            for _ in range(tasks_to_process):
                 task = simulator.generate_task()
                 decision = orchestrator.route_task(task)
                 logs.append(decision)
                 
            payload = {
                "nodes": simulator.get_status(),
                "logs": logs,
                "stats": orchestrator.stats
            }
            
            await websocket.send_text(json.dumps(payload))
            await asyncio.sleep(2)
    except Exception as e:
        print(f"WebSocket Error: {e}")
