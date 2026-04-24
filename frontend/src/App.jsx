import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import NodeList from './components/NodeList';
import TaskLog from './components/TaskLog';

function App() {
  const [data, setData] = useState({ nodes: null, logs: [], stats: null });
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    let ws;
    let reconnectTimer;
    
    const connect = () => {
      ws = new WebSocket('ws://localhost:8000/ws');
  
      ws.onopen = () => setConnected(true);
      ws.onclose = () => {
        setConnected(false);
        reconnectTimer = setTimeout(connect, 3000);
      };
      
      ws.onmessage = (event) => {
        const payload = JSON.parse(event.data);
        setData(prev => {
          const newLogs = [...payload.logs, ...prev.logs].slice(0, 50);
          return {
            nodes: payload.nodes,
            logs: newLogs,
            stats: payload.stats
          };
        });
      };
    };
    
    connect();

    return () => {
      clearTimeout(reconnectTimer);
      if (ws) ws.close();
    };
  }, []);

  return (
    <div className="app-container">
      <header className="header">
        <h1>Intelligent Edge Orchestrator</h1>
        <p>AI-Powered Real-Time Workload Distribution</p>
      </header>

      <div className={`connection-status ${connected ? 'connected' : 'disconnected'}`}>
        {connected ? '● LIVE: Connected to AI Engine' : '○ DISCONNECTED: Trying to reach engine...'}
      </div>

      <div className="main-grid" style={{ alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <Dashboard stats={data.stats} />
          <NodeList nodes={data.nodes} />
        </div>
        <TaskLog logs={data.logs} />
      </div>
    </div>
  );
}

export default App;
