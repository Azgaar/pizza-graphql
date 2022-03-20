const path = require("path");
const express = require("express");

const PORT = process.env.CLIENT_APP_PORT || 3000;

const client = express();

client.use(express.json());
client.use(express.static(path.resolve(__dirname, "../client/build")));
client.use("/public", express.static(path.resolve(__dirname, "public")));

client.listen(PORT, () => {
  console.info(`Client server is listening on port http://localhost:${PORT}`);
});
