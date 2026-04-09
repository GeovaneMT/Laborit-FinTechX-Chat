export function initClientInstrumentation() {
  if (process.env.NODE_ENV !== "production") {
    return;
  }
  console.info("[analytics] stub: client instrumentation ready");
}
