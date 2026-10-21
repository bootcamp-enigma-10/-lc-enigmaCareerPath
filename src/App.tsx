import "./App.css";
import Test from "./components/pages/Test";

// ada 3 cara styling
// 1. inline styling
// 2. internal styling
// 3. external styling (css biasa dan module css)

function App() {
  return (
    <div className="flex flex-col">
      <Test />
    </div>
  );
}

export default App;
