import bodyParser from "body-parser";
import express from "express";

const router = require("./util/router");
const config = require("./config.json");

app.use("/", router);

app.listen(config.port, () => {
    console.log(`API Listening on Port: ${config.port}`);
})
