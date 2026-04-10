export type ConsentState = {
  analytics: boolean
}

export function readConsent(): ConsentState {
  return { analytics: false }
}
