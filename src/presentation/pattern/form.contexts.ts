import { createContext, useContext } from "react";

export type GenericFormContextValue = {
  formId: string;
};

export const GenericFormContext = createContext<GenericFormContextValue | null>(null);

export function useGenericFormContext() {
  const ctx = useContext(GenericFormContext);
  if (!ctx) {
    throw new Error("Form context missing");
  }
  return ctx;
}
