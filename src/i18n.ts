import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "./components/locales/ru.json";
import kk from "./components/locales/kk.json";
import en from "./components/locales/en.json";

const resources = {
  ru: { translation: ru },
  kk: { translation: kk },
  en: { translation: en },
};
i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
