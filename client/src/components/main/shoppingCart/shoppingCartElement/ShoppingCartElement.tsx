import {decreaseCartItem, increaseCartItem, removeFromCart} from "store/cart";
import {Textual} from "shared/text/Textual";
import {roundPrice, formatCurrency} from "utils/price";
import {IMAGES_URL} from "config/paths";
import {ICartElement} from "types";
import {sizeUnit} from "config/modifications";
import styles from "./ShoppingCartElement.module.css";

export const ShoppingCartElement = ({group, name, image, price, dough, size, quantity}: ICartElement) => {
  const displayPrice = formatCurrency(roundPrice(price * quantity));

  const increaseQuantity = () => {
    increaseCartItem(group);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      decreaseCartItem(group);
    }
  };

  const removeElement = () => {
    removeFromCart(group);
  };

  return (
    <div className={styles.ShoppingCartElement}>
      <img src={`${IMAGES_URL}/${image}`} alt={name} />
      <div className={styles.ShoppingCartElementInfo}>
        <Textual type="heading2">{name}</Textual>
        <Textual type="secondary">
          {dough} dough, {size} {sizeUnit}
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
