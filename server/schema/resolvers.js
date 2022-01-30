const fs = require("fs");
const {v4: uuidv4} = require("uuid");

const pizzas = require("../data/pizzas.json");
const orders = require("../data/orders.json");
const modifications = require("../data/modifications.json");

const resolvers = {
  Query: {
    pizzas: () => pizzas,
    orders: () => orders
  },

  Pizza: {
    modifications: parentValue => modifications.filter(modification => modification.pizzasIds.includes(parentValue.id))
  },

  Mutation: {
    createOrder: (_, {order}) => {
      const {totalPrice, totalAmount, orderedPizzas} = order;
      const newOrder = {id: uuidv4(), totalPrice, totalAmount, orderedPizzas};
      orders.push(newOrder);

      fs.readFile("data/orders.json", "utf8", (err, data) => {
        if (err) {
          console.error(err);
        } else {
          const orders = [...JSON.parse(data), newOrder];
          fs.writeFile("data/orders.json", JSON.stringify(orders), "utf8", () => newOrder);
        }
      });

      return newOrder;
    }
  }
};

module.exports = resolvers;
