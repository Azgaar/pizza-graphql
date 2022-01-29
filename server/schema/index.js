const fs = require("fs");
const {v4: uuidv4} = require("uuid");
const {GraphQLObjectType, GraphQLNonNull, GraphQLList, GraphQLSchema} = require("graphql");

const pizzas = require("../data/pizzas.json");
const orders = require("../data/orders.json");

const PizzaType = require("./typeDefs/PizzaType");
const OrderInputType = require("./typeDefs/OrderInputType");
const OrderType = require("./typeDefs/OrderType");

const rootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    pizzas: {
      type: GraphQLList(PizzaType),
      resolve: () => pizzas
    },
    orders: {
      type: GraphQLList(OrderType),
      resolve: () => orders
    }
  }
});

const rootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    createOrder: {
      type: OrderType,
      args: {
        order: {
          type: new GraphQLNonNull(OrderInputType)
        }
      },
      resolve: (_, {order}) => {
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
  }
});

module.exports = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation
});
