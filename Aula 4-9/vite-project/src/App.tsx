import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import DogsPage from "./pages/Dogs";
import DogsQuery from "./pages/DogsQuery";
import Clock from "./components/Clock";
import Counter from "./components/Counter";
import { NameProvider } from "./contexts/NameContext";

const NotFound = () => {
  return <div>Page Not Found</div>;
};

function App() {
  return (
    <NameProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />}>
          <Route path="me" element={<Clock />} />
          <Route path="you" element={<Counter />} />
        </Route>
        <Route path="/dogs" element={<DogsQuery />} />
        <Route path="/dogs/:breed" element={<DogsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </NameProvider>
  );
}

export default App;
