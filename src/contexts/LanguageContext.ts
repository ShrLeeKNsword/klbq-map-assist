import { createContext } from 'react'
import { i18nData } from '../data/i18n.tsx'
import { Languages } from '../types/interface.ts'

export function getLanguage(): Languages {
  const language = window.localStorage.getItem("language")
  return language === null ? Languages.en_US : language as Languages
}

export function saveLanguage(lang: Languages) {
  window.localStorage.setItem("language", lang.toString())
}

export const LanguageContext = createContext(i18nData[getLanguage()])