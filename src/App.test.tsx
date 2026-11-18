import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio hero", async () => {
  render(<App />);
  const hero = await screen.findByText(/FastAPI, Spring Boot/);
  expect(hero).toBeInTheDocument();
});
