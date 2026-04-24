import asyncio
import random
import time

class NodeSimulator:
    def __init__(self):
        self.edge_nodes = [
            {"id": "Edge-1", "cpu": 80, "battery": 90, "latency": 5},
            {"id": "Edge-2", "cpu": 60, "battery": 50, "latency": 15},
            {"id": "Edge-3", "cpu": 40, "battery": 30, "latency": 25},
        ]
        self.cloud_node = {"id": "Cloud", "cpu": 100, "battery": 100, "latency": 120}

    def get_status(self):
        for node in self.edge_nodes:
            node["cpu"] = max(10, min(100, int(node["cpu"]) + random.randint(-5, 5)))
            node["battery"] = max(5, min(100, int(node["battery"]) - random.randint(0, 2)))
        return {
            "edge_nodes": self.edge_nodes,
            "cloud_node": self.cloud_node
        }

    def generate_task(self):
        task_types = ["SensorData", "ImageProcessing", "VideoAnalysis", "LogSync"]
        task_type = random.choice(task_types)
        
        complexity = random.randint(10, 100)
        if task_type in ["ImageProcessing", "VideoAnalysis"]:
            complexity += random.randint(50, 100)

        return {
            "id": f"task-{random.randint(1000, 9999)}",
            "type": task_type,
            "complexity": complexity,
            "timestamp": time.time()
        }

simulator = NodeSimulator()
