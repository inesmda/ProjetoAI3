const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/middlewareAuth")

router.use(authMiddleware);

router.get("/product", async (req, res) => {
    res.send({ products: true, user: req.userId });
});

module.exports = (app) => app.use(router);