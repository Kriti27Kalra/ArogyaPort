// src/contexts/LanguageContext.jsx
import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

const translations = {
  en: {
    home: 'Home',
    treatments: 'Treatments',
    hospitals: 'Hospitals',
    doctors: 'Doctors',
    packages: 'Packages',
    blog: 'Blog',
    contact: 'Contact',
    enquiry: 'Send Enquiry',
    getTreated: 'Get Treated in India',
    // Add more translations as needed
  },
  ar: {
    home: 'الرئيسية',
    treatments: 'العلاجات',
    hospitals: 'المستشفيات',
    doctors: 'الأطباء',
    packages: 'الباقات',
    blog: 'المدونة',
    contact: 'اتصل بنا',
    enquiry: 'أرسل استفسار',
    getTreated: 'احصل على العلاج في الهند',
  },
  ru: {
    home: 'Главная',
    treatments: 'Лечение',
    hospitals: 'Больницы',
    doctors: 'Врачи',
    packages: 'Пакеты',
    blog: 'Блог',
    contact: 'Контакты',
    enquiry: 'Отправить запрос',
    getTreated: 'Лечитесь в Индии',
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};