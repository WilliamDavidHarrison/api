const { Router } = require("express");
const bodyParser = require("body-parser");

const router = Router();
const routes = require("../helpers/routes");

router.use(bodyParser.json());
router.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
router.use(bodyParser.text({ type: "text/html" }));

router.get("/", async (req, res) => {
    res.redirect("https://williamdavidharrison.com.au");
})

router.get("/status", async (req, res) => {
    routes.status.execute(req, res);
})

router.get("/test", async (req, res) => {
    routes.test.execute(req, res);
})

module.exports = router;
