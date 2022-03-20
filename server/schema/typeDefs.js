const typeDefs = /* GraphQL */ `
  type Pizza {
    id: ID!
    name: String!
    image: String!
    popularity: Int!
    categories: [String!]!
    modifications: [PizzaModification!]!
  }

  type PizzaModification {
    id: ID!
    dough: String!
    size: Int!
    price: Float!
    pizzasIds: [ID!]!
  }

  type Order {
    id: ID!
    totalPrice: Float!
    totalAmount: Int!
    orderedPizzas: [OrderedPizza!]!
  }

  type OrderedPizza {
    dough: String!
    size: Int!
    price: Float!
    amount: Int!
    pizzaName: String!
  }

  type Message {
    id: ID!
    from: String!
    message: String!
  }

  type Query {
    pizzas: [Pizza]
    orders: [Order]
    messages: [Message]
  }

  type Mutation {
    createOrder(order: OrderInput): Order
    sendMessage(from: String!, message: String!): Message
  }

  input OrderInput {
    totalPrice: Float!
    totalAmount: Int!
    orderedPizzas: [OrderPizzaInput!]!
  }

  input OrderPizzaInput {
    dough: String!
    size: Int!
    price: Float!
    amount: Int!
    pizzaName: String!
  }

  type Subscription {
    messageSent: Message
  }
`;

module.exports = typeDefs;
