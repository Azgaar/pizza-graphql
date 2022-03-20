const path = require("path");
const express = require("express");
const cors = require("cors");

const ORIGIN = process.env.CLIENT || "http://localhost:3000";
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors({origin: ORIGIN}));
app.use(express.json());

app.use("/public", express.static(path.resolve(__dirname, "public")));

const {createServer, createPubSub} = require("@graphql-yoga/node");
const pubsub = createPubSub();
const schema = require("./schema");
const yoga = createServer({schema, graphiql: true, context: {pubsub}});
app.use("/graphql", yoga.requestListener);

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.listen(PORT, () => {
  console.info(`Server is listening on port http://localhost:${PORT}`);
});
