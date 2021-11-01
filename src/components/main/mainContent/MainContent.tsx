import {useState} from "react";

import {filters} from "config/filters";
import {Filters} from "./filters/Filters";
import {Pizzas} from "./pizzas/Pizzas";
import {Textual} from "shared/text/Textual";
import styles from "./MainContent.module.css";

export const MainContent = () => {
  const [filter, setFilter] = useState<TFilter>("all");
  const [sort, setSort] = useState<TSort>("popularity");

  const filterName = filters.find(({id}) => id === filter)?.name;

  return (
    <div className="container">
      <Filters filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />
      <div className={styles.heading}>
        <Textual type="heading">{`${filterName} Pizzas`}</Textual>
      </div>
      <Pizzas filter={filter} sort={sort} />
    </div>
  );
};
