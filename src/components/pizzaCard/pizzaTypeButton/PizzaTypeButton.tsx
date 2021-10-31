import styles from "./PizzaTypeButton.module.css";

interface IPizzaTypeButtonProps {
  value: string;
  isActive: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

export const PizzaTypeButton = ({value, isActive, isDisabled, onClick}: IPizzaTypeButtonProps) => {
  const classes = [styles.pizzaTypeButton, isActive ? styles["pizzaTypeButton--active"] : "", isDisabled ? styles["pizzaTypeButton--disabled"] : ""]
    .join(" ")
    .trim();
  return (
    <button className={classes} onClick={onClick}>
      {value}
    </button>
  );
};
