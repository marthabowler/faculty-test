import {
  render,
  fireEvent,
  screen,
  getAllByText,
} from "@testing-library/react";
import App from "./App";
global.ResizeObserver = require("resize-observer-polyfill");
import userEvent from "@testing-library/user-event";

describe("<App />", () => {
  const { getByPlaceholderText, getByText, getAllByText } = render(<App />);
  it("shows the choice input ", () => {
    const inputAttributeEl = screen.getByTestId("attribute-submit");
    expect(inputAttributeEl).toHaveAttribute("type", "text");
    userEvent.type(inputAttributeEl, "taste");
    fireEvent.submit(getByPlaceholderText("Attribute name"));
    const inputOptionEl = screen.getByTestId("option-input");
    expect(inputOptionEl).toBeInTheDocument();
  });

  it("allows you to submit a choice which will then show with the attribute and will be the winner", () => {
    render(<App />);
    const inputAttributeEl = screen.getByTestId("attribute-submit");
    userEvent.type(inputAttributeEl, "taste");
    fireEvent.submit(getByPlaceholderText("Attribute name"));
    const inputOptionEl = screen.getByTestId("option-input");
    expect(inputOptionEl).toBeInTheDocument();
    expect(inputOptionEl).toHaveAttribute("type", "text");
    userEvent.type(inputOptionEl, "chicken");
    fireEvent.submit(getByPlaceholderText("Option name"));
    expect(getAllByText(/chicken/)).toHaveLength(2);
    expect(getAllByText(/taste/i)).toHaveLength(2);
  });
});
