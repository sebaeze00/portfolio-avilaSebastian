
import type { TextProps } from "../types/TextProps";

const Text = ({ children, className, as: Component = "p" }: TextProps) => {
  return <Component className={className}>{children}</Component>;
};

export default Text;
