import {gql} from "@apollo/client";

export const GET_ORDERS = gql`
  query getOrders {
    orders {
      id
      totalPrice
      totalAmount
      orderedPizzas {
        dough
        size
        price
        amount
        pizzaName
      }
    }
  }
`;
