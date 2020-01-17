import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders google link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/google/i);
  expect(linkElement).toBeInTheDocument();
});
