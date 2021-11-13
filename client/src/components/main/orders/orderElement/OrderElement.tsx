import {Textual} from "shared/text/Textual";
import {formatCurrency} from "utils/price";
import {IOrderElement} from "types";
import {sizeUnit} from "config/modifications";
import styles from "./OrderElement.module.css";

export const OrderElement = ({dough, size, price, amount, pizzaName}: IOrderElement) => {
  const displayPrice = formatCurrency(price * amount);

  return (
    <div className={styles.orderElement}>
      <Textual type="heading2">{pizzaName}</Textual>
      <Textual type="secondary">{dough} dough</Textual>
      <Textual type="secondary">
        {size} {sizeUnit}
      </Textual>
      <Textual type="heading2">{amount}</Textual>
      <Textual type="heading2">{displayPrice}</Textual>
    </div>
  );
};
