import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    });

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <div style={{ fontSize: "50px" }}>{time}</div>
    </div>
  );
};

export default Clock;
