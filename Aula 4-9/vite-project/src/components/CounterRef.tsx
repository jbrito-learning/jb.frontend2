import { useState, useEffect, useRef } from "react";

const CounterRef = () => {
  const [counter, setCounter] = useState(0);
  const previousCounter = useRef(1);

  useEffect(() => {
    console.log("current counter:", counter);
    previousCounter.current = counter;
  }, [counter]);

  return (
    <div>
      <h2>Atual: {counter}</h2>
      <h2>Anterior: {previousCounter.current}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
};

export default CounterRef;
