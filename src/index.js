const express = require("express");

const app = express();

const router = require("./util/router");
const config = require("./config.json");

app.use("/", router);

app.listen(config.port, () => {
    console.log(`API Listening on Port: ${config.port}`);
})
