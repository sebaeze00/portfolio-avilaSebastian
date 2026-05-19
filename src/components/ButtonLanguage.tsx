import { useLanguage } from "../context/LanguageContext";
import Button from "./Button";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
      className="button-primary mb-6"
    >
      {language === "es" ? "EN" : "ES"}
    </Button>
  );
};

export default LanguageSwitcher;
