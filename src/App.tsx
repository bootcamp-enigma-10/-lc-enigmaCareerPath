import "./App.css";
import Counter from "./components/pages/Counter";

// ada 3 cara styling
// 1. inline styling
// 2. internal styling
// 3. external styling (css biasa dan module css)

function App() {
  console.log("app.tsx has been rendered");
  return (
    <div id="parent">
      <Counter />
    </div>
  );
}

export default App;
