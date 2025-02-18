import { useState, useEffect } from "react";
import { useContext } from "react";
import { NameContext } from "../contexts/NameContext";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const { name } = useContext(NameContext);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    });

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <div style={{ fontSize: "50px" }}>{time}</div>
      <div>Name: {name}</div>
    </div>
  );
};

export default Clock;
