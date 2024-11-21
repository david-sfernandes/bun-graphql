import cleanNumericString from "@/utils/cleanNumericString";
import { expect, test } from "bun:test";

test("Clean numeric string", () => {
  const cleaned = cleanNumericString("123.456.789-00/  ");

  expect(cleaned).toBe("12345678900");
});
