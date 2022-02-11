import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
global.ResizeObserver = require("resize-observer-polyfill");

it("shows the attribute", () => {
  render(<App />);
  const inputAttributeEl = screen.getByTestId("attribute-submit");
  expect(inputAttributeEl).toBeInTheDocument();
});

it("allows you to submit an attribute and will then show the choice input and also show the inputted attribute on the screen", () => {
  render(<App />);
  const inputAttributeEl = screen.getByTestId("attribute-submit");
  expect(inputAttributeEl).toHaveAttribute("type", "text");
  userEvent.type(inputAttributeEl, "taste");
  fireEvent.submit(screen.getByPlaceholderText("Attribute name"));
  expect(screen.getByText(/choice/i)).toBeInTheDocument();
  expect(screen.getByText(/taste/i)).toBeInTheDocument();
});
