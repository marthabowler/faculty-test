import { render, screen } from "@testing-library/react";
import App from "./App";
global.ResizeObserver = require("resize-observer-polyfill");

test("renders title", () => {
  render(<App />);

  const linkElement = screen.getByText(/Decision making time/i);

  expect(linkElement).toBeInTheDocument();
});
