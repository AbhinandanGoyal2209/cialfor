from app.simulator import simulator

class AIOrchestrator:
    def __init__(self):
        self.stats = {
            "total_tasks": 0,
            "edge_processed": 0,
            "cloud_processed": 0,
            "average_latency": 0.0
        }

    def route_task(self, task):
        self.stats["total_tasks"] += 1
        
        status = simulator.get_status()
        edge_nodes = status["edge_nodes"]
        cloud_node = status["cloud_node"]

        best_edge = None
        best_score = -9999
        
        if task["complexity"] < 120:
            for node in edge_nodes:
                if node["battery"] > 15:
                    score = node["cpu"] - node["latency"]
                    if score > best_score:
                        best_score = score
                        best_edge = node
                        
        decision = {}
        if best_edge:
            decision = {
                "task_id": task["id"],
                "task_type": task["type"],
                "complexity": task["complexity"],
                "target": best_edge["id"],
                "target_type": "Edge",
                "estimated_latency": best_edge["latency"] + task["complexity"]/10.0
            }
            self.stats["edge_processed"] += 1
            best_edge["cpu"] = max(10, best_edge["cpu"] - task["complexity"] / 10.0)
            best_edge["battery"] = max(5, best_edge["battery"] - task["complexity"] / 40.0)
        else:
             decision = {
                "task_id": task["id"],
                "task_type": task["type"],
                "complexity": task["complexity"],
                "target": cloud_node["id"],
                "target_type": "Cloud",
                "estimated_latency": cloud_node["latency"] + task["complexity"]/50.0 
            }
             self.stats["cloud_processed"] += 1

        self.stats["average_latency"] = (self.stats["average_latency"] * (self.stats["total_tasks"] - 1) + decision["estimated_latency"]) / self.stats["total_tasks"]

        return decision

orchestrator = AIOrchestrator()
