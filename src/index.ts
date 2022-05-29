import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.redirect("https://williamdavidharrison.com.au");
})

app.get("/cdn", async (req, res) => {
  res.redirect("https://cdn.williamharrison.xyz");
})

app.get("/status", async (req, res) => {
  res.redirect("https://status.williamharrison.xyz");
})

app.get("/test", async (req, res) => {
  res.send("API is Online!");
})

app.listen(port, () => {
  console.log(`API Listening on Port: ${port}`);
})
