import {InMemoryCache} from "@apollo/client";

import {cartVar} from "../store/cart";

export const cache = new InMemoryCache({
  typePolicies: {
    Pizza: {
      keyFields: ["name", "id"]
    },
    Order: {
      keyFields: ["id"]
    },
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
