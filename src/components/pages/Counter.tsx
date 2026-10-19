import { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(0);

  function increase() {
    setCounter((counter) => counter + 1);
  }

  function decrease() {
    setCounter(counter - 1);
  }
  return (
    <div className="bg-red-950 text-4xl p-10 flex-col gap-4 rounded-md mx-auto mt-4">
      <div className="bg-lime-300 rounded-md text-center py-8 mb-4">
        <h1>{counter}</h1>
      </div>
      <div className="flex gap-4 mx-4">
        <button className="bg-amber-100 p-4 rounded-md" onClick={increase}>
          +
        </button>
        <button className="bg-amber-100 p-4 rounded-md" onClick={decrease}>
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
