const fs = require("fs");
const {v4: uuidv4} = require("uuid");

const pizzas = require("../data/pizzas.json");
const orders = require("../data/orders.json");
const modifications = require("../data/modifications.json");

const chats = [{id: 0, from: "Alice", message: "Hello, how can I help you?"}];
const CHAT_CHANNEL = "CHAT_CHANNEL";

const resolvers = {
  Query: {
    pizzas: () => pizzas,
    orders: () => orders,
    chats: (root, args, context) => chats
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
      const chat = {id: chats.length + 1, from, message};
      chats.push(chat);
      pubsub.publish("CHAT_CHANNEL", {messageSent: chat});

      return chat;
    }
  },

  Subscription: {
    messageSent: {
      subscribe: (_, __, {pubsub}) => pubsub.asyncIterator(CHAT_CHANNEL)
    }
  }
};

module.exports = resolvers;
