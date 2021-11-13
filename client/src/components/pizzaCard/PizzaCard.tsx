import {useEffect, useState, memo} from "react";

import {useCard} from "context/ShoppingCardContext";
import {Textual} from "shared/text/Textual";
import {PizzaTypeButton} from "./pizzaTypeButton/PizzaTypeButton";
import {Button} from "shared/button/Button";
import {formatCurrency, getPrice} from "utils/price";
import {IMAGES_URL} from "config/paths";
import {doughTypes, sizeTypes, sizeUnit} from "config/modifications";
import {IPizza} from "types";
import styles from "./PizzaCard.module.css";

const PizzaCardComponent = ({pizza}: {pizza: IPizza}) => {
  const {id, name, image, modifications} = pizza;
  const {dough: defaultDough, price: basePrice, size: defaultSize} = modifications[0];
  const {add} = useCard();

  const [dough, setDough] = useState(defaultDough);
  const [size, setSize] = useState(defaultSize);
  const [price, setPrice] = useState(basePrice);
  const displayPrice = formatCurrency(price);

  useEffect(() => {
    setPrice(getPrice(basePrice, size, dough));
  }, [basePrice, size, dough]);

  const addToCard = () => {
    add({id, name, dough, size, price, image});
  };

  return (
    <div className={styles.pizzaCard}>
      <img src={`${IMAGES_URL}/${image}`} alt={name} />
      <Textual type="heading2">{name}</Textual>
      <div className={styles.pizzaType}>
        <div>
          {doughTypes.map(doughType => (
            <PizzaTypeButton key={doughType} value={doughType} isActive={dough === doughType} onClick={() => setDough(doughType)} unit="dough" />
          ))}
        </div>
        <div>
          {sizeTypes.map(sizeType => (
            <PizzaTypeButton key={sizeType} value={sizeType} isActive={size === sizeType} onClick={() => setSize(sizeType)} unit={sizeUnit} />
          ))}
        </div>
      </div>
      <div className={styles.bottomSection}>
        <Textual type="heading2">{displayPrice}</Textual>
        <Button type="secondary" onClick={addToCard}>
          + Add
        </Button>
      </div>
    </div>
  );
};

export const PizzaCard = memo(PizzaCardComponent);
