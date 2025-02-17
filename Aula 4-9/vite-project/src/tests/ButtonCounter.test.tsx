import { render, screen, fireEvent } from "@testing-library/react";
import ButtonCounter, { incrementValue } from "../components/ButtonCounter";
import "@testing-library/jest-dom";

describe("ButtonCounter Test", () => {
  test("incrementValue returns correctly", () => {
    expect(incrementValue(0)).toBe(1);
    expect(incrementValue(5)).toBe(6);
    expect(incrementValue(-1)).toBe(0);
  });

  test("Render Component", () => {
    render(<ButtonCounter />);
    expect(screen.getByTestId("counter-button")).toBeInTheDocument();
  });

  test("Text updates on click", () => {
    render(<ButtonCounter />);

    const button = screen.getByTestId("counter-button");

    expect(button).toHaveTextContent("Clicked 0 times");

    fireEvent.click(button);
    expect(button).toHaveTextContent("Clicked 1 times");

    fireEvent.click(button);
    expect(button).toHaveTextContent("Clicked 2 times");
  });
});
