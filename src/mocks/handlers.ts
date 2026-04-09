import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/v1/dashboard/summary", () => {
    return HttpResponse.json({ headline: "MSW overview", count: 9 });
  }),
  http.get("/api/v1/profile", () => {
    return HttpResponse.json({ displayName: "MSW user", email: "msw@example.com" });
  }),
];
