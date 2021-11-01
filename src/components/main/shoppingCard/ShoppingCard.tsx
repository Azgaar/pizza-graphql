import {useCard} from "context/ShoppingCardContext";
import {Textual} from "shared/text/Textual";
import {CartIcon} from "shared/cartIcon/CartIcon";
import {TrashIcon} from "shared/trashIcon/TrashIcon";
import {ShoppingCardElement} from "./shoppingCardElement/ShoppingCardElement";
import styles from "./ShoppingCard.module.css";

export const ShoppingCard = () => {
  const {card, clear} = useCard();

  const groupedCardElements = card.reduce((object, element) => {
    const {id, price, dough, size} = element;
    const key = `${id}-${dough}-${size}-${price}`;
    if (!object[key]) {
      object[key] = {...element, quantity: 1};
    } else {
      object[key].quantity += 1;
    }

    return object;
  }, {} as {[key: string]: ICardElementGrouped});

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
        {Object.values(groupedCardElements).map(group => (
          <ShoppingCardElement key={group.id} {...group} />
        ))}
      </div>
    </div>
  );
};
