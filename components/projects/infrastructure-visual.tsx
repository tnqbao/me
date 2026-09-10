import { Boxes, ChartNoAxesCombined, Database, GitBranch, Server } from "lucide-react";

export function InfrastructureVisual() {
  return (
    <div className="infrastructure-visual" aria-label="Gauas Cloud platform areas">
      <div className="visual-topbar">
        <span className="visual-logo">GAUAS / CLOUD</span>
        <span className="visual-status"><i /> cluster connected</span>
      </div>
      <div className="visual-body">
        <div className="visual-rail" aria-hidden="true">
          <Server size={17} />
          <Boxes size={17} />
          <Database size={17} />
          <GitBranch size={17} />
          <ChartNoAxesCombined size={17} />
        </div>
        <div className="visual-content">
          <div className="visual-heading">
            <span>platform overview</span>
            <strong>Self-hosted infrastructure</strong>
          </div>
          <div className="visual-grid">
            <div className="visual-module visual-module-wide">
              <span>Kubernetes</span>
              <strong>Container orchestration</strong>
              <div className="node-row" aria-hidden="true"><i /><i /><i /></div>
            </div>
            <div className="visual-module">
              <span>Compute</span>
              <strong>Services</strong>
              <small>Golang</small>
            </div>
            <div className="visual-module">
              <span>Storage</span>
              <strong>Objects</strong>
              <small>MinIO</small>
            </div>
            <div className="visual-module visual-module-wide visual-flow">
              <span>Delivery</span>
              <strong>Git → Argo CD → Kubernetes</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
