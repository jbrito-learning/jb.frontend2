/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";

export const NameContext = createContext({ name: "" });

export const NameProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NameContext.Provider value={{ name: "Bola de berlim" }}>
      {children}
    </NameContext.Provider>
  );
};

export const TemaContext = createContext({
  tema: "claro",
  setTema: () => {},
});
