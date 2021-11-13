type TFilter = "all" | "meat" | "vegan" | "grill" | "hot" | "closed";
type TSort = "popularity" | "price" | "name";
type TDough = "thin" | "regular" | "thick";
type TSize = "small" | "medium" | "large";

interface IPizza {
  id: number;
  name: string;
  image: string;
  basePrice: number;
  categories: TFilter[];
  defaultDough: TDough;
  defaultSize: TSize;
  popularity: number;
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
