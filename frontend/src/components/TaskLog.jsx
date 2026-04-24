import React from 'react';

function TaskLog({ logs }) {
  
  const getIcon = (type) => {
    switch(type) {
      case 'SensorData': return '📡';
      case 'ImageProcessing': return '🖼️';
      case 'VideoAnalysis': return '🎥';
      case 'LogSync': return '🔄';
      default: return '📦';
    }
  }

  return (
    <div className="glass-panel" style={{ height: 'calc(100vh - 200px)', minHeight: '500px', display: 'flex', flexDirection: 'column' }}>
      <h2 className="panel-title">
        <span>📋</span> Orchestrator Log
      </h2>
      
      <div className="task-log-container">
        {logs.length === 0 && <p style={{color: 'var(--text-secondary)'}}>Awaiting tasks...</p>}
        
        {logs.map((log, i) => (
          <div key={i} className={`task-entry ${log.target_type.toLowerCase()}`}>
            <div className="task-icon">
              {getIcon(log.task_type)}
            </div>
            <div className="task-details">
              <div className="task-name">{log.task_type}</div>
              <div className="task-meta">
                ID: {log.task_id} | Complexity: {log.complexity}
              </div>
            </div>
            <div className="task-route">
              <span className={`badge ${log.target_type.toLowerCase()}`}>
                {log.target_type} ({log.target})
              </span>
              <span className="task-meta" style={{marginTop: '4px'}}>
                ~{log.estimated_latency.toFixed(1)}ms
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskLog;
