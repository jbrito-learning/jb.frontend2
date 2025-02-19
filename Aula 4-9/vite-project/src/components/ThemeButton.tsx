import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
export const ThemeButton = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <button
      onClick={() =>
        themeContext?.setTheme(
          themeContext?.theme === "light" ? "dark" : "light"
        )
      }
    >
      Toggle Theme
    </button>
  );
};
