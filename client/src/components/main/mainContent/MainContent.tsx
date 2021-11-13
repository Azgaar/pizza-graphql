import {useState} from "react";

import {Filters} from "./filters/Filters";
import {Pizzas} from "./pizzas/Pizzas";
import {Textual} from "shared/text/Textual";
import {TFilter, TSort} from "types";
import styles from "./MainContent.module.css";
import {capitalize} from "utils/string";

export const MainContent = () => {
  const [filter, setFilter] = useState<TFilter>("all");
  const [sort, setSort] = useState<TSort>("popularity");

  return (
    <div className="container">
      <Filters filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />
      <div className={styles.heading}>
        <Textual type="heading">{`${capitalize(filter)} Pizzas`}</Textual>
      </div>
      <Pizzas filter={filter} sort={sort} />
    </div>
  );
};
