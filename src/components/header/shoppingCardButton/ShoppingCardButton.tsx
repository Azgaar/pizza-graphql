import {useCard} from "context/ShoppingCardContext";
import {Button} from "shared/button/Button";
import {CartIcon} from "shared/cartIcon/CartIcon";
import {formatCurrency, roundPrice} from "utils/price";
import styles from "./ShoppingCardButton.module.css";

const space = "\u00A0";

export const ShoppingCardButton = () => {
  const {card, toggle} = useCard();
  const cardPrice = roundPrice(card.reduce((acc, element) => acc + element.price, 0));
  const cardItems = card.length;

  return (
    <Button className={styles.cartButton} onClick={toggle}>
      {cardItems > 0 && <span>{formatCurrency(cardPrice)}</span>}
      <span>
        <CartIcon />
        {space}
        {cardItems}
      </span>
    </Button>
  );
};
