import Button from "../components/ui/Button";
import Text from "../components/ui/Text";
import { useLanguage } from "../context/LanguageContext";
import { ErrorPageText } from "../transations/GlobalTexts";

const Error = () => {
  const { language } = useLanguage();

  return (
    <>
      <section className="mt-25 flex flex-col items-center justify-center text-center px-6">
        <Text as="h1" className="text-8xl font-bold" children="404" />

        <Text as="p" className="text-secondary mt-4 max-w-md">
          {ErrorPageText[language].title}
        </Text>
        <Button to="/" className="button-primary mt-8">
          {ErrorPageText[language].button}
        </Button>
      </section>
    </>
  );
};

export default Error;
