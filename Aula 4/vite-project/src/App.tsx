import "./App.css";
import { Card } from "./components/Card";

const data = {
  title: "Pikachu",
  description: "Rato electrico",
  buttonText: "Go to pokedex",
};

function App() {
  return (
    <>
      <Card data={data} />
    </>
  );
}

export default App;
