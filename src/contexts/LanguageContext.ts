import { createContext } from 'react'
import { i18nData, Languages } from '../data/i18n.tsx'

export function getLanguage(): Languages {
  const language = window.localStorage.getItem("language")
  return language === null ? Languages.English : parseInt(language)
}

export function saveLanguage(lang: Languages) {
  window.localStorage.setItem("language", lang.toString())
}

export const LanguageContext = createContext(i18nData[getLanguage()])