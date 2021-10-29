type TFilter = "all" | "meat" | "vegan" | "grill" | "hot" | "closed";

type TSort = "popularity" | "price" | "name";

type TDough = "thin" | "regular";

type TSize = "small" | "medium" | "large";

interface IPizza {
  id: number;
  name: string;
  imageUrl: string;
  basePrice: number;
  categories: TFilter[];
  defaultDought: TDough;
  defaultSize: TSize;
  popularity: number;
}
