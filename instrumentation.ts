export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    console.info("[analytics] stub: server instrumentation");
  }
}
