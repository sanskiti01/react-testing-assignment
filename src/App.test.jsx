import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App Component", () => {

  it("renders heading", () => {
    render(<App />);
    expect(screen.getByText(/user settings/i)).toBeInTheDocument();
  });

  it("renders toggle button", () => {
    render(<App />);
    expect(
      screen.getByRole("button", { name: /toggle dark mode/i })
    ).toBeInTheDocument();
  });

  it("renders input field", () => {
    render(<App />);
    expect(
      screen.getByPlaceholderText(/enter username/i)
    ).toBeInTheDocument();
  });

});