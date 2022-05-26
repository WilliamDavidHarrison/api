const express = require("express");
const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
    res.redirect("https://williamdavidharrison.com.au");
})

app.get("/test", (req, res) => {
    res.send("API is Online.");
})

app.listen(process.env.apiPort, () => console.log(`API Listening on Port: ${process.env.apiPort}`));
