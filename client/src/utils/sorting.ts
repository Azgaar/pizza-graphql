import {IPizza, TFilter, TSort} from "types";

type SortFunction = {
  [key in TSort]: (a: IPizza, b: IPizza) => number;
};

const sortBy: SortFunction = {
  price: (a, b) => a.modifications[0]?.price - b.modifications[0]?.price,
  popularity: (a, b) => b.popularity - a.popularity,
  name: (a, b) => a.name.localeCompare(b.name)
};

export const filterAndSortPizzas = (rawPizzas: IPizza[], filter: TFilter, sort: TSort) => {
  const filtered = filter === "all" ? [...rawPizzas] : rawPizzas.filter(({categories}) => categories?.includes(filter));
  const sorted = filtered.sort((a, b) => sortBy[sort](a, b));
  return sorted;
};
