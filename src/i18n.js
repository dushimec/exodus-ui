// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

// // Import the translation files
// import translationEN from './locales/en/translation.json';
// import translationRW from './locales/rw/translation.json';

// // Setup i18next
// i18n
//   .use(LanguageDetector) // Automatically detects user language
//   .use(initReactI18next) // Bind react-i18next to React
//   .init({
//     resources: {
//       en: {
//         translation: translationEN
//       },
//       rw: {
//         translation: translationRW
//       }
//     },
//     fallbackLng: 'en', // Default language
//     interpolation: {
//       escapeValue: false // React already escapes values to prevent XSS
//     }
//   });

// export default i18n;


// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import enTranslation from './locales/en/translation.json'; // Path to English translations
// import rwTranslation from './locales/rw/translation.json'; // Path to Kinyarwanda translations

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     resources: {
//       en: { translation: enTranslation },
//       rw: { translation: rwTranslation },
//     },
//     fallbackLng: 'en',
//     interpolation: {
//       escapeValue: false,
//     },
//   });

// export default i18n;

// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/translation.json';
import rwTranslations from './locales/rw/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      rw: {
        translation: rwTranslations,
      }
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
