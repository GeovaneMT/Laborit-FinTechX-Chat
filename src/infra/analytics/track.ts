export function trackEvent(name: string, payload?: Record<string, unknown>) {
  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", name, payload);
  }
}
