import {Dispatch, SetStateAction, ChangeEvent} from "react";

import {filters, sortOptions} from "config/filters";
import {Button} from "shared/button/Button";
import {Textual} from "shared/text/Textual";
import {TFilter, TSort} from "types";
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
        {filters.map(filterOption => {
          const isActive = filter === filterOption;
          const type = isActive ? "filter-active" : "filter";
          const handleClick = () => setFilter(filterOption);

          return (
            <Button key={filterOption} type={type} onClick={handleClick}>
              {filterOption}
            </Button>
          );
        })}
      </div>
      <div>
        <Textual type="primary">Sort by:</Textual>
        <select className={styles.sort} onChange={handleSortChange} value={sort}>
          {sortOptions.map(sortOption => (
            <option key={sortOption} value={sortOption}>
              {sortOption}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
