import { createStore } from "zustand/vanilla";

export type SessionState = {
  userId: string | null;
  email: string | null;
};

export const sessionStore = createStore<SessionState>(() => ({
  userId: null,
  email: null,
}));

export function setSessionSnapshot(snapshot: SessionState) {
  sessionStore.setState(snapshot);
}
