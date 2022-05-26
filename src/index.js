const express = require("express");

require("dotenv").config();

const app = express();
const port = process.env.port;

app.get("/", (req, res) => {
    res.redirect("https://williamdavidharrison.com.au");
})

app.get("/test", (req, res) => {
    res.send("API is Online!");
})

app.listen(port, () => {
    console.log(`API Listening on Port: ${port}`);
})