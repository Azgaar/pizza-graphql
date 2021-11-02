import {useCard} from "context/ShoppingCardContext";
import {Textual} from "shared/text/Textual";
import {CartIcon} from "shared/cartIcon/CartIcon";
import {TrashIcon} from "shared/trashIcon/TrashIcon";
import {ShoppingCardElement} from "./shoppingCardElement/ShoppingCardElement";
import styles from "./ShoppingCard.module.css";

export const ShoppingCard = () => {
  const {card, clear} = useCard();

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
    </div>
  );
};
