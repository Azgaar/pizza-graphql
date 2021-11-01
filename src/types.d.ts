type TFilter = "all" | "meat" | "vegan" | "grill" | "hot" | "closed";
type TSort = "popularity" | "price" | "name";
type TDough = "thin" | "regular" | "thick";
type TSize = "small" | "medium" | "large";

interface IPizza {
  id: number;
  name: string;
  imageUrl: string;
  basePrice: number;
  categories: TFilter[];
  defaultDough: TDough;
  defaultSize: TSize;
  popularity: number;
}

interface ICardElement {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  dough: TDough;
  size: TSize;
}

interface ICardElementGrouped extends ICardElement {
  quantity: number;
}
