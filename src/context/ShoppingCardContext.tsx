import {useState, createContext, useContext, ReactNode} from "react";

interface IShoppingCardContext {
  isOpen: boolean;
  toggle: () => void;
  card: ICardElement[];
  add: (element: ICardElement) => void;
  remove: (id: number) => void;
  clear: () => void;
}

const ShoppingCardContext = createContext({
  isOpen: false,
  toggle: () => {},
  card: [],
  add: () => {},
  remove: () => {},
  clear: () => {}
} as IShoppingCardContext);

export const ShoppingCardProvider = ({children}: {children: ReactNode}) => {
  const [isOpen, setOpen] = useState(false);
  const [card, setCard] = useState<ICardElement[]>([]);

  const toggle = () => setOpen(open => !open);

  const add = (element: ICardElement) => {
    setCard([...card, element]);
  };

  const remove = (id: number) => {
    setCard(card.filter(pizza => pizza.id !== id));
  };

  const clear = () => {
    setCard([]);
  };

  return <ShoppingCardContext.Provider value={{isOpen, card, toggle, add, remove, clear}}>{children}</ShoppingCardContext.Provider>;
};

export const useCard = () => useContext(ShoppingCardContext);
