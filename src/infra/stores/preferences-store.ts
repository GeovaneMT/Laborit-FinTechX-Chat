import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { useShallow } from 'zustand/shallow'

import { DEFAULT_LOCALE } from '@core/constants'

import type { Locale } from '@infra/i18n'

interface PreferencesState {
  locale: Locale
}

interface PreferencesActions {
  setLocale: (
    locale: Locale,
  ) => Promise<{ message?: string; errorMessage?: string }>
}

type PreferencesStore = PreferencesState & PreferencesActions

export const usePreferencesStore = create<PreferencesStore>()(
  persist(
    (set) => ({
      locale: DEFAULT_LOCALE,

      setLocale: async (locale) => {
        try {
          set({ locale })
          return { message: 'Idioma alterado com sucesso' }
        } catch (error) {
          return {
            errorMessage:
              error instanceof Error
                ? error.message
                : 'Erro inesperado ao alterar idioma',
          }
        }
      },
    }),
    {
      name: 'preferences-store',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ locale: state.locale }),
    },
  ),
)

export const useLocalePreference = () => {
  return usePreferencesStore(
    useShallow((store) => ({
      locale: store.locale,
      setLocale: store.setLocale,
    })),
  )
}
