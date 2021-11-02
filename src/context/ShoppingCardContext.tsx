import {useState, createContext, useContext, ReactNode} from "react";

interface IShoppingCardContext {
  isOpen: boolean;
  toggle: () => void;
  card: ICardElement[];
  add: (element: ICardData) => void;
  remove: (group: string) => void;
  clear: () => void;
  increase: (group: string) => void;
  decrease: (group: string) => void;
}

const ShoppingCardContext = createContext({
  isOpen: false,
  toggle: () => {},
  card: [],
  add: () => {},
  remove: () => {},
  clear: () => {},
  increase: () => {},
  decrease: () => {}
} as IShoppingCardContext);

export const ShoppingCardProvider = ({children}: {children: ReactNode}) => {
  const [isOpen, setOpen] = useState(false);
  const [card, setCard] = useState<ICardElement[]>([]);

  const toggle = () => setOpen(open => !open);

  const increase = (group: string) => {
    setCard(card.map(item => (item.group === group ? {...item, quantity: item.quantity + 1} : item)));
  };

  const decrease = (group: string) => {
    setCard(card.map(item => (item.group === group ? {...item, quantity: item.quantity - 1} : item)));
  };

  const add = (element: ICardData) => {
    const group = `${element.id}-${element.dough}-${element.size}`;
    const existing = card.find(item => item.group === group);
    if (existing) {
      increase(group);
    } else {
      setCard(oldCard => [...oldCard, {...element, quantity: 1, group}]);
    }
  };

  const remove = (group: string) => {
    setCard(card.filter(item => item.group !== group));
  };

  const clear = () => {
    setCard([]);
  };

  return <ShoppingCardContext.Provider value={{isOpen, card, toggle, add, remove, clear, increase, decrease}}>{children}</ShoppingCardContext.Provider>;
};

export const useCard = () => useContext(ShoppingCardContext);
