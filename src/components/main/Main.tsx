import {useState} from "react";

import {Textual} from "../../shared/text/Textual";
import {Filters} from "./filters/Filters";
import {Pizzas} from "./pizzas/Pizzas";
import {filters} from "../../config/filters";
import styles from "./Main.module.css";

export const Main = () => {
  const [filter, setFilter] = useState<TFilter>("all");
  const [sort, setSort] = useState<TSort>("popularity");

  const filterName = filters.find(({id}) => id === filter)?.name;

  return (
    <main className={styles.main}>
      <div className="container">
        <Filters filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />
        <div className={styles.heading}>
          <Textual type="heading">{`${filterName} Pizzas`}</Textual>
        </div>
        <Pizzas filter={filter} sort={sort} />
      </div>
    </main>
  );
};
