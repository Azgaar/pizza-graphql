const fs = require("fs");
const {v4: uuidv4} = require("uuid");

const pizzas = require("../data/pizzas.json");
const orders = require("../data/orders.json");
const modifications = require("../data/modifications.json");

const chats = [{id: 0, from: "Alice", message: "Hello, how can I help you?"}];

const resolvers = {
  Query: {
    pizzas: () => pizzas,
    orders: () => orders,
    chats: () => chats
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
      const chat = {id: uuidv4(), from, message};
      chats.push(chat);
      console.log(chat);
      pubsub.publish("messageSent", {messageSent: chat});

      return chat;
    }
  },

  Subscription: {
    messageSent: {
      subscribe: (root, args, {pubsub}) => {
        console.log(pubsub);
        return pubsub.subscribe("messageSent");
      }
    }
  }
};

module.exports = resolvers;
