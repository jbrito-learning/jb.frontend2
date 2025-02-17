import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>Click</button>
    </div>
  );
};

export default FocusInput;
