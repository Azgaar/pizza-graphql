const path = require("path");
const express = require("express");
const cors = require("cors");
const {createServer} = require("@graphql-yoga/node");
const schema = require("./schema");

const {createPubSub} = require("@graphql-yoga/node");
const pubsub = createPubSub();

const ORIGIN = process.env.CLIENT || "http://localhost:3000";
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors({origin: ORIGIN}));
app.use(express.json());

app.use("/public", express.static(path.resolve(__dirname, "public")));

const yoga = createServer({schema, graphiql: true, context: {pubsub}});
app.use("/graphql", yoga.requestListener);

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.listen(PORT, () => {
  console.info(`Server is listening on port http://localhost:${PORT}`);
});

// Subscription
const WS_PORT = 3002;

const {createServer: createHpttpServer} = require("http");
const ws = createHpttpServer(
  (req, res) => {
    res.writeHead(400);
    res.end();
  },
  {context: {pubsub}}
);

ws.listen(WS_PORT, () => console.log("Websocket server has started"));

const {execute, subscribe} = require("graphql");
const {SubscriptionServer} = require("subscriptions-transport-ws");
SubscriptionServer.create(
  {
    schema,
    execute,
    subscribe,
    onConnect: () => console.log("Client connected")
  },
  {server: ws, path: "/graphql"}
);
