import { Link } from "react-router-dom";
import type { ButtonProps } from "../types/ButtonProps";

const Button = ({ children, type = "button", to, className, onClick }: ButtonProps) => {
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type={type} className={className}>
      {children}
    </button>
  );
};

export default Button;
