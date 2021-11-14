const path = require("path");
const express = require("express");
const cors = require("cors");
const {graphqlHTTP} = require("express-graphql");
const schema = require("./schema/index");

const ORIGIN = process.env.CLIENT || "http://localhost:3000";
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors({origin: ORIGIN}));
app.use(express.json());

app.use("/public", express.static(path.resolve(__dirname, "public")));
app.use("/graphql", graphqlHTTP({schema, graphiql: true}));
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.listen(PORT, () => {
  console.info(`Server is listening on port http://localhost:${PORT}`);
});
