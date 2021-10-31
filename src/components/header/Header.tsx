import {Button} from "shared/button/Button";
import {CartIcon} from "shared/cartIcon/CartIcon";
import {Textual} from "shared/text/Textual";
import {formatCurrency} from "utils/price";
import styles from "./Header.module.css";

export const Header = () => {
  const cartPrice = 21.23;
  const cartItems = 2;
  const space = "\u00A0";

  return (
    <header className="container">
      <div>
        <img src="logo.png" alt="Pizza GraphQL" />
        <div>
          <Textual className={styles.title} type="header">
            Pizza GraphQL
          </Textual>
          <Textual className={styles.slogan} type="secondary">
            The tastiest GraphQL pizza
          </Textual>
        </div>
      </div>
      <div>
        <Button className={styles.cartButton}>
          <span>{formatCurrency(cartPrice)}</span>
          <span>
            <CartIcon />
            {space}
            {cartItems}
          </span>
        </Button>
      </div>
    </header>
  );
};
