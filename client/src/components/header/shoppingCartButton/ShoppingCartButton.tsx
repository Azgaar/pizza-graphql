import {useNavigate} from "react-router-dom";
import {useReactiveVar} from "@apollo/client";

import {cartVar} from "store/cart";
import {Button} from "shared/button/Button";
import {CartIcon} from "shared/cartIcon/CartIcon";
import {formatCurrency, roundPrice} from "utils/price";

export const ShoppingCartButton = () => {
  const navigate = useNavigate();
  const cart = useReactiveVar(cartVar);

  const cartPrice = roundPrice(cart.reduce((acc, {price, quantity}) => acc + price * quantity, 0));
  const cartItems = roundPrice(cart.reduce((acc, {quantity}) => acc + quantity, 0));

  const toggleCard = () => {
    const isCardOpen = window.location.pathname === "/cart";
    navigate(isCardOpen ? "/" : "/cart");
  };

  return (
    <Button onClick={toggleCard}>
      {cartItems > 0 && formatCurrency(cartPrice)}
      {cartItems > 0 && "\u00A0|\u00A0"}
      <CartIcon />
      {"\u00A0"}
      {cartItems}
    </Button>
  );
};
