import {useEffect, useState} from "react";

import {useCard} from "context/ShoppingCardContext";
import {Textual} from "shared/text/Textual";
import {PizzaTypeButton} from "./pizzaTypeButton/PizzaTypeButton";
import {Button} from "shared/button/Button";
import {formatCurrency, getPrice} from "utils/price";
import styles from "./PizzaCard.module.css";

enum EDough {
  THIN = "thin",
  REGURAR = "regular",
  THICK = "thick"
}

enum ESize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large"
}

export const PizzaCard = ({pizza}: {pizza: IPizza}) => {
  const {id, name, basePrice, imageUrl, defaultDough, defaultSize} = pizza;
  const {add} = useCard();

  const [dough, setDough] = useState(defaultDough);
  const [size, setSize] = useState(defaultSize);
  const [price, setPrice] = useState(basePrice);
  const displayPrice = formatCurrency(price);

  useEffect(() => {
    setPrice(getPrice(basePrice, size, dough));
  }, [basePrice, size, dough]);

  const addToCard = () => {
    add({id, name, dough, size, price, imageUrl});
  };

  return (
    <div className={styles.pizzaCard}>
      <img src={imageUrl} alt={name} />
      <Textual type="heading2">{name}</Textual>
      <div className={styles.pizzaType}>
        <div>
          {Object.values(EDough).map(doughType => (
            <PizzaTypeButton key={doughType} value={doughType} isActive={dough === doughType} onClick={() => setDough(doughType)} />
          ))}
        </div>
        <div>
          {Object.values(ESize).map(sizeType => (
            <PizzaTypeButton key={sizeType} value={sizeType} isActive={size === sizeType} onClick={() => setSize(sizeType)} />
          ))}
        </div>
      </div>
      <div className={styles.bottomSection}>
        <Textual type="heading2">{displayPrice}</Textual>
        <Button type="secondary" onClick={addToCard}>
          + Add to card
        </Button>
      </div>
    </div>
  );
};
