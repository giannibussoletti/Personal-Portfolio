import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
import enTranslation from "./locales/en/enTranslation"
import itTranslation from "./locales/it/itTranslation"

const resources = {
  ...enTranslation,
  ...itTranslation,
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["it", "en"],
    resources,
    nonExplicitSupportedLngs: true,
    fallbackLng: "it",
    interpolation: {
      escapeValue: false,
    },
  })
