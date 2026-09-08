import { DecryptReveal } from "@/components/canvasui/DecryptReveal";

function Lgima() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <DecryptReveal
        radius={400}
        color="#4ade80"
        cell={10}
        style={{ width: "100%", height: "100%" }}
      >
        <div style={{ padding: 40 }}>
          <h1>Classified dossier</h1>
          <p>Clearance level 5 — eyes only</p>
        </div>
      </DecryptReveal>
    </div>
  );
}

export default Lgima;