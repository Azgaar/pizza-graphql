import {useCard} from "context/ShoppingCardContext";
import {Textual} from "shared/text/Textual";
import {formatCurrency} from "utils/price";
import styles from "./ShoppingCardElement.module.css";

export const ShoppingCardElement = ({id, name, imageUrl, price, dough, size, quantity}: ICardElementGrouped) => {
  const {card, clear} = useCard();
  const displayPrice = formatCurrency(price * quantity);

  return (
    <div className={styles.shoppingCardElement}>
      <img src={imageUrl} alt={name} />
      <div className={styles.shoppingCardElementInfo}>
        <Textual type="heading2">{name}</Textual>
        <Textual type="secondary">
          {dough} dough, {size} size
        </Textual>
      </div>
      <div>{quantity}</div>
      <div>{displayPrice}</div>
      <div>x</div>
    </div>
  );
};
