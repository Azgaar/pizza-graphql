import {useMemo, useState} from "react";

import {pizzas} from "../../../mocks/pizzas";
import {Textual} from "../../../shared/text/Textual";
import {formatCurrency, getPrice} from "../../../utils/price";
import styles from "./Pizzas.module.css";

interface IPizzasProps {
  filter: TFilter;
  sort: TSort;
}

export const Pizzas = ({filter, sort}: IPizzasProps) => {
  const sortedPizzas = useMemo(() => {
    const filtered = filter === "all" ? pizzas : pizzas.filter(({categories}) => categories.includes(filter));
    const sorted = filtered.sort((a, b) => {
      if (sort === "price") {
        return a.basePrice - b.basePrice;
      }

      if (sort === "popularity") {
        return b.popularity - a.popularity;
      }

      if (sort === "name") {
        return a.name.localeCompare(b.name);
      }

      return 0;
    });

    return sorted;
  }, [filter, sort]);

  const [pizzasData, setPizzasData] = useState(
    sortedPizzas.map(({id, name, imageUrl, defaultDought, defaultSize, basePrice}) => {
      const price = getPrice(basePrice, defaultSize);

      return {
        id,
        name,
        imageUrl,
        dought: defaultDought,
        size: "small",
        price: price,
        displayPrice: formatCurrency(price)
      };
    })
  );

  return (
    <div className={styles.pizzas}>
      {pizzasData.map(({id, name, displayPrice, imageUrl}) => {
        return (
          <div key={id}>
            <img src={imageUrl} alt={name} />
            <Textual type="heading2">{name}</Textual>
            <Textual type="heading2">{displayPrice}</Textual>
          </div>
        );
      })}
    </div>
  );
};
