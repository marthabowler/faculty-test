import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
global.ResizeObserver = require("resize-observer-polyfill");
import userEvent from "@testing-library/user-event";

describe("<App />", () => {
  const { getByPlaceholderText, getByText } = render(<App />);
  it("shows the attribute ", () => {
    const inputAttributeEl = screen.getByTestId("attribute-submit");
    expect(inputAttributeEl).toBeInTheDocument();
  });

  it("allows you to submit an attribute and will then show the choice input and also show the inputted attribute on the screen", () => {
    render(<App />);
    const inputAttributeEl = screen.getByTestId("attribute-submit");
    expect(inputAttributeEl).toHaveAttribute("type", "text");
    userEvent.type(inputAttributeEl, "taste");
    fireEvent.submit(getByPlaceholderText("Attribute name"));
    expect(getByText(/choice/i)).toBeInTheDocument();
    expect(getByText(/taste/i)).toBeInTheDocument();
  });
});
