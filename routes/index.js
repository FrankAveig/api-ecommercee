const express = require("express");
const router = express.Router();
const userRouter = require("./User.routes");
const productRouter = require("./Products.routes");


router.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to API!</h1>
    `);
});

router.use("/user", userRouter);
router.use("/product", productRouter);

module.exports = router;