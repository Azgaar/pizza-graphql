import {useCallback, useEffect, useState} from "react";

import {PizzaCard} from "components/pizzaCard/PizzaCard";
import {pizzas as mockedPizzas} from "mocks/pizzas";
import styles from "./Pizzas.module.css";

interface IPizzasProps {
  filter: TFilter;
  sort: TSort;
}

export const Pizzas = ({filter, sort}: IPizzasProps) => {
  const getPizzas = useCallback(() => {
    const filtered = filter === "all" ? mockedPizzas : mockedPizzas.filter(({categories}) => categories.includes(filter));
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

  const [pizzas, setPizzas] = useState<IPizza[]>([]);

  useEffect(() => {
    setPizzas(getPizzas);
  }, [getPizzas, filter, sort]);

  return (
    <div className={styles.pizzas}>
      {pizzas.map(pizza => (
        <PizzaCard key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};
