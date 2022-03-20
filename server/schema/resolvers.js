const {v4: uuidv4} = require("uuid");

const addToFile = require("./utils");
const pizzas = require("../data/pizzas.json");
const orders = require("../data/orders.json");
const modifications = require("../data/modifications.json");
const messages = require("../data/messages.json");

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

      addToFile("data/orders.json", newOrder);
      return newOrder;
    },

    sendMessage(_, {from, message}, {pubsub}) {
      const messageSent = {id: uuidv4(), from, message};
      messages.push(messageSent);
      pubsub.publish("messageSent", {messageSent});

      // addToFile("data/messages.json", messageSent);
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
