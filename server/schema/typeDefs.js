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

  type Chat {
    id: Int!
    from: String!
    message: String!
  }

  type Query {
    pizzas: [Pizza]
    orders: [Order]
    chats: [Chat]
  }

  type Mutation {
    createOrder(order: OrderInput): Order
    sendMessage(from: String!, message: String!): Chat
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
    messageSent: Chat
  }
`;

module.exports = typeDefs;
