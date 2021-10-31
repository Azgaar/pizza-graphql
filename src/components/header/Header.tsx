import {Textual} from "shared/text/Textual";
import {ShoppingCardButton} from "./shoppingCardButton/ShoppingCardButton";
import styles from "./Header.module.css";

export const Header = () => {
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
        <ShoppingCardButton />
      </div>
    </header>
  );
};
