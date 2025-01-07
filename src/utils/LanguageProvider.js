import React, { createContext, useContext, useState, useEffect } from "react";
import i18next from "i18next";

// Create Language Context
const LanguageContext = createContext();

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("i18next") || "en"; // Fetch from localStorage or default to English
  });

  const changeLanguage = (lang) => {
    setLanguage(lang);
    i18next.changeLanguage(lang); // Update i18next language
    localStorage.setItem("i18next", lang); // Persist to localStorage
  };

  useEffect(() => {
    i18next.changeLanguage(language); // Sync i18next on initial load
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom Hook for Convenience
export const useLanguage = () => useContext(LanguageContext);
