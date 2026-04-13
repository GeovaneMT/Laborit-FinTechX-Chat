import { createContext, RefObject } from 'react'

export type ScrollRef = RefObject<HTMLDivElement | null>
export const ScrollContext = createContext<ScrollRef | null>(null)

export const { Provider: ScrollContextProvider } = ScrollContext
