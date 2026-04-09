import { describe, expect, it } from "vitest";
import { NextRequest } from "next/server";
import { applyProxy } from "@/proxy";

describe("applyProxy", () => {
  it("redirects unauthenticated private routes", () => {
    const req = new NextRequest(new URL("http://localhost/dashboard"));
    const res = applyProxy(req);
    expect(res.status).toBe(307);
    expect(res.headers.get("location")).toContain("/login");
  });

  it("allows public routes", () => {
    const req = new NextRequest(new URL("http://localhost/login"));
    const res = applyProxy(req);
    expect(res.status).toBe(200);
  });
});
