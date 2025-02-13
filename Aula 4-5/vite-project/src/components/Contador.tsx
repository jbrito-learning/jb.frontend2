import { useState } from "react";

const Contador = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div>Counter</div>
      <div>Valor: {counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
    </div>
  );
};

export default Contador;
