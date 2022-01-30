import {Link, useLocation} from "react-router-dom";

import {Textual} from "shared/text/Textual";
import {ShoppingCartButton} from "./shoppingCartButton/ShoppingCartButton";
import styles from "./Header.module.css";

export const Header = () => {
  const location = useLocation();
  const ordersLink = location.pathname.includes("orders") ? "/" : "/orders";

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
      <div className={styles.buttons}>
        <Link to={ordersLink}>Orders</Link>
        <ShoppingCartButton />
      </div>
    </header>
  );
};
