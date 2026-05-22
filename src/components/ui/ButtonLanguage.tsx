import { useLanguage } from "../../context/LanguageContext";
import Button from "./Button";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex">
      <Button
        onClick={() => setLanguage(language === "es" ? "en" : "es")}
        className="button-primary mb-6 flex gap-2 "
      >
        {language === "es" ? "EN" : "ES"}

        <Globe className="w-6 h-6 text-white-400" />
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
