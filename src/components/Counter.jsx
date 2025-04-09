import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const increaseValue = (num) => {
    setCount(count + num);
  };
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => increaseValue(5)}>Increase 5</button>
    </div>
  );
};

export default Counter;
