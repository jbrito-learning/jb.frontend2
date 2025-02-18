import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import DogsPage from "./pages/Dogs";
import DogsQuery from "./pages/DogsQuery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/dogs" element={<DogsQuery />} />
      <Route path="/dogs/:breed" element={<DogsPage />} />
    </Routes>
  );
}

export default App;
