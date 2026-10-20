import { useEffect, useMemo, useRef, useState } from "react";

function complexCalculation(a: number, b: number): number {
  return a + b;
}

function Counter() {
  const [counter, setCounter] = useState(0);
  const [hitungan, setHitungan] = useState(1);
  const countRender = useRef(0);

  // 1. useEffect versi 1 tanpa deps
  useEffect(() => console.log("use effect dijalankan"));

  // 2. useEffect versi 2
  useEffect(() => console.log("use effect versi 2 dijalankan"), []);

  // 3. useEffect versi 3
  useEffect(() => console.log("use effect versi 3 dijalankan"), [counter, hitungan]);

  // 4. handle counting render
  function handleCountingRender() {
    countRender.current += 1;
    alert("sudah " + countRender.current + " kali render");
  }

  function increaseHitung() {
    setHitungan((hitung) => hitung + 1);
  }

  // 5. useMemo
  const resultCalculate = useMemo(() => complexCalculation(counter, 3), [counter]);

  function increase() {
    setCounter((counter) => counter + 1);
  }

  function decrease() {
    if (counter <= 0) return;

    setCounter(counter - 1);
  }

  function reset() {
    setCounter(0);
  }

  return (
    <div className="bg-red-950 text-4xl p-10 flex-col gap-4 rounded-md mx-auto mt-4">
      <div className="bg-lime-300 rounded-md text-center py-8 mb-4">
        <h1>{counter}</h1>
      </div>
      <div className="bg-lime-300 rounded-md text-center py-8 mb-4">
        <h1>{hitungan}</h1>
      </div>

      <div className="bg-lime-300 rounded-md text-center py-8 mb-4">
        <h1>result calculate : {resultCalculate}</h1>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="bg-amber-100 p-4 rounded-md" onClick={increase}>
          +
        </button>
        <button className="bg-amber-100 p-4 rounded-md" onClick={decrease}>
          -
        </button>
        <button className="bg-amber-100 p-4 rounded-md col-span-2" onClick={reset}>
          RESET
        </button>
        <button className="bg-amber-100 p-4 rounded-md col-span-2" onClick={handleCountingRender}>
          add
        </button>
      </div>
    </div>
  );
}

export default Counter;
