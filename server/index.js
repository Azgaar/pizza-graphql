const express = require("express");
const cors = require("cors");
const {graphqlHTTP} = require("express-graphql");
const schema = require("./schema/index");

const ORIGIN = process.env.CLIENT || "http://localhost:3000";
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors({origin: ORIGIN}));
app.use(express.static("public"));
app.use(express.json());

app.use("/graphql", graphqlHTTP({schema, graphiql: true}));

app.listen(PORT, () => {
  console.info("Server started...");
});
