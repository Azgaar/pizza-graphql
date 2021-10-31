import {useCard} from "context/ShoppingCardContext";
import {Button} from "shared/button/Button";
import {CartIcon} from "shared/cartIcon/CartIcon";
import {formatCurrency, roundPrice} from "utils/price";
import styles from "./ShoppingCardButton.module.css";

const space = "\u00A0";

export const ShoppingCardButton = () => {
  const {list} = useCard();

  const cardElements = list();
  const cardPrice = roundPrice(cardElements.reduce((acc, element) => acc + element.price, 0));
  const cardItems = cardElements.length;

  const openCard = () => {
    window.open("/shopping-card", "_blank");
  };

  return (
    <Button className={styles.cartButton} onClick={openCard}>
      {cardItems > 0 && <span>{formatCurrency(cardPrice)}</span>}
      <span>
        <CartIcon />
        {space}
        {cardItems}
      </span>
    </Button>
  );
};
