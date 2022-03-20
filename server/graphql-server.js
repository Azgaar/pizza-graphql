const express = require("express");
const cors = require("cors");

const ORIGIN = process.env.CLIENT || "http://localhost:3000";
const GRAPHQL_PORT = process.env.GRAPHQL_PORT || 3001;

const graphql = express();
graphql.use(express.json());
graphql.use(cors({origin: ORIGIN}));

const {createServer, createPubSub} = require("@graphql-yoga/node");
const pubsub = createPubSub();
const schema = require("./schema");
const yoga = createServer({schema, graphiql: true, context: {pubsub}});
graphql.use("/graphql", yoga.requestListener);

graphql.listen(GRAPHQL_PORT, () => {
  console.info(`Graphql server is listening on port http://localhost:${GRAPHQL_PORT}`);
});
