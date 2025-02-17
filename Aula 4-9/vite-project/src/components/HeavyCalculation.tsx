import { useMemo, useState } from "react";

const HeavyCalculation = () => {
  const [counter, setCounter] = useState(1);

  const heavyNumber = useMemo(() => {
    console.log("Calculating...");
    return counter * 2;
  }, [counter]);

  return (
    <div>
      <div>Resultado: {heavyNumber}</div>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
};

export default HeavyCalculation;
