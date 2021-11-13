import {filters, sortOptions} from "config/filters";
import {doughTypes, sizeTypes} from "config/modifications";

type TFilter = typeof filters[numbers];
type TSort = typeof sortOptions[number];
type TDough = typeof doughTypes[number];
type TSize = typeof sizeTypes[number];

interface IPizza {
  id: number;
  name: string;
  image: string;
  popularity: number;
  categories: TFilter[];
  modifications: IPizzaModification[];
}

interface IPizzaModification {
  dough: TDough;
  price: number;
  size: TSize;
}

interface ICardData {
  id: number;
  name: string;
  image: string;
  price: number;
  dough: TDough;
  size: TSize;
}

interface ICardElement extends ICardData {
  group: string;
  quantity: number;
}
