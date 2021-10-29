import {Dispatch, SetStateAction, ChangeEvent} from "react";

import {Button} from "../../../shared/button/Button";
import {Textual} from "../../../shared/text/Textual";
import {filters, sortOptions} from "../../../config/filters";
import styles from "./Filters.module.css";

interface IFiltersProps {
  filter: TFilter;
  setFilter: Dispatch<SetStateAction<TFilter>>;
  sort: TSort;
  setSort: Dispatch<SetStateAction<TSort>>;
}

export const Filters = ({filter, setFilter, sort, setSort}: IFiltersProps) => {
  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value as TSort);
  };

  return (
    <div className={styles.filters}>
      <div>
        {filters.map(({id, name}) => {
          const isActive = filter === id;
          const type = isActive ? "filter-active" : "filter";
          const handleClick = () => setFilter(id);

          return (
            <Button key={id} type={type} onClick={handleClick}>
              {name}
            </Button>
          );
        })}
      </div>
      <div>
        <Textual type="primary">Sort by:</Textual>
        <select className={styles.sort} onChange={handleSortChange} value={sort}>
          {sortOptions.map(({id, name}) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
