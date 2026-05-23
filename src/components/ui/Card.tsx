import type { CardProp } from "../../types/CardProps";
import Text from "./Text";

const Card = ({ title, content }: CardProp) => {
  return (
    <div className="card">
      <Text as="h3" className="font-bold text-xl sm:text-2xl break-words">
        {title}
      </Text>

      <Text
        as="p"
        className="text-secondary mt-2 text-sm sm:text-base leading-relaxed break-words"
      >
        {content}
      </Text>
    </div>
  );
};

export default Card;
