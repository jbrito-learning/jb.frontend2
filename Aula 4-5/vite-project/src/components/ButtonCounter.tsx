import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const incrementValue = (num: number) => num + 1;

const ButtonCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount(incrementValue(count))}
      data-testid="counter-button"
    >
      Clicked {count} times
    </button>
  );
};

export default ButtonCounter;
