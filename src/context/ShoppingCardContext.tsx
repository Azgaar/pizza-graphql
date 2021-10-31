import {useState, createContext, useContext, ReactNode} from "react";

interface IShoppingCardContext {
  list: () => ICardElement[];
  add: (element: ICardElement) => void;
  remove: (id: number) => void;
  clear: () => void;
}

const ShoppingCardContext = createContext({
  list: () => [],
  add: () => {},
  remove: () => {},
  clear: () => {}
} as IShoppingCardContext);

export const ShoppingCardProvider = ({children}: {children: ReactNode}) => {
  const [card, setCard] = useState<ICardElement[]>([]);

  const list = () => card;

  const add = (element: ICardElement) => {
    setCard([...card, element]);
  };

  const remove = (id: number) => {
    setCard(card.filter(pizza => pizza.id !== id));
  };

  const clear = () => {
    setCard([]);
  };

  return <ShoppingCardContext.Provider value={{list, add, remove, clear}}>{children}</ShoppingCardContext.Provider>;
};

export const useCard = () => useContext(ShoppingCardContext);
