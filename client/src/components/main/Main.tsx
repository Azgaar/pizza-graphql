import {useCard} from "context/ShoppingCardContext";
import {MainContent} from "./mainContent/MainContent";
import {ShoppingCard} from "./shoppingCard/ShoppingCard";
import styles from "./Main.module.css";

export const Main = () => {
  const {isOpen: isCardOpen} = useCard();

  return <main className={styles.main}>{isCardOpen ? <ShoppingCard /> : <MainContent />}</main>;
};
