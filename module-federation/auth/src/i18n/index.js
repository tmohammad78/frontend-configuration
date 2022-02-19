import en from "./en";

const currentLanguageKeys = en;

const translate = (keyword) => currentLanguageKeys[keyword];

export default translate;
