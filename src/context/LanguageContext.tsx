import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  LanguageCode,
  TRANSLATIONS,
  SUPPORTED_LANGUAGES,
  TranslationDictionary,
  LanguageOption
} from '../data/translations';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: TranslationDictionary;
  currentOption: LanguageOption;
  fontClass: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'vke_language_preference';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>('en');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY) as LanguageCode | null;
      if (saved && TRANSLATIONS[saved]) {
        setLanguageState(saved);
      }
    } catch {
      // localStorage may fail in private mode
    }
  }, []);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  };

  const currentOption =
    SUPPORTED_LANGUAGES.find((opt) => opt.code === language) || SUPPORTED_LANGUAGES[0];

  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  const getFontClass = (code: LanguageCode) => {
    switch (code) {
      case 'hi':
      case 'mr':
        return 'font-indic-devanagari';
      case 'gu':
        return 'font-indic-gujarati';
      case 'pa':
        return 'font-indic-gurmukhi';
      case 'bn':
        return 'font-indic-bengali';
      case 'kn':
        return 'font-indic-kannada';
      default:
        return '';
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        currentOption,
        fontClass: getFontClass(language),
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
