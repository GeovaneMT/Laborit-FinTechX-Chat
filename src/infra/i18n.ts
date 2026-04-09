import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "@core/constants";

export type Locale = (typeof SUPPORTED_LOCALES)[number];

const messages: Record<Locale, Record<string, string>> = {
  en: {
    "nav.dashboard": "Dashboard",
    "nav.items": "Items",
    "nav.settings": "Settings",
    "nav.signOut": "Sign out",
    "auth.login": "Log in",
    "auth.register": "Register",
  },
  pt: {
    "nav.dashboard": "Painel",
    "nav.items": "Itens",
    "nav.settings": "Configurações",
    "nav.signOut": "Sair",
    "auth.login": "Entrar",
    "auth.register": "Registrar",
  },
};

export function isLocale(value: string): value is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

export function resolveLocale(value: string | undefined): Locale {
  if (value && isLocale(value)) return value;
  return DEFAULT_LOCALE as Locale;
}

export function getMessages(locale: Locale) {
  return messages[locale];
}
