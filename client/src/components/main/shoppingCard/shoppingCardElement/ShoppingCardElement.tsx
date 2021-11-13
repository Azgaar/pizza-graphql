import {useCard} from "context/ShoppingCardContext";
import {Textual} from "shared/text/Textual";
import {roundPrice, formatCurrency} from "utils/price";
import styles from "./ShoppingCardElement.module.css";

export const ShoppingCardElement = ({group, name, imageUrl, price, dough, size, quantity}: ICardElement) => {
  const {remove, increase, decrease} = useCard();
  const displayPrice = formatCurrency(roundPrice(price * quantity));

  const increaseQuantity = () => {
    increase(group);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      decrease(group);
    }
  };

  const removeElement = () => {
    remove(group);
  };

  return (
    <div className={styles.shoppingCardElement}>
      <img src={imageUrl} alt={name} />
      <div className={styles.shoppingCardElementInfo}>
        <Textual type="heading2">{name}</Textual>
        <Textual type="secondary">
          {dough} dough, {size} size
        </Textual>
      </div>
      <div className={styles.quantity}>
        <button title="Decrease quantity" className={styles.cardButton} onClick={decreaseQuantity}>
          −
        </button>
        <Textual type="heading2">{quantity}</Textual>
        <button title="Increase quantity" className={styles.cardButton} onClick={increaseQuantity}>
          +
        </button>
      </div>
      <div>
        <Textual type="heading2">{displayPrice}</Textual>
      </div>
      <div>
        <button title="Remove element" className={styles.cardButton} onClick={removeElement}>
          ⨯
        </button>
      </div>
    </div>
  );
};
