import { createStore } from "zustand/vanilla";

export type AppUiState = {
  sidebarOpen: boolean;
};

export const appStore = createStore<AppUiState>(() => ({
  sidebarOpen: true,
}));

export function setSidebarOpen(open: boolean) {
  appStore.setState({ sidebarOpen: open });
}
