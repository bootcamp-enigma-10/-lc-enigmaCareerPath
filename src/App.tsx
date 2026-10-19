import "./App.css";
import Counter from "./components/pages/Counter";
import TodoList from "./components/pages/TodoList";

// ada 3 cara styling
// 1. inline styling
// 2. internal styling
// 3. external styling (css biasa dan module css)

function App() {
  return (
    <div className="flex flex-col">
      <Counter />
      <TodoList />
    </div>
  );
}

export default App;
