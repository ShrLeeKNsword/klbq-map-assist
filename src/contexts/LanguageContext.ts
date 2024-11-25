import { createContext } from 'react'
import { i18nData } from '../data/i18n.tsx'
import { Languages } from '../types/interface.ts'

export function getLanguage(): Languages {
  const language = window.localStorage.getItem("language")

  if (language && Object.values(Languages).includes(language as Languages)) {
    return language as Languages
  }

  return Languages.en_US
}

export function saveLanguage(lang: Languages) {
  window.localStorage.setItem("language", lang.toString())
}

export const LanguageContext = createContext(i18nData[getLanguage()])