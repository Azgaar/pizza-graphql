import {gql} from "@apollo/client";

export const CREATE_ORDER = gql`
  mutation createOrder($input: OrderInput!) {
    createOrder(order: $input) {
      id
      __typename
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
