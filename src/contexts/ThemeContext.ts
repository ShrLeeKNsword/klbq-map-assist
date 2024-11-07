import { createContext } from 'react'

export type ThemeType = "dark" | "light"

export function getTheme(): ThemeType {
  return (
    window.localStorage.getItem("theme") ?? (
      window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"
    )
  ) as ThemeType
}

export function saveTheme(theme: ThemeType) {
  window.localStorage.setItem("theme", theme)
}

export const ThemeContext = createContext(getTheme())