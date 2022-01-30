import {makeVar} from "@apollo/client";

import {getStored, makeStore} from "utils/storage";
import {ICardData, ICartElement} from "types";

const storeKey = "pizzaQL-cart";
const store = makeStore(storeKey);
export const cartVar = makeVar<ICartElement[]>(getStored(storeKey) || []);

const updateCart = (cart: ICartElement[]) => {
  cartVar(cart);
  store(cart);
};

export const clearCart = () => {
  updateCart([]);
};

export const increaseCartItem = (group: string) => {
  const prevCart = cartVar();
  const nextCart = prevCart.map(item => (item.group === group ? {...item, quantity: item.quantity + 1} : item));
  updateCart(nextCart);
};

export const decreaseCartItem = (group: string) => {
  const prevCart = cartVar();
  const nextCart = prevCart.map(item => (item.group === group ? {...item, quantity: item.quantity - 1} : item));
  updateCart(nextCart);
};

export const addToCart = (element: ICardData) => {
  const group = `${element.id}-${element.dough}-${element.size}`;
  const prevCart = cartVar();
  const existing = prevCart.find(item => item.group === group);
  if (existing) {
    increaseCartItem(group);
  } else {
    const nextCart = [...prevCart, {...element, quantity: 1, group}];
    updateCart(nextCart);
  }
};

export const removeFromCart = (group: string) => {
  const prevCart = cartVar();
  const nextCart = prevCart.filter(item => item.group !== group);
  updateCart(nextCart);
};
