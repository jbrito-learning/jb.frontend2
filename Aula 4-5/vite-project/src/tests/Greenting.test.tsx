import { Greeting } from "../components/Greeting2";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Component render", () => {
  render(<Greeting name="Ana" />);
  expect(screen.getByTestId("test-subject")).toBeInTheDocument();
});
