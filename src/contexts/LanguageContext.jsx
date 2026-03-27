// contexts/LanguageContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import GoogleTranslate from '../services/GoogleTranslate';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const languages = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇦🇪', dir: 'rtl' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh-CN', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳' }
];

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    const savedLang = localStorage.getItem('preferredLanguage');
    return savedLang && languages.find(l => l.code === savedLang) ? savedLang : 'en';
  });
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    // Update RTL direction
    const langObj = languages.find(l => l.code === language);
    const rtl = langObj?.dir === 'rtl';
    setIsRTL(rtl);
    
    if (rtl) {
      document.body.setAttribute('dir', 'rtl');
      document.body.classList.add('rtl');
      document.body.style.textAlign = 'right';
    } else {
      document.body.setAttribute('dir', 'ltr');
      document.body.classList.remove('rtl');
      document.body.style.textAlign = 'left';
    }
  }, [language]);

  // contexts/LanguageContext.js - Only update the setLanguage function
// Find the setLanguage function and replace it with this:

const setLanguage = (langCode) => {
  setLanguageState(langCode);
  
  // Store in localStorage immediately
  localStorage.setItem('preferredLanguage', langCode);
  
  // Try to change Google Translate if available
  if (GoogleTranslate && typeof GoogleTranslate.changeLanguage === 'function') {
    setTimeout(() => {
      GoogleTranslate.changeLanguage(langCode);
    }, 100);
  }
};

  const getLanguageName = (code) => {
    return languages.find(l => l.code === code)?.name || code;
  };

  const getLanguageFlag = (code) => {
    return languages.find(l => l.code === code)?.flag || '🌐';
  };

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      isRTL,
      languages,
      getLanguageName,
      getLanguageFlag
    }}>
      {children}
    </LanguageContext.Provider>
  );
};