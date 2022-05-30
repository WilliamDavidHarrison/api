import express from "express";
import bodyParser from "body-parser";

const app = express();

const router = require("./util/router.js");
const config = require("./config.json");

app.use("/", router);

app.listen(config.port, () => {
    console.log(`API Listening on Port: ${config.port}`);
})
