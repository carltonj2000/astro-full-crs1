import { useState } from "react";

const Counter = () => {
  const [count, countSet] = useState(0);
  return <button onClick={() => countSet(count + 1)}>Counter ({count})</button>;
};

export default Counter;
