import React, { createContext, useContext, useState, useEffect } from 'react';
import i18nEn from '../data/i18n_en.json';
import i18nId from '../data/i18n_id.json';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('loomgrid-lang') || 'id';
    } catch (e) {
      return 'id';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('loomgrid-lang', lang);
    } catch (e) {}
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key, fallback = '') => {
    if (lang === 'en') {
      if (i18nEn[key] !== undefined && i18nEn[key] !== '') return i18nEn[key];
      return fallback || i18nId[key] || '';
    }
    // Indonesian
    if (i18nId[key] !== undefined && i18nId[key] !== '') return i18nId[key];
    return fallback || i18nEn[key] || '';
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
