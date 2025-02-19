import { Outlet } from "react-router-dom";
import { ThemeButton } from "../components/ThemeButton";
import { ThemeProvider } from "../contexts/ThemeContext";

const AboutPage = () => {
  return (
    <ThemeProvider>
      <Outlet />
      <h1>About me</h1>
      <ThemeButton />
    </ThemeProvider>
  );
};

export default AboutPage;
