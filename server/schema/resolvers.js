const fs = require("fs");
const {v4: uuidv4} = require("uuid");

const pizzas = require("../data/pizzas.json");
const orders = require("../data/orders.json");
const modifications = require("../data/modifications.json");

const messages = [{id: uuidv4(), from: "Alice", message: "Hello, how can I help you?"}];

const resolvers = {
  Query: {
    pizzas: () => pizzas,
    orders: () => orders,
    messages: () => messages
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
    },

    sendMessage(_, {from, message}, {pubsub}) {
      const messageSent = {id: uuidv4(), from, message};
      messages.push(messageSent);
      pubsub.publish("messageSent", {messageSent});

      return messageSent;
    }
  },

  Subscription: {
    messageSent: {
      subscribe: (root, args, {pubsub}) => {
        return pubsub.subscribe("messageSent");
      }
    }
  }
};

module.exports = resolvers;
