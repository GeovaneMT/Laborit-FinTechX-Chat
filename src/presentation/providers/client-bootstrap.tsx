"use client";

import { useEffect } from "react";
import { initClientInstrumentation } from "../../instrumentation-client";

type Props = {
  enableMsw: boolean;
};

export function ClientBootstrap({ enableMsw }: Props) {
  useEffect(() => {
    initClientInstrumentation();
    if (!enableMsw) return;
    void import("@mocks/browser").then(({ startBrowserMocks }) => startBrowserMocks());
  }, [enableMsw]);

  return null;
}
