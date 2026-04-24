import React from 'react';

function NodeList({ nodes }) {
  if (!nodes) return <div className="glass-panel">Loading Distributed Nodes...</div>;

  const renderProgress = (val, color) => (
    <div className="progress-container">
      <div 
        className="progress-bar" 
        style={{ width: `${val}%`, backgroundColor: color }}
      />
    </div>
  );

  return (
    <div className="glass-panel">
      <h2 className="panel-title">
        <span>⚡</span> Live Edge Ecosystem
      </h2>
      
      <div className="node-list">
        {nodes.edge_nodes.map(node => (
          <div key={node.id} className="node-item edge">
            <div className="node-info">
              <h3>{node.id}</h3>
              <div className="node-metrics">
                <div className="metric">
                  Lat: {node.latency}ms
                </div>
              </div>
            </div>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.4rem'}}>
               <div className="metric">
                  <span style={{width: '30px', fontSize:'0.8rem'}}>CPU</span>
                  {renderProgress(node.cpu, 'var(--accent-purple)')}
               </div>
               <div className="metric">
                  <span style={{width: '30px', fontSize:'0.8rem'}}>BAT</span>
                  {renderProgress(node.battery, node.battery < 20 ? 'var(--danger)' : 'var(--success)')}
               </div>
            </div>
          </div>
        ))}

        <div className="node-item cloud" style={{ marginTop: '1rem' }}>
            <div className="node-info">
              <h3>{nodes.cloud_node.id} Cluster</h3>
              <div className="node-metrics">
                 Fallback / Heavy Workloads
              </div>
            </div>
            <div className="node-metrics" style={{color: 'var(--accent-cyan)'}}>
              Lat: {nodes.cloud_node.latency}ms
            </div>
        </div>
      </div>
    </div>
  );
}

export default NodeList;
