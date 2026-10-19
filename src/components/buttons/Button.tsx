import React from "react";

function Button() {
  return (
    <div style={{ background: "yellow", padding: "16px", display: "flex", flexDirection: "row", width: "500px", flexWrap: "wrap" }}>
      <h1 style={{ background: "brown", color: "white" }}>Ini adalah button</h1>
      <button>Button di dalam button</button>
    </div>
  );
}

export default Button;
