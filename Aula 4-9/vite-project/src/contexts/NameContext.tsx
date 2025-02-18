/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";

export const NameContext = createContext({ name: "" });

export const NameProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NameContext.Provider value={{ name: "React" }}>
      {children}
    </NameContext.Provider>
  );
};
