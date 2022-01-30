import {useNavigate} from "react-router-dom";
import {gql, useMutation, useReactiveVar} from "@apollo/client";

import {CREATE_ORDER} from "gql/createOrder";
import {Textual} from "shared/text/Textual";
import {Button} from "shared/button/Button";
import {CartIcon} from "shared/cartIcon/CartIcon";
import {TrashIcon} from "shared/trashIcon/TrashIcon";

import {cartVar, clearCart} from "store/cart";
import {EmptyCardImage} from "shared/emptyCardImage/EmptyCardImage";
import {roundPrice, formatCurrency} from "utils/price";
import {ShoppingCartElement} from "./shoppingCartElement/ShoppingCartElement";
import styles from "./ShoppingCart.module.css";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const cart = useReactiveVar(cartVar);

  const totalAmount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = roundPrice(cart.reduce((acc, item) => acc + item.price * item.quantity, 0));

  const [createOrder] = useMutation(CREATE_ORDER, {
    onError: error => console.error(error),
    onCompleted: clearCart,
    update(cache, {data: {createOrder}}) {
      cache.modify({
        fields: {
          orders(prevOrders = []) {
            const newOrder = cache.writeFragment({
              data: createOrder,
              fragment: gql`
                fragment NewOrder on Order {
                  id
                  type
                }
              `
            });
            return [...prevOrders, newOrder];
          }
        }
      });
    }
  });

  const handleOrderCreate = () => {
    const orderedPizzas = cart.map(({dough, size, price, quantity, name}) => {
      return {dough, size, price, amount: quantity, pizzaName: name};
    });

    const order = {totalPrice, totalAmount, orderedPizzas};
    createOrder({
      variables: {input: order},
      optimisticResponse: {
        __typename: "Query",
        createOrder: {
          id: "unknown",
          __typename: "Order",
          ...order
        }
      }
    });

    navigate("/orders");
  };

  const handleBack = () => {
    navigate("/");
  };

  if (!cart.length) {
    return (
      <div className={styles.emptyCard}>
        <Textual type="heading" className={styles.emptyCardHeading}>
          The cart is empty 😭
        </Textual>
        <Textual type="secondary">It looks you did not add any pizzas to the cart yet.</Textual>
        <Textual type="secondary">You can add items to the cart by clicking on the Add button</Textual>
        <EmptyCardImage />
        <Button type="filter-active" onClick={handleBack}>
          Go back
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.ShoppingCart}>
      <div className={styles.ShoppingCartHead}>
        <Textual type="heading">
          <CartIcon width="29" height="29" style={{transform: "translateY(4px)"}} />
          {" Shopping Card"}
        </Textual>

        <div onClick={() => clearCart()}>
          <Textual type="secondary" className={styles.clearCard}>
            <TrashIcon style={{transform: "translateY(4px)"}} />
            {" Clear the cart"}
          </Textual>
        </div>
      </div>

      <div>
        {cart.map(element => (
          <ShoppingCartElement key={element.group} {...element} />
        ))}
      </div>

      <div className={styles.totalLine}>
        <Textual type="subtitle">
          Total count: <strong>{totalAmount}</strong>
        </Textual>
        <Textual type="subtitle">
          Total price: <strong className={styles.totalPrice}>{formatCurrency(totalPrice)}</strong>
        </Textual>
      </div>

      <div className={styles.buttons}>
        <Button type="secondary" onClick={handleBack}>
          Go back
        </Button>
        <Button type="primary" onClick={handleOrderCreate}>
          Order now
        </Button>
      </div>
    </div>
  );
};

export default ShoppingCart;
