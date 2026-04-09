import { describe, expect, it } from "vitest";
import { isNonEmptyString } from "@core/utils";

describe("isNonEmptyString", () => {
  it("accepts non-empty strings", () => {
    expect(isNonEmptyString("a")).toBe(true);
  });

  it("rejects empty or non-strings", () => {
    expect(isNonEmptyString("")).toBe(false);
    expect(isNonEmptyString("   ")).toBe(false);
    expect(isNonEmptyString(null)).toBe(false);
  });
});
