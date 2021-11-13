import {useNavigate} from "react-router-dom";

import {useCard} from "context/ShoppingCardContext";
import {Button} from "shared/button/Button";
import {CartIcon} from "shared/cartIcon/CartIcon";
import {formatCurrency, roundPrice} from "utils/price";

export const ShoppingCardButton = () => {
  const navigate = useNavigate();
  const {card} = useCard();
  const cardPrice = roundPrice(card.reduce((acc, {price, quantity}) => acc + price * quantity, 0));
  const cardItems = roundPrice(card.reduce((acc, {quantity}) => acc + quantity, 0));

  const toggleCard = () => {
    const isCardOpen = window.location.pathname === "/card";
    navigate(isCardOpen ? "/" : "/card");
  };

  return (
    <Button onClick={toggleCard}>
      {cardItems > 0 && formatCurrency(cardPrice)}
      {cardItems > 0 && "\u00A0|\u00A0"}
      <CartIcon />
      {"\u00A0"}
      {cardItems}
    </Button>
  );
};
