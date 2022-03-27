import {useState, memo} from "react";

import {addToCart} from "store/cart";
import {Textual} from "shared/text/Textual";
import {PizzaTypeButton} from "./pizzaTypeButton/PizzaTypeButton";
import {Button} from "shared/button/Button";
import {formatCurrency, getPrice} from "utils/price";
import {IMAGES_FOLDER} from "config/paths";
import {doughTypes, sizeTypes, sizeUnit} from "config/modifications";
import {IPizza, TDough, TSize} from "types";
import styles from "./PizzaCard.module.css";

const PizzaCardComponent = ({pizza}: {pizza: IPizza}) => {
  const {id, name, image, modifications} = pizza;
  const {dough: initialDough, price: initialPrice, size: initialSize} = modifications[0];

  const [dough, setDough] = useState(initialDough);
  const [size, setSize] = useState(initialSize);
  const [price, setPrice] = useState(initialPrice);
  const displayPrice = formatCurrency(price);

  const changePrice = (dough: TDough, size: TSize) => {
    const modification = modifications.find(type => type.dough === dough && type.size === size);
    if (modification) setPrice(getPrice(modification.price));
  };

  const handleDoughChange = (newDough: TDough) => {
    setDough(newDough);
    changePrice(newDough, size);
  };

  const handleSizeChange = (newSize: TSize) => {
    setSize(newSize);
    changePrice(dough, newSize);
  };

  const checkIfDisabled = (dough: TDough, size: TSize) => {
    const available = modifications.find(type => type.dough === dough && type.size === size);
    return !available;
  };

  const addElement = () => {
    addToCart({id, name, dough, size, price, image});
  };

  return (
    <div className={styles.pizzaCard}>
      <img src={`${IMAGES_FOLDER}/${image}`} alt={name} />
      <Textual type="heading2">{name}</Textual>
      <div className={styles.pizzaType}>
        <div>
          {doughTypes.map(doughType => {
            const isActive = doughType === dough;
            const isDisabled = checkIfDisabled(doughType, size);
            const onClick = () => handleDoughChange(doughType);
            return <PizzaTypeButton key={doughType} value={doughType} isActive={isActive} isDisabled={isDisabled} onClick={onClick} unit="dough" />;
          })}
        </div>
        <div>
          {sizeTypes.map(sizeType => {
            const isActive = sizeType === size;
            const isDisabled = checkIfDisabled(dough, sizeType);
            const onClick = () => handleSizeChange(sizeType);
            return <PizzaTypeButton key={sizeType} value={sizeType} isActive={isActive} isDisabled={isDisabled} onClick={onClick} unit={sizeUnit} />;
          })}
        </div>
      </div>
      <div className={styles.bottomSection}>
        <Textual type="heading2">{displayPrice}</Textual>
        <Button type="secondary" onClick={addElement}>
          + Add
        </Button>
      </div>
    </div>
  );
};

export const PizzaCard = memo(PizzaCardComponent);
