const express = require("express");
const cors = require("cors");

const ORIGIN = process.env.CLIENT || "http://localhost:3000";

const graphql = express();
graphql.use(express.json());
graphql.use(cors({origin: ORIGIN}));

const {createServer, createPubSub} = require("@graphql-yoga/node");
const pubsub = createPubSub();
const schema = require("./schema");
const yoga = createServer({schema, graphiql: true, context: {pubsub}});
graphql.use("/graphql", yoga.requestListener);

module.exports = graphql;
