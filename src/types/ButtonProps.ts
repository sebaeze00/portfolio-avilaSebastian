import type { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  to?: string;
  className?: string;
  onClick?: () => void;
};
