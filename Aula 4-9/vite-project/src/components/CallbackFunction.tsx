import { useState, useCallback } from "react";

const ChildComponent = ({ execute }: { execute: () => void }) => {
  return <button onClick={execute}>Execute</button>;
};

const ParentComponent = () => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => setCounter((e) => e + 1), []);

  return (
    <div>
      <p>Counter: {counter}</p>
      <ChildComponent execute={increment} />
    </div>
  );
};

export default ParentComponent;
