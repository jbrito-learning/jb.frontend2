import { useEffect } from "react";

const LifeCicleTest = () => {
  useEffect(() => {
    console.log("Component mounted");
    return () => console.log("Component unmounted");
  }, []);

  return <div>Hello world!</div>;
};

export default LifeCicleTest;
