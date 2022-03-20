const path = require("path");
const express = require("express");

const client = express();

client.use(express.json());
client.use(express.static(path.resolve(__dirname, "../client/build")));
client.use("/public", express.static(path.resolve(__dirname, "public")));

module.exports = client;
