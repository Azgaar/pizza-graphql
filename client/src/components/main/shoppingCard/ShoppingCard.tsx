import {useCard} from "context/ShoppingCardContext";
import {Textual} from "shared/text/Textual";
import {Button} from "shared/button/Button";
import {CartIcon} from "shared/cartIcon/CartIcon";
import {TrashIcon} from "shared/trashIcon/TrashIcon";
import {ShoppingCardElement} from "./shoppingCardElement/ShoppingCardElement";
import {EmptyCardImage} from "shared/emptyCardImage/EmptyCardImage";
import {roundPrice, formatCurrency} from "utils/price";
import styles from "./ShoppingCard.module.css";

export const ShoppingCard = () => {
  const {card, clear, toggle} = useCard();
  const totalCount = card.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = formatCurrency(roundPrice(card.reduce((acc, item) => acc + item.price * item.quantity, 0)));

  if (!card.length) {
    return (
      <div className={styles.emptyCard}>
        <Textual type="heading" className={styles.emptyCardHeading}>
          The card is empty 😭
        </Textual>
        <Textual type="secondary">It looks you did not add any pizzas to the card yet.</Textual>
        <Textual type="secondary">You can add items to the card by clicking on the Add button</Textual>
        <EmptyCardImage />
        <Button type="filter-active" onClick={toggle}>
          Go back
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.shoppingCard}>
      <div className={styles.shoppingCardHead}>
        <Textual type="heading">
          <CartIcon width="29" height="29" style={{transform: "translateY(4px)"}} />
          {" Shopping Card"}
        </Textual>

        <div onClick={() => clear()}>
          <Textual type="secondary" className={styles.clearCard}>
            <TrashIcon style={{transform: "translateY(4px)"}} />
            {" Clear the card"}
          </Textual>
        </div>
      </div>

      <div>
        {card.map(element => (
          <ShoppingCardElement key={element.group} {...element} />
        ))}
      </div>

      <div className={styles.totalLine}>
        <Textual type="subtitle">
          Total count: <strong>{totalCount}</strong>
        </Textual>
        <Textual type="subtitle">
          Total price: <strong className={styles.totalPrice}>{totalPrice}</strong>
        </Textual>
      </div>

      <div className={styles.buttons}>
        <Button type="secondary" onClick={toggle}>
          Go back
        </Button>
        <Button type="primary" onClick={() => alert("Not implemented yet")}>
          Order now!
        </Button>
      </div>
    </div>
  );
};
