import React, { useState, createContext } from "react";
import LangUtils from "@/utils/language";

const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(LangUtils.langObj.ENGLISH);

  const changeLanguageHandler = (changedLanguage) => {
    setLanguage(changedLanguage);
  };

  const store = {
    language,
    changeLanguage: changeLanguageHandler,
  };
  return (
    <LanguageContext.Provider value={store}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
