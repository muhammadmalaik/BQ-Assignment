import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function incrementByFive() {
    setCount(count + 5);
  }

  function decrementByFive() {
    if (count >= 5) {
      setCount(count - 5);
    }
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div className="App bg-gradient-night fade-in">
      <h1 className="scale-up">React Counter App</h1>
      <h2 className="slide-up">Count: {count}</h2>

      <div className="buttons glass slide-up">
        <button className="btn btn-vip glow-hover" onClick={increment}>
          Increment ➕
        </button>
        <button
          className="btn btn-vip glow-hover"
          onClick={decrement}
          disabled={count === 0}
        >
          Decrement ➖
        </button>
        <button className="btn btn-vip glow-hover" onClick={incrementByFive}>
          Increment by 5 ⏫
        </button>
        <button
          className="btn btn-vip glow-hover"
          onClick={decrementByFive}
          disabled={count < 5}
        >
          Decrement by 5 ⏬
        </button>
        <button
          className="btn btn-vip glow-hover"
          onClick={resetCount}
          disabled={count === 0}
        >
          Reset 🔄
        </button>
      </div>
    </div>
  );
}

export default App;
