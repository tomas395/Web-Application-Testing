import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";

test("renders balls button", () => {
  const { getByText } = render(<Dashboard />);
  const buttonElement = getByText(/add balls/i);
  expect(buttonElement).toBeInTheDocument();
});
