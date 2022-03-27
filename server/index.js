const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const ORIGIN = process.env.CLIENT || "http://localhost:3000";

const server = express();
server.use(express.json());
server.use(cors({origin: ORIGIN}));

const {createServer, createPubSub} = require("@graphql-yoga/node");
const pubsub = createPubSub();
const schema = require("./schema");
const yoga = createServer({schema, graphiql: true, context: {pubsub}});
server.use("/graphql", yoga.requestListener);

server.listen(PORT, () => {
  console.info(`Graphql server is listening on port http://localhost:${PORT}`);
});
