import React from 'react';

function Dashboard({ stats }) {
  if (!stats) return <div className="glass-panel">Loading AI Metrics...</div>;

  const edgePerc = stats.total_tasks > 0 
    ? Math.round((stats.edge_processed / stats.total_tasks) * 100) 
    : 0;
    
  return (
    <div className="glass-panel">
      <h2 className="panel-title">
        <span>🧠</span> AI Orchestration Logic
      </h2>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">{stats.total_tasks}</div>
          <div className="stat-label">Total Tasks</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-value" style={{color: 'var(--success)'}}>
            {edgePerc}%
          </div>
          <div className="stat-label">Edge Allocation</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-value">
            {stats.average_latency.toFixed(1)}ms
          </div>
          <div className="stat-label">Avg Latency</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-value" style={{color: 'var(--accent-cyan)'}}>
            {stats.cloud_processed}
          </div>
          <div className="stat-label">Cloud Offloaded</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
