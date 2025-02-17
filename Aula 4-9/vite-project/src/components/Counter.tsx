import { useState, useEffect } from "react";

const Counter = () => {
  const [user, setUser] = useState({ name: "Ana", age: 0 });
  const [showUser, setShowUser] = useState(false);

  function incrementar() {
    setUser({ ...user, age: user.age + 1 });
  }

  useEffect(() => {
    console.log("Idade é: " + user.age);
  }, [user]);

  return (
    <div>
      {showUser ? (
        <>
          <div style={{ fontSize: "50px" }}>Nome: {user.name}</div>
          <div style={{ fontSize: "50px" }}>Age: {user.age}</div>
          <button onClick={incrementar}>Incrementar</button>
        </>
      ) : null}
      <button onClick={() => setShowUser(!showUser)}>
        {showUser ? "Hide User" : "Show User"}
      </button>
    </div>
  );
};

export default Counter;
