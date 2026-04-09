import { describe, expect, it } from "vitest";
import { cacheTags } from "@infra/cache-tags";

describe("cacheTags", () => {
  it("builds item detail tag", () => {
    expect(cacheTags.itemDetail("x")).toBe("tag:item:x");
  });
});
