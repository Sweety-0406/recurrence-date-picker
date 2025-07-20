import React from "react";
import RecurrenceOptions from "@/app/components/RecurrenceOptions";
import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect } from "vitest";

test("renders DAILY button and selects it", () => {
  render(<RecurrenceOptions />);
  const dailyBtn = screen.getByText("DAILY");
  expect(dailyBtn).toBeInTheDocument();
  fireEvent.click(dailyBtn);
  expect(screen.getByText("DAILY")).toBeInTheDocument();
});

test("renders WEEKLY button and selects it", () => {
  render(<RecurrenceOptions />);
  const weeklyBtn = screen.getByText("WEEKLY");
  expect(weeklyBtn).toBeInTheDocument();
  fireEvent.click(weeklyBtn);
  expect(screen.getByText("WEEKLY")).toBeInTheDocument();
});

test("renders MONTHLY button and selects it", () => {
  render(<RecurrenceOptions />);
  const monthlyBtn = screen.getByText("MONTHLY");
  expect(monthlyBtn).toBeInTheDocument();
  fireEvent.click(monthlyBtn);
  expect(screen.getByText("MONTHLY")).toBeInTheDocument();
});

test("renders YEARLY button and selects it", () => {
  render(<RecurrenceOptions />);
  const yearlyBtn = screen.getByText("YEARLY");
  expect(yearlyBtn).toBeInTheDocument();
  fireEvent.click(yearlyBtn);
  expect(screen.getByText("YEARLY")).toBeInTheDocument();
});
