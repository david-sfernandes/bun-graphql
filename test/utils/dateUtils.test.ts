import { firstDayOfMonth, lastDayOfMonth } from "@/utils/dateUtils";
import { expect, test } from "bun:test";

test("Get first day of month", () => {
  const date = firstDayOfMonth();

  expect(date).toBeString();
  expect(date).not.toBe("");
});

test("Get last day of month", () => {
  const date = lastDayOfMonth();

  expect(date).toBeString();
  expect(date).not.toBe("");
});
