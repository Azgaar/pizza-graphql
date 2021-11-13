import {useNavigate} from "react-router-dom";
import {useQuery} from "@apollo/client";

import {GET_ORDERS} from "gql/getOrders";
import {Textual} from "shared/text/Textual";
import {Button} from "shared/button/Button";
import {OrderElement} from "./orderElement/OrderElement";
import {formatCurrency} from "utils/price";
import {IOrder} from "types";
import styles from "./Orders.module.css";

export const Orders = () => {
  const navigate = useNavigate();

  const {data, loading, error} = useQuery(GET_ORDERS, {
    onError: error => console.error(error),
    onCompleted: data => console.table(data)
  });

  const orders = data?.orders as IOrder[];

  const handleBack = () => {
    navigate("/");
  };

  if (loading) {
    return (
      <Textual type="heading" className={styles.noOrders}>
        Loading...
      </Textual>
    );
  }

  if (error) {
    return (
      <div className={styles.noOrders}>
        <Textual type="heading">Something went wrong 😢</Textual>

        <Button type="filter-active" className={styles.backButton} onClick={handleBack}>
          Go back
        </Button>
      </div>
    );
  }

  if (!orders.length) {
    return (
      <div className={styles.noOrders}>
        <Textual type="heading" className={styles.ordersHeading}>
          No orders yet 😭
        </Textual>
        <Textual type="secondary">It looks you do not have any order.</Textual>
        <Textual type="secondary">Add pizzas to the card and create a new order</Textual>

        <Button type="filter-active" className={styles.backButton} onClick={handleBack}>
          Go back
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.orders}>
      <div className={styles.ordersHeading}>
        <Textual type="heading">Orders</Textual>
      </div>

      <div>
        {orders.map(({id, totalPrice, totalAmount, orderedPizzas}) => (
          <div key={id}>
            <div className={styles.orderHeader}>
              <Textual type="secondary">{formatCurrency(totalPrice)}</Textual>
              <Textual type="secondary">{` for ${totalAmount} ${totalAmount > 1 ? "pizzas" : "pizza"}:`}</Textual>
            </div>
            {orderedPizzas.map(pizzaData => (
              <OrderElement key={JSON.stringify(pizzaData)} {...pizzaData} />
            ))}
          </div>
        ))}
      </div>

      <Button type="filter-active" className={styles.backButton} onClick={handleBack}>
        Go back
      </Button>
    </div>
  );
};
