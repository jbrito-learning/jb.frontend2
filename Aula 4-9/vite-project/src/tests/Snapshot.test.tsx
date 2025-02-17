import { render } from "@testing-library/react";
import Contador from "../components/Contador";

test("Must match snapshot", () => {
  const { container } = render(<Contador />);
  expect(container).toMatchSnapshot();
});
