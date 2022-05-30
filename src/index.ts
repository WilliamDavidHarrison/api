import express from "express";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

const router = require("./util/router");
const config = require("./config.json");

app.use("/", router);

app.listen(config.port, () => {
    console.log(`API Listening on Port: ${config.port}`);
})
