const client = require("./client-server");
const graphql = require("./graphql-server");

const CLIENT_APP_PORT = process.env.CLIENT_APP_PORT || 3000;
const GRAPHQL_PORT = process.env.GRAPHQL_PORT || 3001;

client.listen(CLIENT_APP_PORT, () => {
  console.info(`Client server is listening on port http://localhost:${CLIENT_APP_PORT}`);
});

graphql.listen(GRAPHQL_PORT, () => {
  console.info(`Graphql server is listening on port http://localhost:${GRAPHQL_PORT}`);
});
