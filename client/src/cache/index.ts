import {InMemoryCache} from "@apollo/client";

import {cartVar} from "../store/cart";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cart: {
          read() {
            return cartVar();
          }
        }
      }
    }
  }
});
