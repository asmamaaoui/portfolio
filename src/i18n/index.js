import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import fr from './locales/fr.json';
import en from './locales/en.json';
import ar from './locales/ar.json';
import ru from './locales/ru.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
      ar: { translation: ar },
      ru: { translation: ru },
    },

    // إذا اللغة مش مدعومة → فرنسي
    fallbackLng: 'fr',

    detection: {
      // 1. يشوف إذا المستخدم اختار لغة من قبل (محفوظة)
      // 2. إذا لا → يأخذ لغة المتصفح تلقائي
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },

    interpolation: { escapeValue: false },
  });

export default i18n;