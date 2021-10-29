interface IFilterElement {
  id: TFilter;
  name: string;
}

interface ISortOption {
  id: TSort;
  name: string;
}

export const filters: IFilterElement[] = [
  {id: "all", name: "All"},
  {id: "meat", name: "Meat"},
  {id: "vegan", name: "Vegan"},
  {id: "grill", name: "Grill"},
  {id: "hot", name: "Hot"},
  {id: "closed", name: "Closed"}
];

export const sortOptions: ISortOption[] = [
  {id: "popularity", name: "popularity"},
  {id: "price", name: "price"},
  {id: "name", name: "name"}
];
