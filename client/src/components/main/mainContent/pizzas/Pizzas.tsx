import {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";

import {PizzaCard} from "components/pizzaCard/PizzaCard";
import {GET_PIZZAS} from "gql/getPizzas";
import {filterAndSortPizzas} from "utils/sorting";
import {IPizza, TFilter, TSort} from "types";
import styles from "./Pizzas.module.css";

interface IPizzasProps {
  filter: TFilter;
  sort: TSort;
}

export const Pizzas = ({filter, sort}: IPizzasProps) => {
  const {data, loading, error} = useQuery(GET_PIZZAS, {
    onError: error => console.error(error)
  });

  const [pizzas, setPizzas] = useState<IPizza[]>([]);

  useEffect(() => {
    if (data) {
      const rawPizzas = data.pizzas as IPizza[];
      setPizzas(filterAndSortPizzas(rawPizzas, filter, sort));
    }
  }, [data, filter, sort]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong 😢</div>;

  return (
    <div className={styles.pizzas}>
      {pizzas.map(pizza => (
        <PizzaCard key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};
