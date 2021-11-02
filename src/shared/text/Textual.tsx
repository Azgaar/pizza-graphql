import "./Textual.css";

type TTextualType = "header" | "heading" | "heading2" | "subtitle" | "primary" | "secondary";

interface ITextualProps {
  children: React.ReactNode;
  type: TTextualType;
  className?: string;
}

export const Textual = ({children, type, className}: ITextualProps) => {
  const classes = `text--${type} ${className || ""}`.trim();

  return <span className={classes}>{children}</span>;
};
