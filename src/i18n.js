import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationRW from './locales/rw/translation.json';

// The translations
const resources = {
  en: {
    translation: translationEN,
  },
  rw: {
    translation: translationRW,
  },
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // If the current language doesn't have a translation

    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;
