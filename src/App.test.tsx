import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("render learn react link", () => {
  render(<App />);
  expect(screen).toBeTruthy();
});
