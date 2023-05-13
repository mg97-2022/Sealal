import { useContext } from "react";
import LanguageContext from "../context/languageContext";
import { getWordEn } from "./englishLanguage";
import { getWordAr } from "./arabicLanguage";

export const langObj = {
  ENGLISH: "en",
  ARABIC: "ar",
};

export function FetchWord(key) {
  const { language } = useContext(LanguageContext);

  if (language === langObj.ARABIC) {
    const word = getWordAr(key);
    if (word) return word;
    else return getWordEn(key);
  } else {
    return getWordEn(key);
  }
}

export default {
  langObj,
  FetchWord,
};
