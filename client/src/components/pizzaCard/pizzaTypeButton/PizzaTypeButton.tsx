import styles from "./PizzaTypeButton.module.css";

interface IPizzaTypeButtonProps {
  value: string | number;
  isActive: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  unit?: string;
}

export const PizzaTypeButton = ({value, isActive, isDisabled, onClick, unit}: IPizzaTypeButtonProps) => {
  const classes = [styles.pizzaTypeButton, isActive ? styles["pizzaTypeButton--active"] : "", isDisabled ? styles["pizzaTypeButton--disabled"] : ""]
    .join(" ")
    .trim();
  return (
    <button className={classes} onClick={onClick}>
      {value}
      {unit && ` ${unit}`}
    </button>
  );
};
