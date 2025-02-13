import { screen, render, fireEvent } from "@testing-library/react";
import Contador from "../components/Contador";
import "@testing-library/jest-dom";

test("Button clicked", () => {
  render(<Contador />);

  const button = screen.getByText("Incrementar");
  fireEvent.click(button);

  expect(screen.getByText("Valor: 1")).toBeInTheDocument();
});
