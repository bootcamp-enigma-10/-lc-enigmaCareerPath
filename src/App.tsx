import type { CSSProperties } from "react";
import "./App.css";
import button from "./App.module.css";
import Dashboard from "./pages/Dashboard";

// ada 3 cara styling
// 1. inline styling
// 2. internal styling
// 3. external styling (css biasa dan module css)

function App() {
  return (
    <div id="parent">
      <div>
        {/* 1. inline style */}
        <h1 className="bg-red-600 text-yellow-800">Belajar React TS</h1>
      </div>
      <div>
        <h1 style={headerStyle}>Belajar React TS</h1>
      </div>
      <div>
        <h1 style={styles.title}>Belajar React TS</h1>
      </div>
      <div>
        <h1 style={styles.paragraph}>Belajar React TS</h1>
      </div>
      <button className={`${button.button}`}>Click me!</button>
      <Dashboard />
      <Dashboard />
    </div>
  );
}

const headerStyle: CSSProperties = {
  background: "green",
  color: "pink",
};

const styles: Record<string, CSSProperties> = {
  title: {
    background: "black",
    color: "yellow",
  },
  paragraph: {
    background: "black",
    color: "pink",
  },
};

export default App;
