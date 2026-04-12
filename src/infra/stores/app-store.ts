import { create } from 'zustand'
import { useShallow } from 'zustand/shallow'

interface AppUiState {
  sidebarOpen: boolean
}

interface AppUiActions {
  setSidebarOpen: (
    open: boolean,
  ) => Promise<{ message?: string; errorMessage?: string }>
}

type AppStore = AppUiState & AppUiActions

export const useAppStore = create<AppStore>((set) => ({
  sidebarOpen: true,

  setSidebarOpen: async (open) => {
    try {
      set({ sidebarOpen: open })
      return { message: 'Sidebar atualizada com sucesso' }
    } catch (error) {
      return {
        errorMessage:
          error instanceof Error
            ? error.message
            : 'Erro inesperado ao atualizar sidebar',
      }
    }
  },
}))

export const useSidebarState = () => {
  return useAppStore(
    useShallow((store) => ({
      sidebarOpen: store.sidebarOpen,
      setSidebarOpen: store.setSidebarOpen,
    })),
  )
}
