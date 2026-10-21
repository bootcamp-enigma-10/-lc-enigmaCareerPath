import { useState } from "react";
function Test() {
  const [items, setItems] = useState(["A", "B", "C"]);

  return (
    <div>
      <button onClick={() => setItems(["X", ...items])}>Prepend X</button>
      {items.map((item, i) => (
        <div key={i}>
          {item} <input placeholder="type here" />
        </div>
      ))}
    </div>
  );
}
