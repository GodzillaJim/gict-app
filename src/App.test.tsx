import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Some random tests", () => {
  render(<App />);
  test("Check full name", () => {
    const fullNameLabel = screen.getByText("Full Name");
    expect(fullNameLabel).toBeInTheDocument();
  });

  test("Check Email", () => {
    const emailLabel = screen.getByText("Email");
    expect(emailLabel).toBeInTheDocument();
  });

  test("Check phone", () => {
    const phoneLabel = screen.getByText("Phone");
    expect(phoneLabel).toBeInTheDocument();
  });

  test("Check Address", () => {
    const addressLabel = screen.getByText("Address");
    expect(addressLabel).toBeInTheDocument();
  });
});
