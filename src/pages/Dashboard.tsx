import React from "react";
import Button from "../components/Button";

function Dashboard() {
  return (
    <div>
      <h1 style={{ background: "grey" }}>Ini adalah dashboard</h1>
      <h1 className="text-3xl font-bold underline bg-amber-600 text-emerald-950">Hello world!</h1>
      <Button />
    </div>
  );
}

export default Dashboard;
