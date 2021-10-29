import {ReactNode} from "react";

import "./Button.css";

interface IButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "primary" | "secondary" | "filter" | "filter-active";
  disabled?: boolean;
  className?: string;
}

export const Button = ({children, type = "primary", onClick, className}: IButtonProps) => {
  const classes = ["button", `button--${type}`, className].join(" ").trim();

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
